import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Signup extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            trans: false,
            femme: false,
            nonwhite: false
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
        transOptions = document.getElementById("transoptions")
        transOptions.className === "hidden" ? 
        transOptions.classList.remove("hidden") :
        transOptions.classList.add("hidden")
    }

    submitForm = (ev) => {
        ev.preventDefault()
        fetch("//localhost:3000/users", {
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(json => this.props.logUserIn(json))
    }

    render() {
        return (
            <div class="standaloneform">
            <Form onSubmit={(ev)=> this.submitForm(ev)}>
                <Form.Check name="trans" value="trans" label="Are you trans?" onChange={(ev) => this.onCheckChange(ev)} onClick={this.showTransOptions}/>
                <div id="transoptions" className="hidden">
                <Form.Check name="femme" value="femme" label="Are you transfeminine?" onChange={(ev) => this.onCheckChange(ev)}/>
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
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>

            </div>
        );
    }
}

export default Signup;
