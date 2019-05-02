import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router';

class NewProfile extends Component {
    constructor(){
        super()
        this.state = {
            bio: "",
            venmo: "",
            cash: "",
            paypal: "",
            zelle: ""
        }
    }

    onTextFormChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    submitForm = (ev) => {
        ev.preventDefault()
        fetch("//localhost:3000/profiles", {
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
            this.props.logUserIn(json)
            this.props.history.push(`users/${json.user.id}`)
        })
    }

    profileImageOnChange = (ev) => {
        this.setState({profile_image_file_name: ev.target.files[0].name})
        const reader = new FileReader()
        reader.readAsDataURL(ev.target.files[0])
        reader.onload = () => {
            this.setState({
                profile_image_file: reader.result
            })
        }
    }
    
    coverImageOnChange = (ev) => {
        this.setState({cover_image_file_name: ev.target.files[0].name})
        const reader = new FileReader()
        reader.readAsDataURL(ev.target.files[0])
        reader.onload = () => {
            this.setState({
                cover_image_file: reader.result
            })
        }
    }

    render() {
        return (
            <div className="standaloneform">
            <Form onSubmit={(ev)=> this.submitForm(ev)}>
                <Form.Label>Bio</Form.Label>
                <FormControl value={this.state.bio} onChange={(ev)=>{this.onTextFormChange(ev)}} name="bio" as="textarea" type="text" placeholder="Fill out your bio" rows={4}/>
                <Form.Label>Profile Picture</Form.Label>
                <FormControl onChange={(ev) => this.profileImageOnChange(ev)} type="file" name="profile_image" id="profile_image_upload" accept="image/*"/>
                <Form.Label>Cover Image</Form.Label>
                <FormControl onChange={(ev) => this.coverImageOnChange(ev)} type="file" name="cover_image" id="cover_image_upload" accept="image/*"/>
                {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).trans ?
                <>
                <Form.Label>Venmo</Form.Label>
                <FormControl value={this.state.venmo} onChange={(ev)=>{this.onTextFormChange(ev)}} name="venmo" type="text" placeholder="Enter your Venmo username"/>
                <Form.Label>Cash App</Form.Label>
                <FormControl value={this.state.cash} onChange={(ev)=>{this.onTextFormChange(ev)}} name="cash" type="text" placeholder="Enter your Cash App username"/>
                <Form.Label>Paypal</Form.Label>
                <FormControl value={this.state.paypal} onChange={(ev)=>{this.onTextFormChange(ev)}} name="paypal" type="text" placeholder="Enter your Paypal username"/>
                <Form.Label>Zelle</Form.Label>
                <FormControl value={this.state.zelle} onChange={(ev)=>{this.onTextFormChange(ev)}} name="zelle" type="text" placeholder="Enter your Zelle username"/>
                </>
                : null}
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            </div>
        );
    }
}

export default withRouter(NewProfile);
