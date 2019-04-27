import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import PaymentContainer from './paymentcontainer'

class Beacon extends Component {
    render() {
        return (
            <div class="standaloneform">
                <h2>{this.props.beacon.title}</h2>
                <h6>{this.props.beacon.text}</h6>
                <h4>Target: ${this.props.beacon.target}</h4>
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