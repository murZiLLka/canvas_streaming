import React from "react";

const Point = ({x, y}) => {
    return (
        <img
            src='https://img.pngio.com/point-png-9-png-image-point-png-2326_2326.png'
            alt='POINT'
            style={{width: "30px", height: "30px", position: "absolute", zIndex: 30, left: x -13, top: y-10 }}
        />
    );
};

export default Point;