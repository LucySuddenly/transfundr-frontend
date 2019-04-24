import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

class Home extends Component {
    render() {
        return (
            <>
            <div id="sidenav">
                <h5>Sort By:</h5>
                <ButtonGroup vertical>
                    <Button>New</Button>
                    <Button>Nearly There</Button>
                    <Button>Needs Help</Button>
                </ButtonGroup>
            </div>
            </>
        );
    }
}

export default Home;
