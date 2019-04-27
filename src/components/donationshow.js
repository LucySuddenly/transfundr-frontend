import React, { Component } from 'react';
import SmProfilePicture from './smprofilepicture'
import Username from './username'
import {withRouter} from 'react-router';

class DonationShow extends Component {
    constructor(props){
        super(props)
        fetch(`//localhost:3000/donations/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            this.setState({donation: json})
        })
        this.state = {
            donation: {
                user: {
                    profile: {
                        profile_img: null
                    }
                },
                beacon: {
                    title: null,
                    user: {
                        profile: {
                            profile_img: null
                        }
                    }
                },
                amount: null,
                points: null,
                confirmed: null
            }
        }
    }

    render() {
        return (
            <div className="standaloneform">
                <h2>Donation</h2>
                <h3>{this.state.donation.beacon.title}</h3>
                <h5>Sender</h5><SmProfilePicture profile={this.state.donation.user.profile}/><Username user={this.state.donation.user}/>
                <h5>Receiver</h5><SmProfilePicture profile={this.state.donation.beacon.user.profile}/><Username user={this.state.donation.beacon.user}/>
                <h2>${this.state.donation.amount} - {this.state.donation.points} Points</h2>
            </div>
        );
    }
}

export default withRouter(DonationShow);
