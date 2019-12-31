import React from "react";
import styles from './style.module.scss'
import Point from "../Point";
import Canvas from "../Canvas";
import CurrentPoint from "../CurrentPoint";

const RenderPoints = ({pointsArr, currentPointIndex}) => {
    const points =
        pointsArr.length === 0 ?
            null
            :
            pointsArr.map((point, index) => {
                if (currentPointIndex !== false && currentPointIndex === index) {
                    return (<CurrentPoint key={point.x + point.x} x={point.x} y={point.y}/>);
                } else {
                    return (<Point key={point.x + point.x} x={point.x} y={point.y}/>)
                }
            });

    let canvas = null;

    if (pointsArr.length > 0) canvas = <Canvas pointsArr={pointsArr}/>;

    return (
        <div className={styles.RenderPoints}>
            <span className={styles.signLeft}>1</span>
            <span className={styles.signRight}>1</span>
            <span className={styles.signMiddle}>0</span>
            <span className={styles.signMiddleLeft}>0.5</span>
            <span className={styles.signMiddleRight}>0.5</span>

            {canvas}
            {points}

        </div>
    );
};

export default RenderPoints;
