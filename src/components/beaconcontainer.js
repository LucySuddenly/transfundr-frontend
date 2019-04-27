import React, { Component } from 'react';
import Beacon from './beacon'

class BeaconContainer extends Component {
    render() {
        return (
            <div class="beaconcontainer">
                {this.props.beacons.map(beacon => {
                    return <Beacon beacon={beacon}/>
                })}
            </div>
        );
    }
}

export default BeaconContainer;
