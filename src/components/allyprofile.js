import React, { Component } from 'react';
import DonationContainer from './donationcontainer';
import TimeAgo from 'react-timeago'
import Button from 'react-bootstrap/Button'

class AllyProfile extends Component {
    render() {
        return (
            <>
                <img src={this.props.user.profile.cover_img} id="cover_img" alt="cover"/>
                <div className="content">
                    <div className="profile">
                        <div className="inline align-middle">
                            <div className="imagecropper">
                                <img src={this.props.user.profile.profile_img} className="profile_img" alt="profile"/>
                            </div>
                        </div>
                        <div className="divider"/>
                        <h1 class="inline align-middle">{this.props.user.username}</h1>
                        <div className="inline align-middle flag">
                            <div className="imagecropper">
                                <img className="profile_img" src="../../images/Ally.png" alt="ally flag"/>
                            </div>
                        </div>
                        <div class="bio">
                            <div className="inline">
                                {localStorage.getItem("jwt") && this.props.decodeJwt(localStorage.getItem("jwt")) === this.props.user.id ?
                                <Button href="/#/editprofile">Edit Profile</Button>
                                : 
                                null
                                }
                                <h5 className="text">Bio: {this.props.user.profile.bio}</h5>
                                <h3>Points: {this.props.points}</h3>
                                <h6>Joined: <TimeAgo date={this.props.user.created_at}/></h6>
                            </div>
                        </div>
                    </div>
                    <DonationContainer decodeJwt={this.props.decodeJwt} donations={this.props.user.donations} />
                </div>
            </>

        );
    }
}

export default AllyProfile;
