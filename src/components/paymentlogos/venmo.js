import React, { Component } from 'react';

class Venmo  extends Component {
    render() {
        return (
            <div className="inline">
            <img src="https://i.imgur.com/xChPL20.png" width="50" alt="venmo" className="inline"/>
            <h5 className="inline">{this.props.username}</h5>
            </div>
        );
    }
}

export default Venmo ;
