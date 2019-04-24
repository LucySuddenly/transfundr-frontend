import React, { Component } from 'react';

class donation extends Component {
    render() {
        return (
            <div className="donation">
                <h2>Donation</h2>
                <h3>{this.props.beaconTitle}</h3>
                <h5>Sender</h5><SmProfilePicture picture={this.props.senderProfilePicture}/><Username name={this.props.senderUsername}/>
                <h5>Receiver</h5><SmProfilePicture picture={this.props.receiverProfilePicture}/><Username name={this.props.receiverUsername}/>
                <h2>${this.props.amount} - {this.props.points} Points</h2>
            </div>
        );
    }
}

export default donation;
