import React, { Component } from 'react';
import logo from './logo.svg';
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
                <p className="title"> Forge </p>
                <p className="intro title"> Simplifying open source, through open source </p>
            </div>




        );
    }
}

export default Login;