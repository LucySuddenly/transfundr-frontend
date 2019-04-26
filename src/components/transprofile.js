import React, { Component } from 'react';
import Venmo from "./paymentlogos/venmo"
import Paypal from "./paymentlogos/paypal"
import CashApp from "./paymentlogos/cashapp"
import Zelle from "./paymentlogos/zelle"

class TransProfile extends Component {
    render() {
        return (
            <div class="profile">
                <img src={this.props.user.profile.cover_img} id="cover_img"/>
                <div class="imagecropper">
                <img src={this.props.user.profile.profile_img} id="profile_img"/>
                </div>
                <div class="bio">
                <h6>Bio: {this.props.user.profile.bio}</h6>
                { this.props.user.profile.venmo ? 
                <Venmo username={this.props.user.profile.venmo}/> :
                null}
                { this.props.user.profile.paypal ? 
                <Paypal username={this.props.user.profile.paypal}/> :
                null}
                { this.props.user.profile.cash ? 
                <CashApp username={this.props.user.profile.cash}/> :
                null}
                { this.props.user.profile.zelle ? 
                <Zelle username={this.props.user.profile.zelle}/>   :
                null}
                
                </div>
            </div>
        );
    }
}

export default TransProfile;
