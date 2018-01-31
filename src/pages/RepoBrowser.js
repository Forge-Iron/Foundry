import React, { Component } from 'react';

import '../App.css';
import IssueCard from '../components/IssueCard';



class RepoBrowser extends Component {

    constructor(props) {
        super(props)
        //Has props.code = auth token 

        //Save the code to localStorage
        this.state = {
            elements: [],
            search_term: "",
        }

    }
    componentWillMount() {
        for (var i = 0; i < 3; i++) {
            var elements = this.state.elements;
            elements.push({ href: "/repo_details/13asdf3f", name: "Gust", description: "A partial vega implementation for Rust", color: "#dea584" });
            elements.push({ href: "/repo_details/13asdf3f", name: "KSUID", description: "K-Sortable UIDs for Python", color: "#3572A5" });
            elements.push({ href: "/repo_details/13asdf3f", name: "Fae", description: "A modern CLI Benchmarking Tool", color: "#dea584" });
            this.setState({
                elements: elements,
            })
        }
    }

    render() {

        var elements = this.state.elements
            .filter((y) => { return (y.name.includes(this.state.search_term) | y.description.includes(this.state.search_term)) })
            .map((x) => { return <a href={x.href}><IssueCard name={x.name} color={x.color} description={x.description} /></a> })
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
                    onChange={(val) => {
                        console.log(val.target.value)
                        this.setState({ search_term: val.target.value })
                    }} />

                <div className="grid-1">
                    {elements}
                </div>
                {elements.length === 0 && <p style={{ margin: 100 }} className="text"> Can't find the repository you're looking for?
                Ask the author to add their repo to Foundry! </p>}

                <p className="spacer"></p>
                <p className="footer-text"> Development & Design: Samuel Resendez </p>
            </div >
        )
    }

}

export default RepoBrowser;