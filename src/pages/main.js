import React, { Component } from 'react';
import logo from '../images/boostfire.png';
import '../App.css';
import IssueCard from '../components/IssueCard';
import RepoBrowser from './RepoBrowser.js';



class MainPage extends Component {

    constructor(props) {
        super(props)
        //Has props.code = auth token 
        //Save the code to localStorage
        this.state = {
            curr_page: 'repo_browser',
        }


    }

    render() {

        return (
            <RepoBrowser />
        )
    }


}

export default MainPage;