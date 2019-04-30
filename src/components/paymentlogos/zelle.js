import React, { Component } from 'react';

class Zelle  extends Component {
    render() {
        return (
            <div className="inline">
            <img src="https://i.imgur.com/HVFI24E.png" width="50" alt="zelle" className="inline" />
            <h5 className="inline">{this.props.username}</h5>
            </div>
        );
    }
}

export default Zelle ;