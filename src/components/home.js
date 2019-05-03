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
        fetch("//localhost:3000/home")
        .then(resp => resp.json())
        .then(json => this.setState({payload: json}))
    }

    getNearlyThereBeacons = () => {
        fetch("//localhost:3000/nearlythere")
        .then(resp => resp.json())
        .then(json => this.setState({payload: json}))
    }

    getNeedsHelpBeacons = () => {
        fetch("//localhost:3000/needshelp")
        .then(resp => resp.json())
        .then(json => this.setState({payload: json}))
    }

    render() {
        return (
            <>
            <div id="sidenav">
                <h5>Sort By:</h5>
                <div>
                <Button onClick={this.getHomeBeacons}>New</Button>
                <Button onClick={this.getNearlyThereBeacons}>Nearly There</Button>
                <Button className="bottombutton" onClick={this.getNeedsHelpBeacons}>Needs Help</Button>
                <div class="divider"/>
                <Button href="/rankings">Rankings</Button>
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
