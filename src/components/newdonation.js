import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import SmProfilePicture from './smprofilepicture';
import PointsMultiplyer from './pointsmultiplyer';
import Username from './username'

class NewDonation extends Component {
    constructor(props){
        super(props)
        fetch(`//localhost:3000/beacons/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => this.setState({beacon: json}))
        this.state = {
            amount: 0,
            beacon: {
                title: null,
                text: null,
                target: null,
                user: {
                    nonwhite: null,
                    femme: null,
                    username: null,
                    profile: {
                        cash: null,
                        venmo: null,
                        paypal: null,
                        zelle: null,
                        profile_img: null,
                        
                    },
                }    
            }
        }
    }

    onTextFormChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    submitForm = (ev) => {
        ev.preventDefault()
        fetch("//localhost:3000/donations", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          },
          body: JSON.stringify({
              user_id: JSON.parse(localStorage.getItem("user")).id,
              beacon_id: this.state.beacon.id,
              amount: this.state.amount,
              points: this.state.amount * parseInt(document.getElementById("multiplier").innerText[0]),
              confirmed: false
            })
        })
        .then(resp => resp.json())
        .then(json => this.props.history.push(`/donations/${json.id}`))
    }

    render() {
        return (
            <div className="standaloneform">
            Beacon: {this.state.beacon.title}
            Sender: <SmProfilePicture profile={JSON.parse(localStorage.getItem("user")).profile}/> 
            <Username user={JSON.parse(localStorage.getItem("user"))}/>
            Receiver: <SmProfilePicture profile={this.state.beacon.user.profile}/>
            <Username user={this.state.beacon.user}/>
            Point Multiplier: <PointsMultiplyer user={this.state.beacon.user}/>
            <Form onSubmit={(ev)=> this.submitForm(ev)}>
                <Form.Label>Donation Amount</Form.Label>
                <FormControl value={this.state.amount} onChange={(ev)=>{this.onTextFormChange(ev)}} name="amount" type="number" placeholder="Donation Amount" />
                <Button variant="primary" type="submit">
                    Donate
                </Button>
            </Form>
            </div>
        );
    }
}

export default withRouter(NewDonation);
