import React, { Component } from 'react';
import {Button } from 'bloomer';
import querystring from 'query-string';
import axios from 'axios';
class GoogleLogin extends Component{

	googleLogin = () =>{

	};
	fetchDataGoogle(popup){
		if(popup.closed){

		}else {
			try{
				var url_code = querystring.parse((`http://localhost:3000/auth/google_oauth2`, "cODERSCHOOL", "toolbar=no, scrollbars=no, resizable=no, height=200, width=200"))
			} catch(e){}
			if( url_code && url_code.access_token){
				window.sessionStorage.setItem('key', JSON.stringify(url_code))
				popup.closed
			}
			else setTimeout(this.fetchDataGithub.bind(this, popup), 500)
		}
	};
	render(){
		return(
	
				<Button isColor='danger' style={{width:100}} onClick = { ()=> this.googleLogin()}>
					Gmail
				</Button>

		)
	}
}

export default GoogleLogin;