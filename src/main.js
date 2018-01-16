import React, { Component } from 'react';
import logo from './images/boostfire.png';
import './App.css';
import IssueCard from './components/IssueCard';
import RepoBrowser from './RepoBrowser.js';
import AddRepo from './AddRepo.js';


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

    render() {
        var elements = [];
        for (var i = 0; i < 3; i++) {
            elements.push(<IssueCard name="Gust" description="A charting library for rust" />);
            elements.push(<IssueCard name="KSUID" description="A KSUID implementation for python" />);
            elements.push(<IssueCard name="Globe" description="A new way to interact with maps" />);
        }
        if (this.state.curr_page === 'repo_browser') {
            return (
                <RepoBrowser changePage={this.changePage.bind(this)} />
            )
        }
        else if (this.state.curr_page === 'add_repo') {
            return (
                <AddRepo changePage={this.changePage.bind(this)} />
            )
        }
        else {
            <div>
                <p> Hi there </p>
            </div>
        }
    }


}

export default MainPage;