import React, { Component } from 'react';

import '../App.css';
import IssueCard from '../components/IssueCard';



class RepoBrowser extends Component {

    constructor(props) {
        super(props)
        //Has props.code = auth token 

        //Save the code to localStorage
        this.state = {
            elements: []
        }

    }
    componentWillMount() {
        for (var i = 0; i < 3; i++) {
            var elements = this.state.elements;
            elements.push({ href: "/repo_details/13asdf3f", name: "Gust", description: "A partial vega implementation for Rust" });
            elements.push({ href: "/repo_details/13asdf3f", name: "KSUID", description: "K-Sortable UIDs for Python" });
            elements.push({ href: "/repo_details/13asdf3f", name: "Fae", description: "A modern CLI Benchmarking Tool" });
            this.setState({
                elements: elements,
            })
        }
    }

    render() {

        var elements = this.state.elements.map((x) => { return <a href={x.href}><IssueCard name={x.name} description={x.description} /></a> })
        console.log("Elements Length: " + elements[0]);
        return (
            <div className="App">
                <div className="horiz" style={{ 'justify-content': 'space-between' }}>
                    <p className="title"> Foundry </p>

                    <a className="add-link" href="/add_repo"><p className="btn-text"> + Add your Repository </p></a>


                </div>



                <div className="horiz">
                    <a href="https://github.com/Forge-Iron/Foundry"><p className="sub-bar-text"> View on Github </p></a>
                    <a href="https://www.patreon.com/home" ><p className="sub-bar-text"> Support on Patreon </p> </a>
                </div >
                <input className="search" type="text" placeholder="Search for Repository"
                    onChange={(val) => { console.log(val.target.value) }} />

                <div className="grid-1">
                    {elements}
                </div>
                <p className="spacer"></p>
                <p className="footer-text"> Development & Design: Samuel Resendez </p>
            </div >
        )
    }

}

export default RepoBrowser;