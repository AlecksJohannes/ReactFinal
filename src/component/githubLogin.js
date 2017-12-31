import React, { Component } from 'react';
import { Button } from 'bloomer';
import querystring from 'query-string';
import axios from 'axios';

class GitHubLogin extends Component {
	githubLogin = () => {
    this.fetchDataGithub(window.open(`http://localhost:3000/auth/github`, "cODERSCHOOL", "toolbar=no, scrollbars=no, resizable=no, height=200, width=200"))
	}

  fetchDataGithub(popup) {
    if(popup.closed) {
    } else {
      try {
        var url_code = querystring.parse(popup.location.search)
      } catch(e) {}
      if (url_code.access_token) {
        window.sessionStorage.setItem('key', JSON.stringify(url_code))
        popup.close()
      } else {
        setTimeout(this.fetchDataGithub.bind(this, popup), 0)
      }
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
