import React, { Component } from 'react';

class PointsMultiplyer extends Component {
    constructor(props){
        super(props)
        this.state = {
            multiplier: props.user.femme
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
            <h3 id="multiplier">{this.state.multiplier}X</h3>
        );
    }
}

export default PointsMultiplyer;
