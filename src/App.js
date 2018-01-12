import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './login.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    }
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
