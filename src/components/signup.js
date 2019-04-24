import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Signup extends Component {

    showTransOptions = () => {
        let transOptions
        transOptions = document.getElementById("transoptions")
        transOptions.className === "hidden" ? 
        transOptions.classList.remove("hidden") :
        transOptions.classList.add("hidden")
    }

    render() {
        return (
            <div id="signupform">
            <Form>
                <Form.Check value="trans" label="Are you trans?" onClick={this.showTransOptions}/>
                <div id="transoptions" className="hidden">
                <Form.Check value="femme" label="Are you transfeminine?"/>
                <Form.Check value="nonwhite" label="Are you non-white?"/>
                </div>
                <br/>
                <Form.Label>Username</Form.Label>
                <FormControl type="text" placeholder="Enter Username"/>
                <Form.Label>Email address</Form.Label>
                <FormControl type="text" placeholder="Enter Email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Form.Label>Password</Form.Label>
                <FormControl type="password" placeholder="Password"/>
                <FormControl type="password" placeholder="Confirm Password"/>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>

            </div>
        );
    }
}

export default Signup;
