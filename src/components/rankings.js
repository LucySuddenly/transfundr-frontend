import React, { Component } from 'react';
import SmProfilePicture from './smprofilepicture';
import Username from './username';

class Rankings extends Component {
    constructor(){
        super()
        fetch("//localhost:3000/rankings")
        .then(resp => resp.json())
        .then(json => this.setState({
            payload: json
        }))
        this.state = {
            payload: {
                topTen: [],
                biggestToday: {
                    amount: null,
                    user: {
                        profile: {
                            profile_img: null
                        }
                    }
                },
                biggestWeek: {
                    amount: null,
                    user: {
                        profile: {
                            profile_img: null
                        }
                    }
                },
                biggestMonth: {
                    amount: null,
                    user: {
                        profile: {
                            profile_img: null
                        }
                    }
                },
                biggestYear: {
                    amount: null,
                    user: {
                        profile: {
                            profile_img: null
                        }
                    }
                }
            }
            
        }
    }
    render() {
        return (
            <div id="rankings">
                <div id="topten">
                    <h2>Top Ten Donators</h2>
                    <ol>
                        {this.state.payload.topTen.map(item => {
                            return <li>{item.points} points - <SmProfilePicture profile={item.user.profile}/><Username user={item.user}/></li>
                        })}
                    </ol>
                </div>
                <div id="biggestdonations">
                    <h2>Biggest Donations</h2>
                    <ul>
                        <li><a href={`/donations/${this.state.payload.biggestToday.id}`}>Today: ${this.state.payload.biggestToday.amount}</a> - <SmProfilePicture profile={this.state.payload.biggestToday.user.profile}/><Username user={this.state.payload.biggestToday.user}/></li>
                        <li><a href={`/donations/${this.state.payload.biggestWeek.id}`}>This Week: ${this.state.payload.biggestWeek.amount}</a> - <SmProfilePicture profile={this.state.payload.biggestWeek.user.profile}/><Username user={this.state.payload.biggestWeek.user}/></li>
                        <li><a href={`/donations/${this.state.payload.biggestMonth.id}`}>This Month: ${this.state.payload.biggestMonth.amount}</a> - <SmProfilePicture profile={this.state.payload.biggestMonth.user.profile}/><Username user={this.state.payload.biggestMonth.user}/></li>
                        <li><a href={`/donations/${this.state.payload.biggestYear.id}`}>This Year: ${this.state.payload.biggestYear.amount}</a> - <SmProfilePicture profile={this.state.payload.biggestYear.user.profile}/><Username user={this.state.payload.biggestYear.user}/></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Rankings;
