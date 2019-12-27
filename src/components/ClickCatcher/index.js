import React from "react";
import styles from './style.module.scss'

const ClickCatcher = ({catchClick}) => <div onDoubleClick={el => catchClick(el)} className={styles.ClickCatcher}/>;

export default ClickCatcher;