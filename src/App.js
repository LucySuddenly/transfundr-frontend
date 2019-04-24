import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Home from './components/home'
import Signup from './components/signup'

function App() {
  return (
  <>
    <Navbar sticky="top" bg="light" className="justify-content-between">
      <Navbar.Brand href="/">TransFundr</Navbar.Brand>
      <Form inline >
        <FormControl type="text" placeholder="Username" className="mr-sm-2" />
        <FormControl type="password" placeholder="Password" className="mr-sm-2"/>
        <Button type="submit">Login</Button>
      <Navbar.Text>
        <a href="/signup">Or Sign Up</a>
      </Navbar.Text>
      </Form>
    </Navbar>
    <Router>
      <Switch>
        <Route exact path="/" render={(props)=>(<Home {...props}/>)}/>
        <Route exact path="/signup" render={()=>(<Signup/>)}/>
        <Route exact path="/users/:id"/>
        <Route exact path="/beacons/:id"/>
        <Route exact path="/donations/:id"/>
        <Route exact path="/newdonation"/>
        <Route exact path="/newbeacon"/>
        <Route exact path="/rankings"/>
      </Switch>
    </Router>
 </>
  );
}

export default App;
