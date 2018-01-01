import React, { Component } from 'react';
import Portfolio from './Portfolio';
import UploadJD  from './UploadJD';
import YouTube from './YouTube';
import './App.css';
import Welcome from './welcome/welcome.js'
import SearchScreen from './searchscreen/searchScreen';
import "bulma/css/bulma.css";
import { Container, Box } from 'bloomer';
import SearchResult from './components/SearchResult';
import { withResult } from './components/hoc/CoderschoolAPI';
const EnhancedSearchResult = withResult(SearchResult);

class App extends Component {
  
constructor(props){
  super (props);
  this.state={
    
  }
}
  render() {
    console.log(window.sessionStorage.getItem('key') == null);
    let handleScreen = () => {
      if (window.sessionStorage.getItem('key') == null) {
        return ( <Welcome /> )
      }
      else return (
        <SearchScreen />
      )
    }
    console.log(handleScreen());  
    return (
      <Container>
       
        {handleScreen()}
        {/* <Portfolio />
        <EnhancedSearchResult /> */}
      </Container>
    );
  }
}

export default App;
