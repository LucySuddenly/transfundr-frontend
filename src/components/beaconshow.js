import React, { Component } from 'react';
import {withRouter} from 'react-router';
import PaymentContainer from './paymentcontainer'
import Button from 'react-bootstrap/Button';
import DonationContainer from './donationcontainer'
import ProgressBar from 'react-bootstrap/ProgressBar'
import SmProfilePicture from './smprofilepicture';
import Username from './username';
import PointsMultiplyer from './pointsmultiplyer';
import TimeAgo from 'react-timeago'
import {FacebookShareButton, TwitterShareButton, RedditShareButton} from 'react-share';
import Facebook from './socialmedialogos/facebook'
import Twitter from './socialmedialogos/twitter'
import Reddit from './socialmedialogos/reddit'

class BeaconShow extends Component {
    constructor(props){
        super(props)
        fetch(`//localhost:3000/beacons/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                beacon: json.beacon,
                total: json.total
            })
        })
        this.state = {
            beacon: {
                donations: [],
                title: null,
                text: null,
                target: null,
                user: {
                    profile: {
                        cash: null,
                        venmo: null,
                        paypal: null,
                        zelle: null
                    }
                }
            }
        }
    }
    
    render() {
        return (
            <div className="content">
                <div className="standaloneform">
                    <SmProfilePicture profile={this.state.beacon.user.profile}/>
                    <Username user={this.state.beacon.user}/>
                    <h6>Sent up: <TimeAgo date={this.state.beacon.created_at}/></h6>
                    <h2>{this.state.beacon.title}</h2>
                    <h6>{this.state.beacon.text}</h6>
                    <PointsMultiplyer user={this.state.beacon.user}/>
                    <h4>Target: ${this.state.beacon.target}</h4>
                    <h4>Raised: ${this.state.total}</h4>
                    <ProgressBar animated variant="success" now={this.state.total / this.state.beacon.target * 100}/>
                    <PaymentContainer profile={this.state.beacon.user.profile}/>
                    <div>
                    <FacebookShareButton className="inline" children={<Facebook/>} url={`www.transfundr.com/beacons/${this.props.match.params.id}`} quote="Please consider donating" hashtag="#transfundr"/>
                    <TwitterShareButton className="inline" children={<Twitter/>} url={`www.transfundr.com/beacons/${this.props.match.params.id}`} title="Please consider donating" via="transfundr" hashtags={["transfundr"]}/>
                    <RedditShareButton className="inline" children={<Reddit/>}url={`www.transfundr.com/beacons/${this.props.match.params.id}`} title="Please consider donating"/>
                    </div>
                    {  localStorage.getItem("user") ?
                        <Button href={`/beacons/${this.props.match.params.id}/newdonation`}>Donate</Button>
                        : null
                    }
                </div>
                    <DonationContainer decodeJwt={this.props.decodeJwt} beacon={this.state.beacon} donations={this.state.beacon.donations}/>
            </div>
        );
    }
}

export default withRouter(BeaconShow);
