import React, { Component } from 'react';

class PointsMultiplyer extends Component {
    constructor(props){
        super(props)
        let counter = 1

        if (props.user.nonwhite) {
            counter += 1
        }
        this.state = {
            multiplier: counter
        }
    }

    componentWillReceiveProps(nextProps){
        let counter = 1
    
        if (nextProps.user.nonwhite) {
            counter += 1
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
