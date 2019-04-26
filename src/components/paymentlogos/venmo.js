import React, { Component } from 'react';

class Venmo  extends Component {
    render() {
        return (
            <>
            <img src="https://i.imgur.com/xChPL20.png" id="venmo" />
            <h5>{this.props.username}</h5>
            </>
        );
    }
}

export default Venmo ;
