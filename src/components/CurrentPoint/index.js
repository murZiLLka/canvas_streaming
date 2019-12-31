import React from "react";
import currentPoint from '../../assets/currentPoint.png';

const CurrentPoint = ({x, y}) => {
    return (
        <img
            src={currentPoint}
            alt='POINT'
            style={{width: 40, height: 40, position: "absolute", zIndex: 30, left: x - 18, top: y - 15}}
        />
    );
};

export default CurrentPoint;