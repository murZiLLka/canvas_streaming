import React from "react";
import styles from './style.module.scss'
import ReactPlayer from "react-player";
import ResourceNav from "./ResourceNav";

const RenderResource = ({resourceLink, resourceType, isPlay, togglePlayer, setLink}) => {
    const outputResource = resourceType === 'video' ? (
        <ReactPlayer
            url={resourceLink}
            playing={isPlay}
            width={'100%'}
            height={'100%'}
        />

    ) : (<img src={resourceLink} alt="IMG"/>);

    return (<div className={styles.RenderResource}>

        <div className={styles.OutputResource}>
            {outputResource}
        </div>


        <ResourceNav
            togglePlayer={togglePlayer}
            resourceType={resourceType}
            setLink={setLink}
            resourceLink={resourceLink}
        />
    </div>);
};

export default RenderResource;