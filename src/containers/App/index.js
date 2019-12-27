import React from 'react';
import styles from './style.module.scss'
import RenderResource from "../../components/RenderResource/RenderResource";
import PointWorker from "../PointWorker";

class App extends React.Component {
    state = {
        resourceType: 'video',
        resourceLink: 'https://www.youtube.com/watch?v=EcEMX-63PKY',
        isPlay: false
    };

    togglePlayer = () => this.setState(prevState => ({isPlay: !prevState.isPlay}));

    setLink = (resourceObj) => {
        console.log('---props', resourceObj);
        switch (resourceObj.type) {
            case 'video':
                return this.setState({resourceType: 'video', resourceLink: resourceObj.value});
            case 'image': {
                console.log('---image', resourceObj);
                return this.setState({resourceType: 'image', resourceLink: resourceObj.value});
            }
            default:
                return this.setState({
                    currentResourceType: 'video',
                    resourceLink: 'https://www.youtube.com/watch?v=EcEMX-63PKY'
                });
        }
    };

    render() {
        return (
            <div className={styles.App}>
                <RenderResource
                    resourceLink={this.state.resourceLink}
                    resourceType={this.state.resourceType}
                    setLink={this.setLink}
                    isPlay={this.state.isPlay}
                    togglePlayer={this.togglePlayer}
                />

                <PointWorker/>

            </div>
        );
    }
}

export default App;
