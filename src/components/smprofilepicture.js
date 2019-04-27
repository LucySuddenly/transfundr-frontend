import React, { Component } from 'react';

class SmProfilePicture extends Component {
    render() {
        return (
            <>
            <div className="imagecroppersm">
                <img src={this.props.profile.profile_img} className="smprofilepicture" className="profile_img"/>
            </div>
            </>
        );
    }
}

export default SmProfilePicture;
