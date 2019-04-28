import React, { Component } from 'react';
import Beacon from './beacon'

class BeaconContainer extends Component {
    render() {
        return (
            <div class="beaconcontainer">
                {this.props.payload.map(element => {
                    return <Beacon total={element.total} beacon={element.beacon}/>
                })}
            </div>
        );
    }
}

export default BeaconContainer;
