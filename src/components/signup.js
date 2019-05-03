import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            trans: false,
            nonwhite: false,
            bio: "",
            venmo: "",
            cash: "",
            paypal: "",
            zelle: ""
        }
    }
    onCheckChange = (ev) => {
        let checkName 
        checkName = ev.target.name
        this.setState({
            [checkName]: !this.state.checkName
        })
    }

    onTextFormChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }

    showTransOptions = () => {
        let transOptions
        transOptions = document.getElementsByClassName("transoptions")
        for (let i = 0; i < transOptions.length; i++){
            transOptions[i].className.includes("hidden") ? 
            transOptions[i].classList.remove("hidden") :
            transOptions[i].classList.add("hidden")
        }
    }

    submitForm = (ev) => {
        ev.preventDefault()
        if (this.state.profile_image_file_name && this.state.cover_image_file_name){

            fetch("https://transfundr-backend.herokuapp.com/users", {
            method: "POST",
            headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
            },
            body: JSON.stringify(this.state)
            })
            .then(resp => resp.json())
            .then(json => {
                if (json.error) {
                    toaster.notify(json.error, {duration: 3000})
                } else {
                    this.props.logUserIn(json)
                    this.props.history.push(`users/${json.user.id}`)
                }
            })
        } else {
            toaster.notify("Cover Image and Profile Picture are required", {duration: 3000})
        }

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
            <div className="content">
                <div className="standaloneform">
                    <Form onSubmit={(ev)=> this.submitForm(ev)}>
                        <Form.Check name="trans" value="trans" label="Are you a trans woman or femme-leaning AMAB non-binary person?" onChange={(ev) => this.onCheckChange(ev)} onClick={this.showTransOptions}/>
                        <div className="transoptions hidden">
                        <Form.Check name="nonwhite" value="nonwhite" label="Are you non-white?" onChange={(ev) => this.onCheckChange(ev)}/>
                        </div>
                        <br/>
                        <Form.Label>Username</Form.Label>
                        <FormControl value={this.state.username} onChange={(ev)=>{this.onTextFormChange(ev)}} name="username" type="text" placeholder="Enter Username"/>
                        <Form.Label>Email address</Form.Label>
                        <FormControl value={this.state.email} onChange={(ev)=>{this.onTextFormChange(ev)}} name="email" type="text" placeholder="Enter Email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Label>Password</Form.Label>
                        <FormControl value={this.state.password} onChange={(ev)=>{this.onTextFormChange(ev)}} name="password" type="password" placeholder="Password"/>
                        <Form.Label>Bio</Form.Label>
                        <FormControl value={this.state.bio} onChange={(ev)=>{this.onTextFormChange(ev)}} name="bio" as="textarea" type="text" placeholder="Fill out your bio" rows={4}/>
                        <Form.Label>Profile Picture</Form.Label>
                        <FormControl onChange={(ev) => this.profileImageOnChange(ev)} type="file" name="profile_image" id="profile_image_upload" accept="image/*"/>
                        <Form.Label>Cover Image</Form.Label>
                        <FormControl onChange={(ev) => this.coverImageOnChange(ev)} type="file" name="cover_image" id="cover_image_upload" accept="image/*"/>
                        <span className="transoptions hidden">
                        <Form.Label>Venmo</Form.Label>
                        <FormControl value={this.state.venmo} onChange={(ev)=>{this.onTextFormChange(ev)}} name="venmo" type="text" placeholder="Enter your Venmo username"/>
                        <Form.Label>Cash App</Form.Label>
                        <FormControl value={this.state.cash} onChange={(ev)=>{this.onTextFormChange(ev)}} name="cash" type="text" placeholder="Enter your Cash App username"/>
                        <Form.Label>Paypal</Form.Label>
                        <FormControl value={this.state.paypal} onChange={(ev)=>{this.onTextFormChange(ev)}} name="paypal" type="text" placeholder="Enter your Paypal username"/>
                        <Form.Label>Zelle</Form.Label>
                        <FormControl value={this.state.zelle} onChange={(ev)=>{this.onTextFormChange(ev)}} name="zelle" type="text" placeholder="Enter your Zelle username"/>
                        </span>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(Signup);
