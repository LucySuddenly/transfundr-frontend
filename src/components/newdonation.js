import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import SmProfilePicture from './smprofilepicture';
import PointsMultiplyer from './pointsmultiplyer';
import Username from './username'
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class NewDonation extends Component {
    constructor(props){
        super(props)
        fetch(`https://transfundr-backend.herokuapp.com/beacons/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => this.setState({beacon: json.beacon}))
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
        fetch("https://transfundr-backend.herokuapp.com/donations", {
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
        .then(json => {
            if (json.message) {
                toaster.notify(json.message, {duration: 3000})
              } else {
                this.props.history.push(`/#/donations/${json.id}`)}})
            
    }

    render() {
        return (
            <div className="content">
            <div className="standaloneform">
            <h3>Beacon: {this.state.beacon.title}</h3>
            <br/>
            <h4 className="inline">Sender: </h4><SmProfilePicture profile={JSON.parse(localStorage.getItem("user")).profile}/> 
            <Username user={JSON.parse(localStorage.getItem("user"))}/>
            <br/>
            <h4 className="inline">Receiver:</h4> <SmProfilePicture profile={this.state.beacon.user.profile}/>
            <Username user={this.state.beacon.user}/>
            <PointsMultiplyer user={this.state.beacon.user}/>
            <Form onSubmit={(ev)=> this.submitForm(ev)}>
                <Form.Label>Donation Amount</Form.Label>
                <FormControl value={this.state.amount} onChange={(ev)=>{this.onTextFormChange(ev)}} name="amount" type="number" placeholder="Donation Amount" />
                <Button variant="primary" type="submit">
                    Donate
                </Button>
            </Form>
            </div>
            </div>
        );
    }
}

export default withRouter(NewDonation);
