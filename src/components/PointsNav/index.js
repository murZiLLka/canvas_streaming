import React from "react";
import styles from './style.module.scss'
import {Button} from "react-bootstrap";

const PointsNav = ({startConstructor, finishConstructor, isConstructorActive = false}) => {
    return (
        <div className={styles.PointsNav}>

            <Button
                onClick={startConstructor}
                disabled={isConstructorActive}
                variant="outline-light">
                create figure
            </Button>

            <Button
                onClick={finishConstructor}
                disabled={!isConstructorActive}
                variant="outline-light">
                finish creating
            </Button>

        </div>
    );
};

export default PointsNav;