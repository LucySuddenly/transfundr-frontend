import React, { Component } from 'react';

class Paypal extends Component {
    render() {
        return (
            <div className="inline">
                <img src="https://i.imgur.com/pRwMvht.jpg" width="50" alt="paypal" className="inline"/>
                <h5 className="inline">{this.props.username}</h5>
            </div>
        );
    }
}

export default Paypal;
