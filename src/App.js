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
import { sendMail } from './http/request';

const EnhancedSearchResult = withResult(SearchResult);

class App extends Component {
    
  constructor(props){
    super (props);
    this.state={
      onFilter: true,
      dataSearch: {},
      onLogin: true,
      onFinish: true
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.refresh = this.refresh.bind(this);
    this.onFinishOk = this.onFinishOk.bind(this);
  }
  onFinishOk(){
    console.log("ok roi nha!")
    this.setState({
      onFinish: true
    })
  }
  handleSearch(filter, data){
    console.log('sunny here:', data)
    this.setState({
      onFilter: filter,
      dataSearch: data,
      onLogin: true,
      onFinish: false
      
    })
  }

  refresh(){
    window.location.reload();
  }


  render() {
    let refreshSearchResult = () =>{
      console.log('refresh:', this.state.dataSearch)
      return(
      <EnhancedSearchResult searchOptions={this.state.dataSearch} 
      onFinish = {this.state.onFinish}
      onFinishOk = {this.onFinishOk}
      />)
    } 
    let handleScreen = () => {
      if (window.sessionStorage.getItem('key') == null) {
        return ( <Welcome onLogin={this.state.onLogin} refresh={this.refresh}/> )
      }
      else 
          {
            console.log('will you love me?')
          return (
          <div>
            <SearchScreen 
              handleSearch = {this.handleSearch}
            />
            {refreshSearchResult()}
          </div>)
          }

    }
 
    return (
      <Container>
        {handleScreen()}
      </Container>
    );
  }
}

export default App;
