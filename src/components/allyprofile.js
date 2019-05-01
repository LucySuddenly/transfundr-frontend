import React, { Component } from 'react';
import DonationContainer from './donationcontainer';
import TimeAgo from 'react-timeago'

class AllyProfile extends Component {
    render() {
        return (
<<<<<<< HEAD
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
                                 <img className="profile_img" src="../../images/Ally.jpg"/>
                             </div>
                         </div>
                     </div>
                     <div class="bio">
                         <div className="inline">
                             <h5>Bio: {this.props.user.profile.bio}</h5>
                             <h3>Points: {this.props.points}</h3>
                             <h6>Joined: <TimeAgo date={this.props.user.created_at}/></h6>
                         </div>
                     </div>
                 </div>
                 <DonationContainer decodeJwt={this.props.decodeJwt} donations={this.props.user.donations} />
             </div>
             </>
=======
            <>
            <div class="profile">
                <img src={this.props.user.profile.cover_img} id="cover_img" alt="cover"/>
                <div class="imagecropper">
                <img src={this.props.user.profile.profile_img} className="profile_img" alt="profile"/>
                </div>
                <div class="bio">
                <h6>Bio: {this.props.user.profile.bio}</h6>
                <h6>Points: {this.props.points}</h6>
                <h6>Joined: <TimeAgo date={this.props.user.created_at}/></h6>
                </div>
            </div>
            <div className="content">
            <DonationContainer decodeJwt={this.props.decodeJwt} donations={this.props.user.donations} />
            </div>
            </>
>>>>>>> 0eba58252d4a6362ba11ae32c5c61561c144d885

        );
    }
}

export default AllyProfile;
