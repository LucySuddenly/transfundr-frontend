import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router';

class EditProfile extends Component {
    constructor(){
        super()
        fetch(`//localhost:3000/profiles/${JSON.parse(localStorage.getItem("user")).profile.id}`, {
          method: "GET",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          }
        })
        .then(resp => resp.json())
        .then(json => this.setState({
            bio: json.bio,
            cover_img: json.cover_img,
            profile_img: json.profile_img,
            venmo: json.venmo,
            cash: json.cash,
            paypal: json.paypal,
            zelle: json.zelle,
            id: json.id
        }))
        this.state = {
            bio: "",
            cover_img: "",
            profile_img: "",
            venmo: "",
            cash: "",
            paypal: "",
            zelle: "",
            id: ""
        }
    }

    onTextFormChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    submitForm = (ev) => {
        ev.preventDefault()
        fetch(`//localhost:3000/profiles/${JSON.parse(localStorage.getItem("user")).profile.id}`, {
          method: "PATCH",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          },
          body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(json => {
            this.props.history.push(`users/${JSON.parse(localStorage.getItem("user")).id}`)
        })
    }

    render() {
        return (
            <div className="content">
                <div className="standaloneform">
                <h2>Edit Profile:</h2>
                <Form onSubmit={(ev)=> this.submitForm(ev)}>
                    <Form.Label>Bio</Form.Label>
                    <FormControl value={this.state.bio} onChange={(ev)=>{this.onTextFormChange(ev)}} name="bio" as="textarea" type="text" placeholder="Fill out your bio" rows={4}/>
                    <Form.Label>Profile Picture</Form.Label>
                    <img src={this.state.profile_img} width="100" alt="profile"/>
                    <FormControl onChange={(ev) => this.profileImageOnChange(ev)} type="file" name="profile_image" id="profile_image_upload" accept="image/*"/>
                    <Form.Label>Cover Image</Form.Label>
                    <img src={this.state.cover_img} width="100" alt="cover"/>
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
                        Edit Profile
                    </Button>
                </Form>

                </div>
            </div>
        );
    }
}

export default withRouter(EditProfile);
