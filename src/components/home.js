import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import BeaconContainer  from './beaconcontainer'

class Home extends Component {
    constructor(){
        super()
        this.getHomeBeacons()
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

    getHomeBeacons = () => {
        fetch("https://transfundr-backend.herokuapp.com/home")
        .then(resp => resp.json())
        .then(json => this.setState({payload: json}))
    }

    getNearlyThereBeacons = () => {
        fetch("https://transfundr-backend.herokuapp.com/nearlythere")
        .then(resp => resp.json())
        .then(json => this.setState({payload: json}))
    }

    getNeedsHelpBeacons = () => {
        fetch("https://transfundr-backend.herokuapp.com/needshelp")
        .then(resp => resp.json())
        .then(json => this.setState({payload: json}))
    }

    render() {
        return (
            <>
            <div id="sidenav">
                <h3>Sort:</h3>
                <div className="divider"></div>
                <div>
                <Button onClick={this.getHomeBeacons}>New</Button>
                <Button onClick={this.getNearlyThereBeacons}>Nearly There</Button>
                <Button onClick={this.getNeedsHelpBeacons}>Needs Help</Button>
                <div className="divider"/>
                
                <Button className="rankings" href="/#/rankings">Rankings</Button>
                </div>
            </div>
            <div className="content">
                <BeaconContainer payload={this.state.payload}/>
            </div>
            </>
        );
    }
}

export default Home;
