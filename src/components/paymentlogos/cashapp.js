import React, { Component } from 'react';

class CashApp  extends Component {
    render() {
        return (
            <>
            <img src="https://i.imgur.com/zLXBOb9.png" id="cashapp" />
            <h5>{this.props.username}</h5>
            </>
        );
    }
}

export default CashApp ;