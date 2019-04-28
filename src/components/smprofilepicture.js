import React, { Component } from 'react';

class SmProfilePicture extends Component {
    render() {
        return (
            <>
            <div className="imagecroppersm">
                <img src={this.props.profile.profile_img} className="smprofilepicture profile_img" alt="profile"/>
            </div>
            </>
        );
    }
}

export default SmProfilePicture;
