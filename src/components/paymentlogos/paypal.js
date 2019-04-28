import React, { Component } from 'react';

class Paypal extends Component {
    render() {
        return (
            <div>
                <img src="https://i.imgur.com/pRwMvht.jpg" width="50" alt="paypal"/>
                <h5>{this.props.username}</h5>
            </div>
        );
    }
}

export default Paypal;
