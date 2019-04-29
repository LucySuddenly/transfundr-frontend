import React, { Component } from 'react';
import SmProfilePicture from './smprofilepicture'
import Username from './username'
import ConfirmedStamp from './confirmedstamp'
import PendingStamp from './pendingstamp'
import Button from 'react-bootstrap/Button'

class Donation extends Component {
  constructor(){
    super()
    this.state = {
      donation: {
        confirmed: null
      }
    }
  }
    confirmDonation = (ev) => {
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
                <a href={`/donations/${this.props.donation.id}`}> <h2>Donation</h2></a>
                { this.props.beacon 
                ? 
                <h3>{this.props.beacon.title}</h3> 
                : 
                null 
                }
                {this.props.donation.user 
                ? 
                <>
                <h5>Sender</h5><SmProfilePicture profile={this.props.donation.user.profile}/><Username user={this.props.donation.user}/>
                </>
                :
                null 
                }
                {this.props.beacon 
                ?
                <>
                <h5>Receiver</h5><SmProfilePicture profile={this.props.beacon.user.profile}/><Username user={this.props.beacon.user}/>
                </>
                :
                <>
                <h5>Receiver</h5><SmProfilePicture profile={this.props.donation.beacon.user.profile}/><Username user={this.props.donation.beacon.user}/>
                </>
                }
                <h2>${this.props.donation.amount} - {this.props.donation.points} Points</h2>
                { this.props.donation.confirmed 
                ?
                <ConfirmedStamp/> 
                :
                    this.state.donation.confirmed 
                    ? 
                    <ConfirmedStamp/> 
                    :
                    <PendingStamp/> 
                }
                { (( this.props.beacon && this.props.decodeJwt(localStorage.getItem("jwt")) === this.props.beacon.user.id) || ( this.props.beacon && this.props.decodeJwt(localStorage.getItem("jwt")) === this.props.donation.beacon.user.id)) && (!this.props.donation.confirmed || this.state.donation.confirmed) ?
                  <Button onClick={ev => this.confirmDonation(ev)}>Confirm?</Button> :
                  null }
            </div>
        );
    }
}

export default Donation;
