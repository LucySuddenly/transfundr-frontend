import React, { Component } from 'react';
import DonationContainer from './donationcontainer';
import LgProfilePicture from './lgprofilepicture'
import TimeAgo from 'react-timeago'
import Button from 'react-bootstrap/Button'

class AllyProfile extends Component {
    render() {
        const { user, points, decodeJwt } = this.props
        return (
            <>
                <img src={user.profile.cover_img} id="cover_img" alt="cover"/>
                <div className="content">
                    <div className="profile">
                        <LgProfilePicture user={user}/>
                        <div className="divider"/>
                        <h1 class="inline align-middle">{user.username}</h1>
                        <div className="inline align-middle flag">
                            <div className="imagecropper">
                                <img className="profile_img" src="../../images/Ally.png" alt="ally flag"/>
                            </div>
                        </div>
                        <div class="bio">
                            <div className="inline">
                                {localStorage.getItem("jwt") && decodeJwt(localStorage.getItem("jwt")) === user.id ?
                                <Button href="/#/editprofile">Edit Profile</Button>
                                : 
                                null
                                }
                                <h5 className="text">Bio: {user.profile.bio}</h5>
                                <h3>Points: {points}</h3>
                                <h6>Joined: <TimeAgo date={user.created_at}/></h6>
                            </div>
                        </div>
                    </div>
                    <DonationContainer decodeJwt={decodeJwt} donations={user.donations} />
                </div>
            </>

        );
    }
}

export default AllyProfile;
