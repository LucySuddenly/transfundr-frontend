import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import PaymentContainer from './paymentcontainer'
import ProgressBar from 'react-bootstrap/ProgressBar'
import SmProfilePicture from './smprofilepicture';
import Username from './username';
import PointsMultiplyer from './pointsmultiplyer';

class Beacon extends Component {
    render() {
        return (
            <div class="standaloneform">
                <a href={`/beacons/${this.props.beacon.id}`}><h2>{this.props.beacon.title}</h2></a>
                <h6>{this.props.beacon.text}</h6>
                <SmProfilePicture profile={this.props.beacon.user.profile}/>
                <Username user={this.props.beacon.user}/>
                <PointsMultiplyer user={this.props.beacon.user}/> 
                <h4>Raised: ${this.props.total}</h4>
                <h4>Target: ${this.props.beacon.target}</h4>
                <ProgressBar animated variant="success" now={this.props.total / this.props.beacon.target * 100}/>
                {this.props.beacon.user ?
                <PaymentContainer profile={this.props.beacon.user.profile}/> :
                null
                }
                <Button href={`/beacons/${this.props.beacon.id}/newdonation`}>Donate</Button>
            </div>
        );
    }
}

export default Beacon;
