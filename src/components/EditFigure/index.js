import React from "react";
import styles from './style.module.scss'
import {Button} from "react-bootstrap";

const EditFigure = ({coordinates, isEditorActive, currentFigure, currentPointIndex, startEditPoint, endEditPoint}) => {
    if (typeof currentPointIndex !== "number") return null;

    let x, y, outputCoordinates = null;

    if (coordinates[currentPointIndex]) {
        x = coordinates[currentPointIndex].output.x;
        y = coordinates[currentPointIndex].output.y;
        outputCoordinates = <h6>coordinates - (x:{x})(y:{y})</h6>
    }

    return (
        <div className={styles.EditFigure}>

            <h4>Current:</h4>
            <h6>figure - ({currentFigure.index})</h6>
            <h6>point - ({currentPointIndex + 1})</h6>

            {outputCoordinates}

            <Button
                className={styles.EditButton}
                disabled={isEditorActive}
                onClick={startEditPoint}
                variant="outline-light">
                start edit point
            </Button>
            <Button
                className={styles.EditButton}
                disabled={!isEditorActive}
                onClick={endEditPoint}
                variant="outline-light">
                finish edit point
            </Button>

        </div>
    );
};

export default EditFigure;