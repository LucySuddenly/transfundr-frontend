import React, { Component } from 'react';

class Zelle  extends Component {
    render() {
        return (
            <>
            <img src="https://i.imgur.com/HVFI24E.png" width="50" alt="zelle" />
            <h5>{this.props.username}</h5>
            </>
        );
    }
}

export default Zelle ;