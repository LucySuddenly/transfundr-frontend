import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Home from './components/home'
import Signup from './components/signup'
import NewDonation from './components/newdonation'
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import NewProfile from './components/newprofile'
import Profile from './components/profile'
import NewBeacon from './components/newbeacon'
import BeaconShow from './components/beaconshow'
import DonationShow from './components/donationshow';

class App extends Component {
  constructor(){
    super()
    this.state = {
      loginForm: {
        username: "",
        password: ""
      }
    }
  }

  logUserIn = (user) => {
    localStorage.setItem("jwt", user.jwt)
    localStorage.setItem("user", JSON.stringify(user.user))
    this.forceUpdate()
  }

  onLoginFormChange = (ev) => {
    this.setState({
        loginForm: {
          ...this.state.loginForm,
          [ev.target.name]: ev.target.value
        }
    })
  }

  submitLogin = (ev) => {
    ev.preventDefault()
    fetch("//localhost:3000/auth", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state.loginForm)
    })
    .then(resp => resp.json())
    .then(
      json => {
        if (json.message) {
          toaster.notify(json.message, {duration: 3000})
        } else {
          this.logUserIn(json)
        }
      }
    )
  }

  logout = () => {
    localStorage.removeItem("jwt")
    localStorage.removeItem("user")
    this.forceUpdate()
  }

  decodeJwt = (jwt) => {
    if (jwt){
      return JSON.parse(window.atob(jwt.split('.')[1])).user_id
    } else {
      return false
    }
  }

  render(){
    return (
      <>
        <Navbar sticky="top" bg="light" className="justify-content-between">
          <Navbar.Brand href="/">TransFundr</Navbar.Brand>
          { localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).trans ? 
          <Button href="/newbeacon">Send up a Beacon</Button> :
          null
          }
          { localStorage.getItem("jwt") ? <Button onClick={this.logout}>Logout</Button> :
          <Form inline onSubmit={(ev)=> this.submitLogin(ev)}>
            <FormControl name="username" value={this.state.loginForm.username} onChange={(ev)=> this.onLoginFormChange(ev)} type="text" placeholder="Username" className="mr-sm-2" />
            <FormControl name="password" value={this.state.loginForm.password} onChange={(ev)=> this.onLoginFormChange(ev)} type="password" placeholder="Password" className="mr-sm-2"/>
            <Button type="submit">Login</Button>
          <Navbar.Text>
            <a href="/signup">Or Sign Up</a>
          </Navbar.Text>
          </Form>
          }
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" render={(props)=>(<Home {...this.props}/>)}/>
            <Route exact path="/signup" render={()=>(<Signup {...this.props} logUserIn={this.logUserIn}/>)}/>
            <Route exact path="/users/:id" render={()=>(<Profile {...this.props} />)}/>
            <Route exact path="/beacons/:id" render={()=>(<BeaconShow {...this.props} decodeJwt={this.decodeJwt}/>)}/>
            <Route exact path="/donations/:id" render={()=>(<DonationShow {...this.props} decodeJwt={this.decodeJwt}/>)}/>
            <Route exact path="/beacons/:id/newdonation" render={()=>(<NewDonation/>)}/>
            <Route exact path="/newprofile" render={()=>(<NewProfile/>)}/>
            <Route exact path="/newbeacon" render={()=>(<NewBeacon/>)}/>
            <Route exact path="/rankings"/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
