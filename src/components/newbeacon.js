import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class NewBeacon extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            text: "",
            target: ""
        }
    }

    onTextFormChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    submitForm = (ev) => {
        ev.preventDefault()
        fetch("https://transfundr-backend.herokuapp.com/beacons", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          },
          body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.message) {
                toaster.notify(json.message, {duration: 3000})
              } else {
                this.props.history.push(`/beacons/${json.id}`)}})
    }

    render() {
        return (
            <div className="content">
                <div className="standaloneform">
                <Form onSubmit={(ev)=> this.submitForm(ev)}>
                    <Form.Label>Title</Form.Label>
                    <FormControl value={this.state.title} onChange={(ev)=>{this.onTextFormChange(ev)}} name="title" type="text" placeholder="Enter a Title" />
                    <Form.Label>Text</Form.Label>
                    <FormControl value={this.state.text} onChange={(ev)=>{this.onTextFormChange(ev)}} name="text" as="textarea"  type="text" placeholder="Talk about the reason you need help" rows={4}/>
                    <Form.Label>Target</Form.Label>
                    <FormControl value={this.state.target} onChange={(ev)=>{this.onTextFormChange(ev)}} name="target" type="number" placeholder="How much money do you need?"/>
                    <Button variant="primary" type="submit">
                        Send it up
                    </Button>
                </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(NewBeacon);
