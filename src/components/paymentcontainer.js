import React, { Component } from 'react';
import Venmo from "./paymentlogos/venmo"
import Paypal from "./paymentlogos/paypal"
import CashApp from "./paymentlogos/cashapp"
import Zelle from "./paymentlogos/zelle"

class PaymentContainer extends Component {
    
    render() {
        return (
            <div>
                 { this.props.profile.venmo ? 
                <Venmo username={this.props.profile.venmo}/> :
                null}
                { this.props.profile.paypal ? 
                <Paypal username={this.props.profile.paypal}/> :
                null}
                { this.props.profile.cash ? 
                <CashApp username={this.props.profile.cash}/> :
                null}
                { this.props.profile.zelle ? 
                <Zelle username={this.props.profile.zelle}/>   :
                null}
                
            </div>
        );
    }
}

export default PaymentContainer;
