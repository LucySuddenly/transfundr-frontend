import React, { Component } from 'react';

class Zelle  extends Component {
    render() {
        return (
            <>
            <img src="https://i.imgur.com/HVFI24E.png" id="zelle" />
            <h5>{this.props.username}</h5>
            </>
        );
    }
}

export default Zelle ;