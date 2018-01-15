import React, { Component } from 'react';
import logo from './images/boostfire.png';
import './App.css';



class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authenticated: false,
        }
    }

    render() {
        return (
            <div className="App">

                <p className="title"> Foundry </p>
                <img src={logo} className="logo" />
                <p className="intro title"> Help others help you. </p>
                <p className="paragraph">
                    Foundry was made to make it easier for others to get into contributing to a project. As a project owner, all you need to do is connect your
                    repository, and Foundry will do the rest.
                </p>

                <a href="https://github.com/login/oauth/authorize?client_id=e6b179a6fb2c1fbdea3d" className="login" > Log in with Github </a>
            </div>




        );
    }
}

export default Login;