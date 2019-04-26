import React, { Component } from 'react';

class Paypal extends Component {
    render() {
        return (
            <div>
                <table border="0" cellpadding="10" cellspacing="0" align="center">
                    <tr>
                        <td align="center">
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                        <a href="https://www.paypal.com/webapps/mpp/paypal-popup" title="How PayPal Works" onclick="javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;">
                            <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" border="0" alt="PayPal Logo"/>
                        </a>
                        </td>
                    </tr>
                </table>
                <h5>{this.props.username}</h5>
            </div>
        );
    }
}

export default Paypal;
