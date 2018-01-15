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
                <p className="title"> Foundry </p>
                <p className="spacer"></p>
                <div className="grid-container">
                    <IssueCard name="Gust" description="a charting library for rust" />
                    <IssueCard name="KSUID" description="a KSUID implementation for python" />
                    <IssueCard name="Globe" description="a new way to interact with maps" />
                    <IssueCard name="Gust" description="a charting library for rust" />
                    <IssueCard name="KSUID" description="a KSUID implementation for python" />
                    <IssueCard name="Globe" description="a new way to interact with maps" />
                    <IssueCard name="Gust" description="a charting library for rust" />
                    <IssueCard name="KSUID" description="a KSUID implementation for python" />
                    <IssueCard name="Globe" description="a new way to interact with maps" />
                    <IssueCard name="Gust" description="a charting library for rust" />
                    <IssueCard name="KSUID" description="a KSUID implementation for python" />
                    <IssueCard name="Globe" description="a new way to interact with maps" />
                    <IssueCard name="Gust" description="a charting library for rust" />
                    <IssueCard name="KSUID" description="a KSUID implementation for python" />
                    <IssueCard name="Globe" description="a new way to interact with maps" />
                </div>
            </div>
        )
    }

}

export default MainPage;