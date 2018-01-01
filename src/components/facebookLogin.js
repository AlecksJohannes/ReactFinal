/*global FB*/
import React, { Component } from 'react';
import {Button } from 'bloomer';
class FacebookLogin extends Component{
 
  componentDidMount(){
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1792468211053117',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.11'
      });
      FB.AppEvents.logPageView();   
    };
    
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  facebookLogin() {
    this.checkLoginState()
  }

  checkLoginState() {
    return new Promise((reponse,reject) => {
      if (!window.sessionStorage.getItem('key')) 
      {
        reponse(FB.login(
          function(reponse){
            this.statusChangeCallback(reponse)
          }.bind(this)
        ))  
      
      }
    })   
  }
  statusChangeCallback(response){
    console.log(response);
    if (response.status=== "connected"){
      this.fetchDataFacebook();
    }
    else if (response.status ==="not_authorized")
    {
      alert ("authorize app error before importing the data");
    }
    else 
      alert( " error during the import data");
  };

  fetchDataFacebook = () => {
    FB.api('/me', {fields: 'email, name'}, function(response) {
      window.sessionStorage.setItem("key", JSON.stringify(response))
      window.location.reload();
    }
    
  )
  }

	render(){
		return(
        <Button isColor='info' style={{width:100}} onClick ={() => this.facebookLogin() 
        }
        >
					Facebook
				</Button>

		)
	}
}

export default FacebookLogin;