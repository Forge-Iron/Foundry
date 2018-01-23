import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './login.js';
import MainPage from './main.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      token: null,
    }
  }

  componentWillMount() {
    //Read the url to determine if we have received a token. 
    //If we have, then we can reach a positive auth state.
    var url = new URL(window.location.href);
    var code = url.searchParams.get("code");
    if (code !== null) {
      localStorage.setItem("token", code);
      this.setState({
        authenticated: true,
        token: code,
      });
    }

  }

  render() {
    if (!this.state.authenticated) {
      return (
        <Login />
      )
    }
    else {
      return (
        <MainPage />
      );
    }
  }
}

export default App;
