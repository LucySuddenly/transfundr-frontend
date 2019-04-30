import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import PaymentContainer from './paymentcontainer'
import ProgressBar from 'react-bootstrap/ProgressBar'
import SmProfilePicture from './smprofilepicture';
import Username from './username';
import PointsMultiplyer from './pointsmultiplyer';
import TimeAgo from 'react-timeago'
import {FacebookShareButton, TwitterShareButton, RedditShareButton} from 'react-share';
import Facebook from './socialmedialogos/facebook'
import Twitter from './socialmedialogos/twitter'
import Reddit from './socialmedialogos/reddit'

class Beacon extends Component {
    render() {
        return (
            <div className="standaloneform">
                {this.props.beacon.user ?
                <>
                <SmProfilePicture profile={this.props.beacon.user.profile}/>
                <Username user={this.props.beacon.user}/>
                <PointsMultiplyer user={this.props.beacon.user}/> 
                </>
                : null}
                <h6>Sent up: <TimeAgo date={this.props.beacon.created_at}/></h6>
                <a href={`/beacons/${this.props.beacon.id}`}><h2>{this.props.beacon.title}</h2></a>
                <h6>{this.props.beacon.text}</h6>
                <h4 >Raised: ${this.props.total}</h4>
                <h4>Target: ${this.props.beacon.target}</h4>
                <ProgressBar animated variant="success" now={this.props.total / this.props.beacon.target * 100}/>
                {this.props.beacon.user ?
                <>
                <br/>
                <PaymentContainer profile={this.props.beacon.user.profile}/> 
                </>
                :
                null
                }
                <br/>
                <h4 className="inline">Share: </h4>
                <FacebookShareButton className="inline" children={<Facebook/>} url={`www.transfundr.com/beacons/${this.props.beacon.id}`} quote="Please consider donating" hashtag="#transfundr"/>
                <TwitterShareButton className="inline" children={<Twitter/>} url={`www.transfundr.com/beacons/${this.props.beacon.id}`} title="Please consider donating" via="transfundr" hashtags={["transfundr"]}/>
                <RedditShareButton className="inline" children={<Reddit/>}url={`www.transfundr.com/beacons/${this.props.beacon.id}`} title="Please consider donating"/>
                {  localStorage.getItem("user") ?
                    <Button className="donatebutton" href={`/beacons/${this.props.beacon.id}/newdonation`}>Donate</Button>
                    : null
                }                
            </div>
        );
    }
}

export default Beacon;
