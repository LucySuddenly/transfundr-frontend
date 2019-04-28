import React, { Component } from 'react';
import {withRouter} from 'react-router';
import TransProfile from './transprofile'
import AllyProfile from './allyprofile';



class Profile extends Component {
    constructor(props){
        super(props)
        fetch(`//localhost:3000/users/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            this.setState({user: json.user, beacons: json.beacons})})
        this.state = {
            user: {
                trans: null,
                profile: {
                    venmo: null,
                    paypal: null,
                    cash: null,
                    zelle: null
                }
            },
            beacons: []
        }
    }

    render() {
        return (<>
        {this.state.user.trans ? 
        <TransProfile beacons={this.state.beacons} user={this.state.user}/> : 
        <AllyProfile beacons={this.state.beacons} user={this.state.user}/> }
        </>
        )
    }
}

export default withRouter(Profile);
