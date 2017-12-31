import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import Portfolio from './Portfolio';
import UploadJD  from './UploadJD';
import YouTube from './YouTube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Portfolio />
      </div>
    );
  }
}

export default App;
