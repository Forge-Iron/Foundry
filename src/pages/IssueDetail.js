import React, { Component } from 'react';

import '../App.css';
import IssueCard from '../components/IssueCard';


export default class IssueDetailPage extends Component {

    render() {
        return (
            <div className="App">
                <p className="text" style={{ marginTop: 80, color: 'lightgray' }}> #746 </p>
                <p className="text" style={{ marginTop: 5 }} > Some random Issue Title </p>

            </div>
        )
    }
}