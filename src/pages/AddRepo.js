import React, { Component } from 'react';

import '../App.css';
import IssueCard from '../components/IssueCard';



class AddRepo extends Component {

    constructor(props) {
        super(props)
        //Has props.code = auth token 

        //Save the code to localStorage



    }
    componentWillMount() {
        var url = "https://api.github.com/user/repos?client_id=e6b179a6fb2c1fbdea3d&access_token=" + localStorage.getItem('token');
        console.log(url);
        fetch(url).then((response) => {
            response.json()
                .then((data) => {
                    console.log(data);
                })
        })
    }

    render() {
        var elements = [];
        for (var i = 0; i < 3; i++) {
            elements.push(<a href="/repo_submit/a12sf2"><IssueCard changePage={this.props.changePage} link="Hi" name="Gust" description="A charting library for rust" /></a>);
            elements.push(<a href="/repo_submit/a12sf2"><IssueCard changePage={this.props.changePage} link="Hi" name="KSUID" description="A KSUID implementation for python" /></a>);
            elements.push(<a href="/repo_submit/a12sf2"><IssueCard changePage={this.props.changePage} link="Hi" name="Globe" description="A new way to interact with maps" /></a>);
        }
        return (
            <div className="App">
                <div className="horiz" style={{ 'justify-content': 'space-between' }}>
                    <p className="title"> Foundry </p>

                    <a className="add-link" href="/main"><p className="btn-text"> Close </p></a>



                </div>


                <p className="spacer"></p>

                <p className="text"> Your Repositories </p>


                <div className="grid-container">
                    {elements}
                </div>
                <p className="spacer"></p>
                <p className="footer-text"> Development & Design: Samuel Resendez </p>
            </div >
        )
    }

}

export default AddRepo;