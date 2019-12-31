import React from "react";
import styles from './style.module.scss'
import {Alert} from "react-bootstrap";

const Warning = (props) => (
    <Alert className={styles.Warning} variant={'dark'}>
        <Alert.Heading>Notice!</Alert.Heading>
        {props.children}
    </Alert>
);

export default Warning;


