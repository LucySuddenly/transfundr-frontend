import React, { Component } from 'react';

class SmProfilePicture extends Component {
    render() {
        return (
            <div className="inline align-middle">
                <div className="imagecroppersm">
                    <img src={this.props.profile.profile_img} className="smprofilepicture profile_img" alt="profile"/>
                </div>
            </div>
        );
    }
}

export default SmProfilePicture;
