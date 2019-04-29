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
            this.setState({user: json.user, beacons: json.beacons, points: json.points})})
        this.state = {
            user: {
                trans: null,
                profile: {
                    venmo: null,
                    paypal: null,
                    cash: null,
                    zelle: null
                },
                donations: []
            },
            beacons: [],
            points: 0
        }
    }

    render() {
        return (<>
        {this.state.user.trans ? 
        <TransProfile points={this.state.points} beacons={this.state.beacons} user={this.state.user}/> : 
        <AllyProfile decodeJwt={this.props.decodeJwt} points={this.state.points} user={this.state.user}/> }
        </>
        )
    }
}

export default withRouter(Profile);
