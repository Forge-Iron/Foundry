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

    changePage(value) {
        this.setState({
            curr_page: value,
        })
    }
    changeDynamicPage(value, data) {
        this.setState({
            curr_page: value,
        })
        localStorage.setItem(data);
    }

    render() {

        return (
            <RepoBrowser />
        )
    }


}

export default MainPage;