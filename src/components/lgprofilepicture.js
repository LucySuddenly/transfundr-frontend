import React, { Component } from 'react';

class LgProfilePicture extends Component {
    render() { 
        return (
            <div className="inline align-middle">
                <div className="imagecropper">
                    <img src={this.props.user.profile.profile_img} className="profile_img" alt="profile"/>
                </div>
            </div>
        );
    }
}
 
export default LgProfilePicture;