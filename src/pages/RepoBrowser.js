import React, { Component } from 'react';

import '../App.css';
import IssueCard from '../components/IssueCard';



class RepoBrowser extends Component {

    constructor(props) {
        super(props)
        //Has props.code = auth token 

        //Save the code to localStorage
        this.state = {
            elements: []
        }

    }
    componentWillMount() {
        for (var i = 0; i < 3; i++) {
            var elements = this.state.elements;
            elements.push(<a href="/repo_details/1ef3232f"><IssueCard name="Gust" description="A charting library for rust" /></a>);
            elements.push(<a href="/repo_details/1ef3232f"><IssueCard name="KSUID" description="A KSUID implementation for python" /></a>);
            elements.push(<a href="/repo_details/1ef3232f"><IssueCard name="Globe" description="A new way to interact with maps" /></a>);
            this.setState({
                elements: elements,
            })
        }
    }

    render() {


        return (
            <div className="App">
                <div className="horiz" style={{ 'justify-content': 'space-between' }}>
                    <p className="title"> Foundry </p>

                    <a className="add-link" href="/add_repo"><p className="btn-text"> + Add your Repository </p></a>


                </div>



                <div className="horiz">
                    <a href="https://github.com/Forge-Iron/Foundry"><p className="sub-bar-text"> View on Github </p></a>
                    <a href="https://www.patreon.com/home" ><p className="sub-bar-text"> Support on Patreon </p> </a>
                </div >
                <input className="search" type="text" placeholder="Search for Repository" />

                <div className="grid-container">
                    {this.state.elements}
                </div>
                <p className="spacer"></p>
                <p className="footer-text"> Development & Design: Samuel Resendez </p>
            </div >
        )
    }

}

export default RepoBrowser;