import React, { Component } from 'react';
import {withRouter} from 'react-router';
import PaymentContainer from './paymentcontainer'

class BeaconShow extends Component {
    constructor(props){
        super(props)
        fetch(`//localhost:3000/beacons/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => this.setState({beacon: json}))
        this.state = {
            beacon: {
                title: null,
                text: null,
                target: null,
                profile: {
                    cash: null,
                    venmo: null,
                    paypal: null,
                    zelle: null
                }
            }
        }
    }
    render() {
        return (
            <div className="standaloneform">
                <h2>{this.state.beacon.title}</h2>
                <h6>{this.state.beacon.text}</h6>
                <h4>Target: ${this.state.beacon.target}</h4>
                <PaymentContainer profile={this.state.beacon.profile}/>
            </div>
        );
    }
}

export default withRouter(BeaconShow);
