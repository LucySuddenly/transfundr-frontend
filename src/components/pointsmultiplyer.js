import React, { Component } from 'react';

class PointsMultiplyer extends Component {
    constructor(props){
        super(props)
        let counter = 0
        if (props.user.femme) {
            counter += 2
        }
        if (props.user.nonwhite) {
            counter += 2
        }
        this.state = {
            multiplier: counter
        }
    }

    componentWillReceiveProps(nextProps){
        let counter = 0
        if (nextProps.user.femme) {
            counter += 2
        }
        if (nextProps.user.nonwhite) {
            counter += 2
        }
        this.setState({
            multiplier: counter
        })
    }
    render() {
        return (
            <h3 id="multiplier">{this.state.multiplier}X Points</h3>
        );
    }
}

export default PointsMultiplyer;
