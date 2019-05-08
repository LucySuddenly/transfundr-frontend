import React, { Component } from 'react';

class About  extends Component {
    render() {
        return (
            <div className="content">
                <div className="standaloneform">
                    <h1>About</h1>
                    <h5 className="text">TransFundr was built by a <a href="http://www.lucysuddenly.com">white trans woman</a> to facilitate and reward donations to struggling trans women, especially trans women of color.  </h5>
                    <h3>How to use this website</h3>
                    <h5 className="text">Trans women: create an account, then send up a fundraising beacon. When you get a donation, you'll get a notification -- double check that you've received actual funds via your Paypal, CashApp, Venmo, or Zelle, then confirm the donation. </h5>
                    <h5 className="text">Allies: Create an account on TransFundr. Donate directly through Venmo, Paypal, CashApp or Zelle, then add your donation on TransFundr. When your donation is confirmed by the receiver, you get points. Depending on who the receiver of your donation, you get a multiplier applied to the number of points you get: white trans women get no multiplier, trans women of color get X2</h5>
                    <h5 className="text">Trans women are at high risk of joblessness, homelessness, assault, and societal exclusion. The risks are especially compounded for trans women of color, with most violent assaults being directed at them. Point multipliers reflect these realities, encouraging donations to flow to trans women of color. Sort methods also prioritize trans women of color ahead of white trans women. </h5>
                    <h5 className="text">Allies: donate when you can and share beacons as often as you’re able. Promoting fundraisers of trans women is almost as good as donating. Call on your friends and family to use this site. Trans women are in need, and you can help.</h5>
                    <h5 className="text">Trans women: this website serves as the opening in a conversation. I made design decisions based on my knowledge of hierarchy in our community, but these decisions are flexible: if you have ideas on how I can better structure the economy of points or anything else, email me at <a href="mailto:transfundr@gmail.com">transfundr@gmail.com</a> -- if you can code, head to the <a href="https://github.com/LucySuddenly/transfundr-frontend">git repo</a> and submit a pull request.</h5>
                </div>
            </div>
        );
    }
}

export default About ;