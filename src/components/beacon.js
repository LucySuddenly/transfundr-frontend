import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import PaymentContainer from './paymentcontainer'
import ProgressBar from 'react-bootstrap/ProgressBar'
import SmProfilePicture from './smprofilepicture';
import Username from './username';
import PointsMultiplyer from './pointsmultiplyer';
import TimeAgo from 'react-timeago'

class Beacon extends Component {
    render() {
        return (
            <div className="standaloneform">
                <a href={`/beacons/${this.props.beacon.id}`}><h2>{this.props.beacon.title}</h2></a>
                <h6>{this.props.beacon.text}</h6>
                {this.props.beacon.user ?
                <>
                <SmProfilePicture profile={this.props.beacon.user.profile}/>
                <Username user={this.props.beacon.user}/>
                <PointsMultiplyer user={this.props.beacon.user}/> 
                </>
                : null}
                <h4>Raised: ${this.props.total}</h4>
                <h4>Target: ${this.props.beacon.target}</h4>
                <h6>Sent up: <TimeAgo date={this.props.beacon.created_at}/></h6>
                <ProgressBar animated variant="success" now={this.props.total / this.props.beacon.target * 100}/>
                {this.props.beacon.user ?
                <PaymentContainer profile={this.props.beacon.user.profile}/> :
                null
                }
                {  localStorage.getItem("user") ?
                    <Button href={`/beacons/${this.props.beacon.id}/newdonation`}>Donate</Button>
                    : null
                }                
            </div>
        );
    }
}

export default Beacon;
