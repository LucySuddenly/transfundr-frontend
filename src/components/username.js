import React, { Component } from 'react';

class Username extends Component {
    render() {
        return (
            <h3 class="username">{this.props.user.username}</h3>
        );
    }
}

export default Username;
