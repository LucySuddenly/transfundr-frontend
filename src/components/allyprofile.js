import React, { Component } from 'react';
import DonationContainer from './donationcontainer';

class AllyProfile extends Component {
    render() {
        return (
            <>
            <div class="profile">
                <img src={this.props.user.profile.cover_img} id="cover_img" alt="cover"/>
                <div class="imagecropper">
                <img src={this.props.user.profile.profile_img} className="profile_img" alt="profile"/>
                </div>
                <div class="bio">
                <h6>Bio: {this.props.user.profile.bio}</h6>
                <h6>Points: {this.props.points}</h6>
                </div>
            </div>
            <DonationContainer decodeJwt={this.props.decodeJwt} donations={this.props.user.donations} />
            </>

        );
    }
}

export default AllyProfile;
