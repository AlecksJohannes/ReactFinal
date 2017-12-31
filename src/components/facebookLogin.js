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

  facebookLogin = () => {
    this.checkLoginState()

  }

  checkLoginState() {
    console.log("checking login status.......");
    if (!window.sessionStorage.getItem('key')) 
    {
      FB.login(
        function(response){
          this.statusChangeCallback(response)
        }.bind(this)
      );  
    }
    else {
      alert("you are login!")
    }
        
      

  }
  statusChangeCallback(response){
    console.log("we are checking the status changing call back");
    console.log(response);
    if (response.status=== "connected"){
      alert(" you are connected, now you will fetch data");
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
    console.log("haha you are fetching data from facebook");
    FB.api('/me', {fields: 'email, name'}, function(response) {
      window.sessionStorage.setItem("key", JSON.stringify(response))
    }
    
  )
  console.log('hi:' + this.props.scope);
  }

	render(){
		return(
				<Button isColor='info' style={{width:100}} onClick ={() => this.facebookLogin() }
          // scope="public_profile, email"
        >
					Facebook
				</Button>

		)
	}
}

export default FacebookLogin;