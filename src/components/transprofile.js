import React, { Component } from 'react';
import PaymentContainer from './paymentcontainer'
import BeaconContainer from './beaconcontainer'
import TimeAgo from 'react-timeago'
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router';

class TransProfile extends Component {
    render() {
        return (
            <>
            <img src={this.props.user.profile.cover_img} id="cover_img" alt="cover"/>
            <div className="content">
                <div className="profile">
                    <div>
                        <div className="inline align-middle">
                            <div className="imagecropper">
                                <img src={this.props.user.profile.profile_img} className="profile_img" alt="profile"/>
                            </div>
                        </div>
                        <div className="divider"/>
                        <h1 class="inline align-middle">{this.props.user.username}</h1>
                        <div className="inline align-middle flag">
                            <div className="imagecropper">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/2560px-Transgender_Pride_flag.svg.png"/>
                            </div>
                        </div>
                    </div>
                    <div class="bio">
                        <div className="inline">
                            {localStorage.getItem("jwt") && this.props.decodeJwt(localStorage.getItem("jwt")) === this.props.user.id ?
                             <Button href="/editprofile">Edit Profile</Button>
                            : 
                             null
                            }
                            <h5>Bio: {this.props.user.profile.bio}</h5>
                            <h3>Points: {this.props.points}</h3>
                            <h6>Joined: <TimeAgo date={this.props.user.created_at}/></h6>
                        </div>
                    <PaymentContainer profile={this.props.user.profile}/>
                    </div>
                </div>
                <BeaconContainer payload={this.props.beacons}/>
            </div>
            </>
        );
    }
}

export default withRouter(TransProfile);
