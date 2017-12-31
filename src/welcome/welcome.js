import React, { Component } from 'react';
import GoogleLogin from '../components/googleLogin';
import FacebookLogin from '../components/facebookLogin';
import GitHubLogin from '../components/githubLogin';
import bannercoderschool from '../bannercoderschool.jpg';
// import  GitHubLogin  from 'react-github-login';
import "./welcome.css";
import { PostData } from "../service/PostData.js";
import { Redirect } from 'react-router-dom';
import { Columns, Column, Button, Section, Container, Control, CardHeader, CardHeaderTitle,   CardImage, Image, CardContent, Card, Input, CardFooter } from 'bloomer';
class Welcome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			redirectToReferrer: false
		}
		this.signup = this.signup.bind(this);
		this.responseFacebook = this.responseFacebook.bind(this);
		this.responseGithub = this.responseGithub.bind(this);
		this.responseGoogle = this.responseGoogle.bind(this); 
		// this.facebookLogin = this.facebookLogin.bind(this);
	}

	signup(res, type) {
		let postData;
		if (type === 'facebook' && res.email) {
			postData = {
				name: res.name,
				provider: type,
				email: res.email,
				provider_id: res.id,
				token: res.accessToken,
				provider_pic: res.provider_pic
			}
		}
		if (type === 'google' && res.w3.U3) {
			postData = {
				name: res.w3.ig,
				provider: type,
				email: res.w3.U3,
				provider_id: res.El,
				token: res.Zi.access_token,
				provider_pic: res.w3.Paa
			}
		}

		PostData('signup', this.state).then((result) => {
			let responseJson = result;
			if (responseJson.userData) {
				sessionStorage.setItem('userData', JSON.stringify(responseJson));
				this.setState({ redirectToReferrer: true });
			}
		})
	}


	responseFacebook = (response) => {
		console.log("response for facebook")
		console.log(response);
		this.signup(response, 'facebook')
	}
	responseGoogle = response => {
		console.log(response);
		this.signup(response, 'google')
	}

	responseGithub = response => {
		console.log(response);
		console.error(response);
		// this.signup(response, 'github')
	}
	render() {
		if (this.state.redirectToReferrer) {
			return <Redirect to={'http://localhost:3000/'} />
		}
		
		return (
			<div>
				<Section isSize='small' isBold>
					<Container>
						<Columns isCentered >
							<Card style={{ width: 400 }}>
								<CardImage style={{ margin: 10 }}>
									<Image src={bannercoderschool} />
								</CardImage>
								<CardHeader>
									<CardHeaderTitle hasTextAlign='centered' style={{ display: 'block', color: '#e60000' }} >
										RECRUITING FLATFORM
									</CardHeaderTitle>
								</CardHeader>
								<CardContent>
									<Control>
										<Input placeholder='Your email' />
										<Input placeholder='Your password' style={{ marginTop: 30 }} />
										<div style={{ width: '100%', height: 40, marginTop: 5 }}>
											<a style={{ marginTop: 50, marginLeft: 120 }}> Create a new account? </a>
										</div>
										<Button isPrimary isSize="medium" isFullWidth isColor="info" >
											Login
										</Button>
									</Control>
								</CardContent>
								<CardFooter style={{ display: 'block'}}>
									<Columns isCentered>
										<Column>
											<GoogleLogin
												// clientId="183626327916-tdd38ls5t4majitojs2uk71otigknj36.apps.googleusercontent.com"
												// buttonText="Login"
												// onSuccess={responseGoogle}
												// onFailure={responseGoogle}
											/>
										</Column>	
										<Column>
											<GitHubLogin
											// clientId="4ea83a6419765ad541ac"
											// clientSecret="0ed6be02055077749f68d1f55b4e0cc37739a646"
											// redirectUri=""
											// onSuccess={responseGithub}
											// onFailure={responseGithub}
											/>
										</Column>	
										<Column>
											<FacebookLogin
												// appId="1792468211053117"
												// autoLoad={true}
												// field="name, email, picture"
												responseFacebook = {this.responseFacebook}
												// callback={responseFacebook}
											/>
										</Column>	
									</Columns>
								</CardFooter>
							</Card>
						</Columns>
					</Container>
				</Section>
			</div>
		)
	}
}

export default Welcome;
