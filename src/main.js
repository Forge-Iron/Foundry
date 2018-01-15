import React, { Component } from 'react';
import logo from './images/boostfire.png';
import './App.css';
import IssueCard from './components/IssueCard';



class MainPage extends Component {

    constructor(props) {
        super(props)
        //Has props.code = auth token 


    }

    render() {
        return (
            <div className="App">
                <div className="horiz" style={{ 'justify-content': 'space-between' }}>
                    <p className="title"> Foundry </p>
                    <button className="add-button">
                        <p className="btn-text">Add your Repository </p>
                    </button>
                </div>


                <p className="spacer"></p>
                <div className="horiz">
                    <p className="sub-bar-text"> View on Github </p>
                    <p className="sub-bar-text"> Support on Patreon </p>
                </div>

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
            </div>
        )
    }

}

export default MainPage;