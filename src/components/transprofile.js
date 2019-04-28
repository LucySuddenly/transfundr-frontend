import React, { Component } from 'react';
import PaymentContainer from './paymentcontainer'
import BeaconContainer from './beaconcontainer'


class TransProfile extends Component {
    constructor(props){
        super(props)
        console.log("user", this.props.user)
    }
    render() {
        return (
            <>
            <div class="profile">
                <img src={this.props.user.profile.cover_img} id="cover_img"/>
                <div class="imagecropper">
                <img src={this.props.user.profile.profile_img} className="profile_img"/>
                </div>
                <div class="bio">
                <h6>Bio: {this.props.user.profile.bio}</h6>
                <PaymentContainer profile={this.props.user.profile}/>
                </div>
            </div>
            <BeaconContainer payload={this.props.beacons}/>
            </>
        );
    }
}

export default TransProfile;
