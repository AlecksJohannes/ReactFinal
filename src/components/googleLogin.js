import React, { Component } from 'react';
import {Button } from 'bloomer';
import querystring from 'query-string';
import axios from 'axios';
class GoogleLogin extends Component{

	googleLogin = () =>{
	};
	fetchDataGoogle(popup){
		if(popup.closed){
			window.location.reload();
		}else {
			try{
				var url_code = querystring.parse((`http://reactfinale.herokuapp.com/auth/google_oauth2`, "cODERSCHOOL", "toolbar=no, scrollbars=no, resizable=no, height=200, width=200"))
			} catch(e){}
			if( url_code && url_code.access_token){
				window.sessionStorage.setItem('key', JSON.stringify(url_code))
				popup.closed
			}
			else setTimeout(this.fetchDataGithub.bind(this, popup), 500)
		}
		this.fetchDataGoogle(window.open(`http://reactfinale.herokuapp.com/auth/google_oauth2`, "cODERSCHOOL", "toolbar=no, scrollbars=no, resizable=no, height=200, width=200"))
	};
	fetchDataGoogle(popup) {
    if(popup.closed) {

    } else {
      try {
        var url_code = querystring.parse(popup.location.search)
      } catch(e) {}
      if (url_code && url_code.access_token) {
        window.sessionStorage.setItem('key', JSON.stringify(url_code))
        this.props.responseGoogle(this)
        popup.close()
      } else {
        setTimeout(this.fetchDataGoogle.bind(this, popup), 0)
      }
    }
  }

	render(){
		return(
	
				<Button isColor='danger' style={{width:100}} onClick = { ()=> this.googleLogin()}>
					Gmail
				</Button>

		)
	}
}

export default GoogleLogin;
