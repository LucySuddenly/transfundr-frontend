import React, { Component } from 'react';

class Username extends Component {
    render() {
        return (
            <h3 className="username">{this.props.user.username}</h3>
        );
    }
}

export default Username;
