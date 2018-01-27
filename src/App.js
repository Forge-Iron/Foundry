import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './pages/login.js';
import MainPage from './pages/main.js';
import AddRepo from './pages/AddRepo.js';
import RepoDetails from './pages/RepoDetails.js';
import RepoSubmit from './pages/repo_submit.js';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/main" component={MainPage} />
          <Route path="/add_repo" component={AddRepo} />
          <Route path="/repo_details/:id" component={RepoDetails} />
          <Route path="/repo_submit/:id" component={RepoSubmit} />
        </div>
      </Router>
    )
  }
}

export default App;
