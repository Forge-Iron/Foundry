import React, { Component } from 'react';
import logo from '../images/boostfire.png';
import '../App.css';
import IssueCard from '../components/IssueCard';
import IssueDescription from '../components/IssueDescription';
import Slider, { Range } from 'rc-slider';


export default class RepoSubmit extends Component {

    render() {
        return (
            <div className="App">
                <div className="horiz" style={{ 'justify-content': 'space-between' }}>
                    <p className="title"> Foundry </p>

                    <a className="add-link" href="/main"><p className="btn-text"> Close </p></a>

                </div>
                <p className="spacer"> </p>
                <p className="text" style={{ fontSize: 40, marginBottom: 5 }}> Gust </p>
                <p className="text sub" style={{ marginTop: 10 }}> A small graphing library for rust, built with d3.js </p>


                <p className="text sub" style={{ alignSelf: 'left', textAlign: 'left' }}> Difficulty </p>
                <Slider defaultValue={50} />
                <Range />
            </div>
        )
    }
}