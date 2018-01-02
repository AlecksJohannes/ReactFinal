import React, { Component } from 'react';
import Portfolio from './portfolio/Portfolio';
import UploadJD  from './upload_files/UploadJD';
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
        if (this.state.onFilter == true)
          {
          return (<SearchScreen 
            handleSearch = {this.handleSearch}
           />)
          }
        else
          {return (<EnhancedSearchResult/>)}  
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
