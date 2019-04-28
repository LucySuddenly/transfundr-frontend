import React, { Component } from 'react';

class Username extends Component {
    render() {
        return (
            <a href={`//localhost:3001/users/${this.props.user.id}`}> 
                <h3 className="username">{this.props.user.username}</h3>
            </a>
        );
    }
}

export default Username;
