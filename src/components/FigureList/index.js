import React from "react";
import styles from './style.module.scss'
import {Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";

const FigureList = ({isEditorActive, figuresArr, getCertainFigure}) => {
    const availableTitle = figuresArr.length === 0 ? null : <p>Available figures:</p>;
    const figureList = figuresArr.length === 0 ? 'You need to create your first figure' :
        figuresArr.map((figure, index) => (
            <Button
                key={index}
                onClick={() => getCertainFigure(index)}
                variant="outline-light"
                disabled={isEditorActive}
            >
                {index + 1}
            </Button>));

    return (<div className={styles.FigureList}>
        {availableTitle}
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="mr-2" aria-label="First group">
                {figureList}
            </ButtonGroup>
        </ButtonToolbar>

    </div>);
};

export default FigureList;