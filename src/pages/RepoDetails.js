import React, { Component } from 'react';
import logo from '../images/boostfire.png';
import '../App.css';
import IssueCard from '../components/IssueCard';
import IssueDescription from '../components/IssueDescription';


class AddRepo extends Component {

    constructor(props) {
        super(props)
        //Has props.code = auth token 

        //Save the code to localStorage



    }

    render() {

        var issues = [];
        for (var i = 0; i < 5; i++) {
            issues.push(<IssueDescription />);
        }

        return (
            <div className="App">
                <div className="horiz" style={{ 'justify-content': 'space-between' }}>
                    <p className="title"> Foundry </p>

                    <a className="add-link" href="/main"><p className="btn-text"> Close </p></a>



                </div>


                <p className="spacer"></p>

                <p className="text"> KSUID </p>
                <p className="text sub" style={{ marginTop: 0 }}> A KSUID implementation for python </p>




                <div className="grid-2">
                    {issues}
                </div>
                <p className="spacer"></p>
                <p className="footer-text"> Development & Design: Samuel Resendez </p>
            </div >
        )
    }

}

export default AddRepo;
