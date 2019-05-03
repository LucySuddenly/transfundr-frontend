import React, { Component } from 'react';
import SmProfilePicture from './smprofilepicture'
import Username from './username'
import {withRouter} from 'react-router';
import ConfirmedStamp from './confirmedstamp'
import PendingStamp from './pendingstamp'
import Button from 'react-bootstrap/Button'
import TimeAgo from 'react-timeago'

class DonationShow extends Component {
    constructor(props){
        super(props)
        fetch(`https://transfundr-backend.herokuapp.com/donations/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => {
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

    confirmDonation = () => {
        fetch("https://transfundr-backend.herokuapp.com/confirm", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          },
          body: JSON.stringify(`${this.props.match.params.id}`)
        })
        .then(resp => resp.json())
        .then(json => this.setState({donation: json}))
    }

    render() {
        return (
            <div className="content">
            <div className="standaloneform">
                <h2>Donation</h2>
                <a href={`/beacons/${this.state.donation.beacon.id}`}><h3>{this.state.donation.beacon.title}</h3></a>
                <h5>Sender</h5><SmProfilePicture profile={this.state.donation.user.profile}/><Username user={this.state.donation.user}/>
                <h5>Receiver</h5><SmProfilePicture profile={this.state.donation.beacon.user.profile}/><Username user={this.state.donation.beacon.user}/>
                <h2>${this.state.donation.amount} - {this.state.donation.points} Points</h2>
                <h6>Sent: <TimeAgo date={this.state.donation.created_at}/></h6>
                { this.state.donation.confirmed ?
                <ConfirmedStamp/> :
                <PendingStamp/> 
            }
                { this.props.decodeJwt(localStorage.getItem("jwt")) === this.state.donation.beacon.user.id && !this.state.donation.confirmed ?
                  <Button onClick={this.confirmDonation}>Confirm?</Button> :
                  null }
            </div>
                  </div>
        );
    }
}

export default withRouter(DonationShow);
