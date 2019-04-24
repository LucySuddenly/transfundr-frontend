import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

function App() {
  return (
  <Navbar sticky="top" bg="light justify-content-between">
    <Navbar.Brand href="/">TransFundr</Navbar.Brand>
    <Form inline >
      <FormControl type="text" placeholder="Username" className="mr-sm-2" />
      <FormControl type="password" placeholder="Password" className="mr-sm-2"/>
      <Button type="submit">Login</Button>
    </Form>
  </Navbar>

    
  );
}

export default App;
