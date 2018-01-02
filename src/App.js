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
      dataSearch: {},
      onLogin: true
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.refresh = this.refresh.bind(this)
  }

  handleSearch(filter, data){
    this.setState({
      onFilter: filter,
      dataSearch: data,
      onLogin: true,
    })
  }
  refresh(){
    window.location.reload();
  }


  render() {
    console.log( "this.state:", this.state);  
    let handleScreen = () => {
      if (window.sessionStorage.getItem('key') == null) {
        return ( <Welcome onLogin={this.state.onLogin} refresh={this.refresh}/> )
      }
      else 
        if (this.state.onFilter == true) {
          return (<SearchScreen 
            handleSearch = {this.handleSearch}
           />)
          };
        if (this.state.onFilter == false) {
            return (<EnhancedSearchResult searchOptions={this.state.dataSearch} />)
              // (<EnhancedSearchResult
              //   onFilter = {this.state.onFilter}
              //   dataSearch = {this.state.dataSearch}      
              // />)
          }  
    }
    console.log("handlescreen", handleScreen());  
 
    return (
      <Container>
        {handleScreen()}
      </Container>
    );
  }
}

export default App;
