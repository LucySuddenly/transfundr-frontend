import React, { Component } from 'react';

class CashApp  extends Component {
    render() {
        return (
            <div className="inline">
            <img src="https://i.imgur.com/zLXBOb9.png" width="50" alt="cashapp" className="inline" />
            <h5 className="inline">{this.props.username}</h5>
            </div>
        );
    }
}

export default CashApp ;