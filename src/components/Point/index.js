import React from "react";
import point from '../../assets/point.png';

const Point = ({x, y}) => {
    return (
        <img
            src={point}
            alt='POINT'
            style={{width: "30px", height: "30px", position: "absolute", zIndex: 30, left: x - 13, top: y - 10}}
        />
    );
};

export default Point;