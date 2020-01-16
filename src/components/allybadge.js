import React, { Component } from 'react';

class AllyBadge extends Component {
    render() { 
        return ( 
            <div className="inline align-middle flag">
                <div className="imagecropper">
                    <img className="profile_img" src="../../images/Ally.png" alt="ally flag"/>
                </div>
            </div>
        );
    }
}
 
export default AllyBadge;