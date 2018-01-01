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
    onFilter: true,
    dataSearch: {}
  }
}
  render() {
    let handleScreen = () => {
      if (window.sessionStorage.getItem('key') == null) {
        return ( <Welcome /> )
      }
      else 
        if (this.props.onFilter)
          return (<SearchScreen 
            dataSearch = {this.state.dataSearch.bind(this)}
            onFilter = {this.state.onFilter.bind(this)}
           />)
        else
          return (<EnhancedSearchResult/>)  
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
