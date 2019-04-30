import React, { Component } from 'react';

class About  extends Component {
    render() {
        return (
            <div className="content">
                <div className="standaloneform">
                    <h1>About</h1>
                    <p>TransFundr was built by a <a href="http://www.lucysuddenly.com">white trans woman</a> to facilitate and reward donations to struggling trans people, especially trans women of color. Donate directly through Venmo, Paypal, CashApp or Zelle, then add your donation on TransFundr. When your donation is confirmed by the receiver, you get points. Depending on who the receiver of your donation, you get a multiplier applied to the number of points you get. </p>
                    <table>
                        <tr>
                            <td></td>
                            <td>White</td>
                            <td>Non-White</td>
                        </tr>
                        <tr>
                            <td>Trans Masculine</td>
                            <td>X0</td>
                            <td>X2</td>
                        </tr>
                        <tr>
                            <td>Trans Feminine</td>
                            <td>X2</td>
                            <td>X4</td>
                        </tr>
                    </table>
                    <br/>
                    <p>Trans women are at high risk of joblessness, homelessness, assault, and societal exclusion. However, trans men of color also experience high incidences of these ills. And of course, the risks are especially compounded for trans women of color. </p>
                    <p>Allies: the way to best use this site is to donate when you can and share beacons as often as you’re able. Promoting fundraisers of trans people is almost as good as donating. Call on your friends and family to use this site. Trans people are in need, and you can help.</p>
                    <p>Trans folks: this website serves as the opening in a conversation. I made design decisions based on my knowledge of hierarchy in our community, but these decisions are flexible: if you have ideas on how I can better structure the economy of points or anything else, <a href="mailto:suddenlylucy@gmail.com">email me</a> -- if you can code, head to the <a href="https://github.com/LucySuddenly/transfundr-frontend">git repo</a> and submit a pull request.</p>
                </div>
            </div>
        );
    }
}

export default About ;