import React, { Component } from 'react';
import logo from './images/boostfire.png';
import './App.css';
import IssueCard from './components/IssueCard';



class RepoBrowser extends Component {

    constructor(props) {
        super(props)
        //Has props.code = auth token 

        //Save the code to localStorage



    }

    render() {
        var elements = [];
        for (var i = 0; i < 3; i++) {
            elements.push(<IssueCard name="Gust" description="A charting library for rust" />);
            elements.push(<IssueCard name="KSUID" description="A KSUID implementation for python" />);
            elements.push(<IssueCard name="Globe" description="A new way to interact with maps" />);
        }
        return (
            <div className="App">
                <div className="horiz" style={{ 'justify-content': 'space-between' }}>
                    <p className="title"> Foundry </p>
                    <button className="add-button"
                        onClick={() => {
                            this.props.changePage("add_repo")
                        }}>
                        <p className="btn-text"> + Add your Repository </p>
                    </button>

                </div>


                <p className="spacer"></p>
                <div className="horiz">
                    <a href="https://github.com/Forge-Iron/Foundry"><p className="sub-bar-text"> View on Github </p></a>
                    <a href="https://www.patreon.com/home" ><p className="sub-bar-text"> Support on Patreon </p> </a>
                </div >

                <div className="grid-container">
                    {elements}
                </div>
                <p className="spacer"></p>
                <p className="footer-text"> Development & Design: Samuel Resendez </p>
            </div >
        )
    }

}

export default RepoBrowser;