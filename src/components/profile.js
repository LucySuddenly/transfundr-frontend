import React, { Component } from 'react';
import {withRouter} from 'react-router';
import TransProfile from './transprofile'
import AllyProfile from './allyprofile';



class Profile extends Component {
    constructor(props){
        super(props)
        fetch(`//localhost:3000/users/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => this.setState({user: json}))
        this.state = {
            user: {
                trans: null
            }
        }
    }

    render() {
        return (<>
        {this.state.user.trans ? 
        <TransProfile user={this.state.user}/> : 
        <AllyProfile user={this.state.user}/> }
        </>
        )
    }
}

export default withRouter(Profile);
