import React, { Component } from 'react';
import SmProfilePicture from './smprofilepicture'
import Username from './username'
import ConfirmedStamp from './confirmedstamp'
import PendingStamp from './pendingstamp'
import Button from 'react-bootstrap/Button'

class Donation extends Component {
    confirmDonation = () => {
        fetch("//localhost:3000/confirm", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          },
          body: JSON.stringify(`${this.props.donation.id}`)
        })
        .then(resp => resp.json())
        .then(json => this.setState({donation: json}))
    }

    render() {
        return (
            <div className="standaloneform">
                <h2>Donation</h2>
                { this.props.beacon ? 
                <h3>{this.props.beacon.title}</h3> : 
                null }
                <h5>Sender</h5><SmProfilePicture profile={this.props.donation.user.profile}/><Username user={this.props.donation.user}/>
                <h5>Receiver</h5><SmProfilePicture profile={this.props.beacon.user.profile}/><Username user={this.props.beacon.user}/>
                <h2>${this.props.donation.amount} - {this.props.donation.points} Points</h2>
                { this.props.donation.confirmed ?
                <ConfirmedStamp/> :
                <PendingStamp/> 
                }
                { this.props.decodeJwt(localStorage.getItem("jwt")) === this.props.beacon.user.id && !this.props.donation.confirmed ?
                  <Button onClick={this.confirmDonation}>Confirm?</Button> :
                  null }
                  

                
            </div>
        );
    }
}

export default Donation;
