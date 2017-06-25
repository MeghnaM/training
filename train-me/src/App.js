import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Kevin Gordon Training</h2>
        </div>
        <p className="App-Body">
          What am I going to look like?
        </p>
      </div>
    );
  }
}

export default App;
