import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
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
import SmProfilePicture from './components/smprofilepicture';
import Username from './components/username';
import Popup from "reactjs-popup";
import Rankings from './components/rankings';

class App extends Component {
  constructor(){
    super()
    this.notificationsFetch()
    this.state = {
      loginForm: {
        username: "",
        password: ""
      },
      notifications: []
    }
  }

  notificationsFetch = () => {
    if (localStorage.getItem("user")){
      fetch("//localhost:3000/notifications", {
        method: "GET",
        headers:{
          Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
      })
      .then(resp => resp.json())
      .then(json => this.setState({notifications: json}))
    }
  }

  logUserIn = (user) => {
    localStorage.setItem("jwt", user.jwt)
    localStorage.setItem("user", JSON.stringify(user.user))
    this.notificationsFetch()
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
        <Navbar collapseOnSelect expand="md" sticky="top" bg="light" >
          <Navbar.Brand href="/">TransFundr</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">  
          <Nav className="mr-auto align-items-center">
          <Button href="/about">About</Button>
          </Nav>
          { localStorage.getItem("jwt") 
          ? 
          <>
          <Nav className="d-flex align-items-center">
          <Navbar.Text>Logged in as:</Navbar.Text>
          <SmProfilePicture profile={JSON.parse(localStorage.getItem("user")).profile}/>
          <Username user={JSON.parse(localStorage.getItem("user"))}/>
          </Nav>
          <div class="divider"/>
          { JSON.parse(localStorage.getItem("user")).trans && this.state.notifications[0]
          ?
          <Nav className="d-flex align-items-center">
          <Popup 
          trigger={<Navbar.Text id="notifications"><span role="img" aria-label="notifications">❗</span></Navbar.Text> }
          position="bottom center"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={500}
          mouseEnterDelay={0}
          contentStyle={{ padding: '0px', border: 'none' }}
          arrow={false}
          >
          <div className="menu">
            {this.state.notifications.map(notification => {
              return <div className="menu-item"><a href={`/donations/${notification.id}`}>${notification.amount} from {notification.user.username}</a></div>
            })}
          </div> 
          </Popup>
          </Nav>
          :
          null
          }
          <div class="divider"/>
          { localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).trans ? 
          <Nav className="d-flex align-items-center">
            <Button href="/newbeacon">Send up a Beacon</Button> 
          </Nav>
          :
          null
          }
          <div class="divider"/>
          <div class="divider"/>
          <Nav className="d-flex align-items-center">
          <Button onClick={this.logout}>Logout</Button> 
          </Nav>
          </>
          :
          <Form inline onSubmit={(ev)=> this.submitLogin(ev)}>
            <FormControl name="username" value={this.state.loginForm.username} onChange={(ev)=> this.onLoginFormChange(ev)} type="text" placeholder="Username" className="mr-sm-2" />
            <FormControl name="password" value={this.state.loginForm.password} onChange={(ev)=> this.onLoginFormChange(ev)} type="password" placeholder="Password" className="mr-sm-2"/>
            <Button type="submit">Login</Button>
          <Navbar.Text>
            <a href="/signup">Or Sign Up</a>
          </Navbar.Text>
          </Form>
          }
          </Navbar.Collapse>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" render={(props)=>(<Home {...this.props}/>)}/>
            <Route exact path="/signup" render={()=>(<Signup {...this.props} logUserIn={this.logUserIn}/>)}/>
            <Route exact path="/users/:id" render={()=>(<Profile {...this.props} decodeJwt={this.decodeJwt}/>)}/>
            <Route exact path="/beacons/:id" render={()=>(<BeaconShow {...this.props} decodeJwt={this.decodeJwt}/>)}/>
            <Route exact path="/donations/:id" render={()=>(<DonationShow {...this.props} decodeJwt={this.decodeJwt}/>)}/>
            <Route exact path="/beacons/:id/newdonation" render={()=>(<NewDonation/>)}/>
            <Route exact path="/newprofile" render={()=>(<NewProfile/>)}/>
            <Route exact path="/newbeacon" render={()=>(<NewBeacon/>)}/>
            <Route exact path="/rankings" render={()=>(<Rankings/>)}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
