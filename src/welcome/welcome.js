import React, { Component } from 'react';
import GoogleLogin from '../components/googleLogin';
import FacebookLogin from '../components/facebookLogin';
import GitHubLogin from '../components/githubLogin';
import bannercoderschool from '../bannercoderschool.jpg';
// import  GitHubLogin  from 'react-github-login';
import "./welcome.css";
import { PostData } from "../service/PostData.js";
import { Redirect } from 'react-router-dom';
import { Columns, Column, Button, Section, Container, Control, CardHeader, CardHeaderTitle, CardImage, Image, CardContent, Card, Input, CardFooter } from 'bloomer';
class Welcome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			redirectToReferrer: false
		}
		this.responseFacebook = this.responseFacebook.bind(this);
		this.responseGithub = this.responseGithub.bind(this);
		this.responseGoogle = this.responseGoogle.bind(this); 
		// this.facebookLogin = this.facebookLogin.bind(this);
	}

	responseFacebook = (response) => {

	}
	responseGoogle () {
		this.props.refresh(this)
	}

	responseGithub (){
		this.props.refresh(this)
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
									<Image src={bannercoderschool} className="searchCoderschoolImage"/>
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
												responseGoogle={this.responseGoogle}
											/>
										</Column>	
										<Column>
											<GitHubLogin
											// clientId="4ea83a6419765ad541ac"
											// clientSecret="0ed6be02055077749f68d1f55b4e0cc37739a646"
											// redirectUri=""
											responseGithub={this.responseGithub}
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
