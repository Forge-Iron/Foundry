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

    componentWillMount() {
        fetch("https://github.com/login/oauth/authorize?client_id=e6b179a6fb2c1fbdea3d")
            .then((response) => {
                console.log(response);
            })
    }

    render() {
        return (
            <div className="App">

                <p className="title"> Foundry </p>
                <img src={logo} className="logo" />
                <p className="intro title"> Open Source, Simplified. </p>
                <p className="paragraph">
                    Foundry was made to make it easier for others to get into contributing to a project. As a project owner, all you need to do is connect your
                    repository, and Foundry will do the rest.
                </p>

                <a href="#" className="login" > Log in with Github </a>
            </div>




        );
    }
}

export default Login;