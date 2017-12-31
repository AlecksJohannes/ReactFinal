import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome/welcome.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CoderSchool</h1>
        </header>
        <p className="App-intro">
          <Welcome/>
        </p>
      </div>
    );
  }
}

export default App;
