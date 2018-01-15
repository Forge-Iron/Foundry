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
                <IssueCard name="Gust" description="a charting library for rust" />
                <IssueCard name="Gust" creator="saresend" />
                <IssueCard name="Gust" creator="saresend" />
            </div>
        )
    }

}

export default MainPage;