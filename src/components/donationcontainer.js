import React, { Component } from 'react';
import Donation from './donation'

class DonationContainer extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div >
                {this.props.donations.map(donation => {
                   return <Donation decodeJwt={this.props.decodeJwt} beacon={this.props.beacon} donation={donation}/>
                })}
            </div>
        );
    }
}

export default DonationContainer;
