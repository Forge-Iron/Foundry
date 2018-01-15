import React, { Component } from 'react';
import logo from './images/boostfire.png';
import './App.css';
import IssueCard from './components/IssueCard';



class MainPage extends Component {

    constructor(props) {
        super(props)
        //Has props.code = auth token 

        //Save the code to localStorage


    }

    render() {

        return (
            <div className="App">
                <div className="horiz" style={{ 'justify-content': 'space-between' }}>
                    <p className="title"> Foundry </p>
                    <button className="add-button">
                        <a href="/add?code="><p className="btn-text">Add your Repository </p></a>
                    </button>
                </div>


                <p className="spacer"></p>
                <div className="horiz">
                    <a href="https://github.com/Forge-Iron/Foundry"><p className="sub-bar-text"> View on Github </p></a>
                    <a href="https://www.patreon.com/home" ><p className="sub-bar-text"> Support on Patreon </p> </a>
                </div >

                <div className="grid-container">
                    <IssueCard name="Gust" description="A charting library for rust" />
                    <IssueCard name="KSUID" description="A KSUID implementation for python" />
                    <IssueCard name="Globe" description="A new way to interact with maps" />
                    <IssueCard name="Gust" description="A charting library for rust" />
                    <IssueCard name="KSUID" description="A KSUID implementation for python" />
                    <IssueCard name="Globe" description="A new way to interact with maps" />
                    <IssueCard name="Gust" description="A charting library for rust" />
                    <IssueCard name="KSUID" description="A KSUID implementation for python" />
                    <IssueCard name="Globe" description="A new way to interact with maps" />
                    <IssueCard name="Gust" description="A charting library for rust" />
                    <IssueCard name="KSUID" description="A KSUID implementation for python" />
                    <IssueCard name="Globe" description="A new way to interact with maps" />
                    <IssueCard name="Gust" description="A charting library for rust" />
                    <IssueCard name="KSUID" description="A KSUID implementation for python" />
                    <IssueCard name="Globe" description="A new way to interact with maps" />
                </div>
            </div >
        )
    }

}

export default MainPage;