import React, {Component} from 'react';
import ClickCatcher from "../../components/ClickCatcher";
import RenderPoints from "../../components/RenderPoints";
import PointsNav from "../../components/PointsNav";
import uuid from 'uuid/v4';
import FigureList from "../../components/FigureList";
import PointList from "../../components/PointList";
import EditFigure from "../../components/EditFigure";

class PointWorker extends Component {
    state = {
        isConstructorActive: false,
        isEditorActive: false,
        coordinates: [],
        figures: [],
        currentFigure: false,
        currentPointIndex: false,
    };


    catchClick = element => {
        if (this.state.isEditorActive) {
            const coordinates = [...this.state.coordinates];
            coordinates[this.state.currentPointIndex] = this.createPoint(element);
            this.setState({coordinates});
        }
        if (!this.state.isConstructorActive) return null;

        const coordinates = [...this.state.coordinates];

        coordinates.push(this.createPoint(element));

        this.setState({coordinates});

    };

    startConstructor = () => {
        if (this.state.isEditorActive) return null;

        this.setState({isConstructorActive: true, coordinates: []});
    };

    createFigure = () => {
        if (this.state.isEditorActive) return null;
        if (this.state.coordinates.length === 0) return null;

        const figures = [...this.state.figures],
            newFigure = {
                coordinates: this.state.coordinates,
                index: figures.length + 1,
                id: uuid()
            };

        figures.push(newFigure);

        this.setState(prevState => ({isConstructorActive: false, coordinates: [], figures}));
    };

    getCertainFigure = index => {
        if (this.state.isEditorActive) return null;
        this.setState(prevState => ({
            currentFigure: prevState.figures[index],
            coordinates: prevState.figures[index].coordinates
        }));
    };

    getCertainPoint = index => this.setState({currentPointIndex: index});

    startEditPoint = () => this.setState({isEditorActive: true});
    endEditPoint = () => {

        const figures = [...this.state.figures];

        figures[this.state.currentFigure.index - 1].coordinates = this.state.coordinates;

        this.setState({figures, isEditorActive: false, currentPointIndex: false, currentFigure: false})

    };

    calculateCoordinates(element) {
        const {x, y, width, height} = element.target.getBoundingClientRect();
        return {
            lt: {x, y},
            rt: {x: x + width, y},
            rb: {x: x + width, y: y + height},
            lb: {x, y: y + height}
        };
    }

    convertCoordinates(blockCoordinates, {x, y}) {
        const xFinal = (x - blockCoordinates.lt.x) / (blockCoordinates.rt.x - blockCoordinates.lt.x),
            yFinal = 1 - (y - blockCoordinates.lt.y) / (blockCoordinates.rb.y - blockCoordinates.rt.y);

        return {
            x: +xFinal.toFixed(2),
            y: +yFinal.toFixed(2)
        };
    }

    createPoint(element) {
        const {clientX: x, clientY: y} = element,
            blockCoordinates = this.calculateCoordinates(element),
            convertedCoordinates = this.convertCoordinates(blockCoordinates, {x, y});
        return {
            original: {x, y},
            output: convertedCoordinates
        };

    }


    render() {

        return (
            <>
                <ClickCatcher catchClick={this.catchClick}/>
                <RenderPoints pointsArr={this.state.coordinates.map(el => el.original)}/>
                <PointsNav
                    startConstructor={this.startConstructor}
                    finishConstructor={this.createFigure}
                    isConstructorActive={this.state.isConstructorActive}
                />
                <FigureList isEditorActive={this.state.isEditorActive} figuresArr={this.state.figures}
                            getCertainFigure={this.getCertainFigure}/>
                <PointList isEditorActive={this.state.isEditorActive} figure={this.state.currentFigure}
                           getCertainPoint={this.getCertainPoint}/>
                <EditFigure
                    currentFigure={this.state.currentFigure}
                    currentPointIndex={this.state.currentPointIndex}
                    startEditPoint={this.startEditPoint}
                    endEditPoint={this.endEditPoint}
                    isEditorActive={this.state.isEditorActive}
                    coordinates={this.state.coordinates}

                />

            </>
        );
    }
}

export default PointWorker;