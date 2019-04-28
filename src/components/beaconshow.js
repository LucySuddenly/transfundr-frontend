import React, { Component } from 'react';
import {withRouter} from 'react-router';
import PaymentContainer from './paymentcontainer'
import Button from 'react-bootstrap/Button';
import DonationContainer from './donationcontainer'
import ProgressBar from 'react-bootstrap/ProgressBar'

class BeaconShow extends Component {
    constructor(props){
        super(props)
        fetch(`//localhost:3000/beacons/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => {
            console.log("json", json)
            this.setState({
                beacon: json.beacon,
                total: json.total
            })
        })
        this.state = {
            beacon: {
                donations: [],
                title: null,
                text: null,
                target: null,
                user: {
                    profile: {
                        cash: null,
                        venmo: null,
                        paypal: null,
                        zelle: null
                    }
                }
            }
        }
    }
    
    render() {
        return (
            <div className="standaloneform">
                <h2>{this.state.beacon.title}</h2>
                <h6>{this.state.beacon.text}</h6>
                <h4>Raised: ${this.state.total}</h4>
                <h4>Target: ${this.state.beacon.target}</h4>
                <ProgressBar animated variant="success" now={this.state.total / this.state.beacon.target * 100}/>
                <PaymentContainer profile={this.state.beacon.user.profile}/>
                <Button href={`/beacons/${this.props.match.params.id}/newdonation`}>Donate</Button>
                <DonationContainer decodeJwt={this.props.decodeJwt} beacon={this.state.beacon} donations={this.state.beacon.donations}/>
            </div>
        );
    }
}

export default withRouter(BeaconShow);
