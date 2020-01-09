import React, { Component } from 'react';

class Username extends Component {
    render() {
        return (
            <div className="inline align-middle">
            <a className="username" href={`/#/users/${this.props.user.id}`}> 
                <h3>{this.props.user.username}</h3>
            </a>
            </div>
        );
    }
}

export default Username;
