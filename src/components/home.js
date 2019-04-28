import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import BeaconContainer  from './beaconcontainer'

class Home extends Component {
    constructor(){
        super()
        fetch("//localhost:3000/home")
        .then(resp => resp.json())
        .then(json => this.setState({payload: json}))
        this.state = {
            payload: [
                {beacon: {
                    id: null,
                    user: {
                        profile: {
                            venmo: null
                        }
                    }
                }}
            ]
        }
    }
    render() {
        return (
            <>
            <div id="sidenav">
                <h5>Sort By:</h5>
                <ButtonGroup vertical>
                    <Button>New</Button>
                    <Button>Nearly There</Button>
                    <Button>Needs Help</Button>
                </ButtonGroup>
            </div>
            <BeaconContainer payload={this.state.payload}/>
            </>
        );
    }
}

export default Home;
