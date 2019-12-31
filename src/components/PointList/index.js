import React from "react";
import styles from './style.module.scss'
import {Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";

const PointList = ({isEditorActive, figure, getCertainPoint}) => {

    if (!figure) return null;
    const pointsArr = figure.coordinates;
    const pointList =
        pointsArr.length === 0 ?
            'You need to create your first figure'
            :
            pointsArr.map((point, index) => (
                <Button
                    key={index}
                    onClick={() => getCertainPoint(index)}
                    variant="outline-light"
                    disabled={isEditorActive}>
                    {index + 1}
                </Button>));

    return (
        <div className={styles.PointList}>

            <p>Available points:</p>

            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                    {pointList}
                </ButtonGroup>
            </ButtonToolbar>

        </div>
    );
};

export default PointList;