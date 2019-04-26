import React, { Component } from 'react';
import PaymentContainer from './paymentcontainer'


class TransProfile extends Component {
    render() {
        return (
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
        );
    }
}

export default TransProfile;
