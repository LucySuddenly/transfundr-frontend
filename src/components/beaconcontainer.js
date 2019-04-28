import React, { Component } from 'react';
import Beacon from './beacon'

class BeaconContainer extends Component {
    render() {
        return (
            <div className="beaconcontainer">
                {this.props.payload.map(element => {
                    return <Beacon key={element.beacon.id} total={element.total} beacon={element.beacon}/>
                })}
            </div>
        );
    }
}

export default BeaconContainer;
