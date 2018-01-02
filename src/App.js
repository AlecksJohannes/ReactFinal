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
  this.handleSearch = this.handleSearch.bind(this)
}

handleSearch(filter, data){
  this.setState(
    {
      onFilter: filter,
      dataSearch: data
    }
  )
}


  render() {
    let handleScreen = () => {
      if (window.sessionStorage.getItem('key') == null) {
        return ( <Welcome /> )
      }
      else 
        return (
          <div>
            <SearchScreen handleSearch = {this.handleSearch} />
            <EnhancedSearchResult/>
          </div>
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
