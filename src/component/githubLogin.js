import React, { Component } from 'react';
import { Button } from 'bloomer';
import querystring from 'query-string';
import axios from 'axios';
const clientID = "4ea83a6419765ad541ac"
const clientSecret = "0ed6be02055077749f68d1f55b4e0cc37739a646"

class GitHubLogin extends Component {

	clientSecret = "0ed6be02055077749f68d1f55b4e0cc37739a646"
	githubLogin = () => {
		// if (!window.sessionStorage.getItem('key'))
		// {
		this.fetchDataGithub()
		// }
		// else
		// {
		// 	alert(" you are login")
		// }
	}

	fetchDataGithub() {
		var a = window.open(`https://github.com/login/oauth/authorize?scope=user:email&client_id=${clientID}`, "cODERSCHOOL", "height=600, width=1000") 
			var url_code = querystring.parse(a.location.search)
			setInterval( () => {
				a.window.close();
			},2000
			)
			if (a.window.closed) {
				var url_code = querystring.parse(a.location.search)
			console.log(url_code)
			if (url_code.code) {
			axios.post("https://github.com/login/oauth/access_token", {
						webSecurity: false,
						client_id: clientID,
						client_secret: clientSecret,
						code: url_code.code,
						headers: {
							'crossDomain': true
						}
				})
				.then(function (res) { return res.json(); })
				.then(function (data) { alert(JSON.stringify(data)) })
		}
	}
	render() {
		return (

			<Button isColor='dark' style={{ width: 100 }} onClick={() => this.githubLogin()}>
				Github
				</Button>

		)
	}
}

export default GitHubLogin;