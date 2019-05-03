import React, { Component } from 'react';
import Donation from './donation'

class DonationContainer extends Component {

    render() {
        return (
            <div >
                {this.props.donations.map(donation => {
                   return <Donation key={donation.id} decodeJwt={this.props.decodeJwt} beacon={this.props.beacon} donation={donation}/>
                })}
            </div>
        );
    }
}

export default DonationContainer;
