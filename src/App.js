import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './welcome/welcome.js'
import "bulma/css/bulma.css";
import { Container, Box } from 'bloomer';
import SearchResult from './components/SearchResult';
import { withResult } from './components/hoc/CoderschoolAPI';
const EnhancedSearchResult = withResult(SearchResult);

class App extends Component {
  render() {
    return (
      <Container>
        <Welcome />
        <EnhancedSearchResult />
      </Container>
    );
  }
}

export default App;
