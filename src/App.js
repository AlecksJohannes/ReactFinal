import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import SearchResult from './components/SearchResult';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <SearchResult />
      </div>
    );
  }
}

export default App;
