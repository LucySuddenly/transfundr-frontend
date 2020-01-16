import React, { Component } from 'react';
import DonationContainer from './donationcontainer';
import LgProfilePicture from './lgprofilepicture'
import TimeAgo from 'react-timeago'
import Button from 'react-bootstrap/Button'
import AllyBadge from './allybadge'

class AllyProfile extends Component {
    conditionalEditRender = () => {
        const { decodeJwt, user } = this.props
        return localStorage.getItem("jwt") && decodeJwt(localStorage.getItem("jwt")) === user.id 
        ?
        <Button href="/#/editprofile">Edit Profile</Button>
        : 
        null
    }
    render() {
        const { user, points, decodeJwt } = this.props
        return (
            <>
                <img src={user.profile.cover_img} id="cover_img" alt="cover"/>
                <div className="content">
                    <section className="profile">
                        <LgProfilePicture user={user}/>
                        <h1 class="inline align-middle">{user.username}</h1>
                        <AllyBadge/>
                        <div class="bio">
                            <div className="inline">
                                {this.conditionalEditRender()}
                                <h5 className="text">Bio: {user.profile.bio}</h5>
                                <h3>Points: {points}</h3>
                                <h6>Joined: <TimeAgo date={user.created_at}/></h6>
                            </div>
                        </div>
                    </section>
                    <DonationContainer decodeJwt={decodeJwt} donations={user.donations} />
                </div>
            </>

        );
    }
}

export default AllyProfile;
