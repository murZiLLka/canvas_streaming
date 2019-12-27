import React from "react";

class Canvas extends React.Component {


    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateCanvas();

    }

    updateCanvas() {

        const canvas = this.refs.canvas;
            const context=canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);

        console.log('---props', this.props);
        const pointsArr = this.props.pointsArr;
        const begin = pointsArr[0];
        context.beginPath();


        console.log('---moveTo', );

        context.moveTo(begin.x, begin.y)

        pointsArr.forEach((point, index) => {
            if (index !== 0) context.lineTo(point.x, point.y);

            console.log('---here', point);

        });
        context.closePath();

        context.strokeStyle = "red";
        context.stroke();


    }

    render() {
        return (
            <canvas style={{
                zIndex: 30,
            }} width="1920" height="800" ref="canvas"/>
        );
    }
}


export default Canvas;