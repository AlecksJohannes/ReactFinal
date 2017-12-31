import React, { Component } from 'react';
import './Portfolio.css';
import './SkillColor.css';
import profileImg from './profile_pic.png';
import placeholderImg from './profile_pic_placeholder.png';
import projImg1 from './kampu.png';
import { Section, Container, Box, Content, Title, Columns, Column, Label, Progress, Tag } from 'bloomer';
import { Media, MediaLeft, MediaContent, Level, LevelLeft, LevelItem, Image, Icon } from 'bloomer';
import YouTube from './YouTube';
import Student1 from './student1.json';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectCount: 0,
            employmentCount: 0,
            feedbackCount: 0
        };
        this.toogleAccordion = this.toogleAccordion.bind(this);
    }

    toogleAccordion(e) {
        e.target.classList.toggle("active");
        let box = e.target.nextElementSibling;
        if (box.style.maxHeight) {
            box.style.maxHeight = null;
        } else {
            box.style.maxHeight = box.scrollHeight + "px";
        }       
    }

    componentDidMount() {
        let boxArray = document.getElementsByClassName("box");
        this.setState({
            projectCount: boxArray[2].childElementCount,
            employmentCount: boxArray[3].childElementCount,
            feedbackCount: boxArray[4].childElementCount,
        })
    }

    render() {
        this.setState
        return (
            <Section>
                <Container>
                    <Title isSize={1}>Student Portfolio</Title>

                    <Title 
                        isSize={3} 
                        hasTextAlign="left"
                        className="accordion active"

                        onClick={this.toogleAccordion}>
                        Basic Information
                    </Title>
                    <Box style={{maxHeight: 506}}>
                        <Columns isCentered>
                            <Column isSize='1/3'>
                                <img    
                                    src={placeholderImg} 
                                    width="350" 
                                    height="350" 
                                    alt="profile picture" />
                                <Level className="profile-logos">
                                    <LevelItem href='#'>
                                        <i class="fa fa-linkedin-square fa-4x"></i>
                                    </LevelItem>
                                    <LevelItem href='#' >
                                        <i class="fa fa-github-square fa-4x"></i>
                                    </LevelItem>
                                    <LevelItem href='#'>
                                        <i class="fa fa-facebook-square fa-4x"></i>
                                    </LevelItem>    
                                </Level>
                            </Column>
                            <Column isSize='2/3' hasTextAlign="left">
                                <Label isSize="medium">ID: {Student1.id}</Label>
                                <Label isSize="medium">Name: {Student1.full_name}</Label>
                                <Label isSize="medium">Email: {Student1.email}</Label>
                                <Label isSize="medium">Phone: {Student1.phone}</Label>
                                <Label isSize="medium">Classes taken: <a href="">{Student1.class_taken}</a></Label>
                                <Label isSize="medium">Experience: {Student1.experience}</Label>
                                <Label isSize="medium">Location: {Student1.location}</Label>
                                <Label isSize="medium">Language: {Student1.language}</Label>
                                <Label isSize="medium">Skills: {
                                    Student1.skills.map((skill) => {
                                        return <span className={skill}>&nbsp;{skill}&nbsp;</span>
                                    })
                                    }

                                <Tag isColor='warning'>ES6</Tag>
                                HTML5, CSS3, Node, Express, MongoDB, Mongoose, jQuery, Bootstrap, Git/Github, EJS</Label>
                                <Label isSize="medium">Additional skills: {Student1.additional_skill}</Label>
                                <Label isSize="medium">Score: <Progress isColor='primary' value={Student1.score} max={100}/></Label>
                                <progress class="progress is-primary" value={Student1.score} max="100">90%</progress>
                                
                            </Column>
                        </Columns>
                    </Box>
                    
                    <Title 
                        isSize={3} 
                        hasTextAlign="left"
                        className="accordion" 
                        onClick={this.toogleAccordion}>
                        Introduction Video
                    </Title>
                    <Box>
                        <YouTube video="lWYfKyWYUQc" autoplay="0" rel="0" modest="1" width="1000" height="480"/>
                    </Box>

                    <Title 
                        isSize={3} 
                        hasTextAlign="left"
                        className="accordion" 
                        onClick={this.toogleAccordion}>
                        Recent Projects ({this.state.projectCount})
                    </Title>
                    <Box>
                        <Columns isCentered>
                            <Column isSize='1/3'>
                                <img src={projImg1} width="350" alt="project 1" />
                            </Column>
                            <Column isSize='2/3' hasTextAlign="left">
                                <Content>
                                    <h3>Kampu / <a href="">Link to website</a> / <a href="">Link to github</a></h3>
                                    <br/>
                                    <h4>Application developed using MongoDB, Node.js, Mongoose and Express. It allows the user to create a user and post campgrounds to share with other people.</h4>
                                </Content>
                            </Column>
                        </Columns>
                        <Columns isCentered>
                            <Column isSize='1/3'>
                                <img src={projImg1} width="350" alt="project 1" />
                            </Column>
                            <Column isSize='2/3' hasTextAlign="left">
                                <Content>    
                                    <h3>Guess the Color game / <a href="">Link to website</a> / <a href="">Link to github</a></h3>
                                    <br/>
                                    <h4>Simple front-end application developed using JavaScript, jQuery, CSS and HTML.</h4>
                                </Content>    
                            </Column>
                        </Columns>
                    </Box>

                    <Title 
                        isSize={3} 
                        hasTextAlign="left"
                        className="accordion" 
                        onClick={this.toogleAccordion}>
                        Current Employment ({this.state.employmentCount})
                    </Title>
                    <Box>
                        <Content hasTextAlign="left">
                        <h3>Front-end Developer at AwesomeCompany Ltd.</h3>
                        <ul>
                            <li>Fighting zombies and making the world a better place</li>
                            <li>Making new cryptocurrency</li>
                            <li>Running for President in 2020</li>
                        </ul>
                        </Content>
                    </Box>

                    <Title 
                        isSize={3} 
                        hasTextAlign="left"
                        className="accordion" 
                        onClick={this.toogleAccordion}>
                        Feedback ({this.state.feedbackCount})
                    </Title>
                    <Box>
                        <Media>
                            <MediaLeft>
                                <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
                            </MediaLeft>
                            <MediaContent>
                                <Content>
                                    <p>
                                        <strong>John Wick</strong> <small>@JohnWick</small> <small>31m</small>
                                        <br />
                                        People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
                                    </p>
                                </Content>
                                <Level isMobile>
                                    <LevelLeft>
                                        <LevelItem href='#'>
                                            <Icon isSize='small'><span className="fa fa-reply" aria-hidden="true" /></Icon>
                                        </LevelItem>
                                        <LevelItem href='#'>
                                            <Icon isSize='small'><span className="fa fa-retweet" aria-hidden="true" /></Icon>
                                        </LevelItem>
                                        <LevelItem href='#'>
                                            <Icon isSize='small'><span className="fa fa-heart" aria-hidden="true" /></Icon>
                                        </LevelItem>
                                    </LevelLeft>
                                </Level>
                            </MediaContent>
                        </Media>

                        <Media>
                            <MediaLeft>
                                <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
                            </MediaLeft>
                            <MediaContent>
                                <Content>
                                    <p>
                                        <strong>John Wick</strong> <small>@JohnWick</small> <small>31m</small>
                                        <br />
                                        People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
                                    </p>
                                </Content>
                                <Level isMobile>
                                    <LevelLeft>
                                        <LevelItem href='#'>
                                            <Icon isSize='small'><span className="fa fa-reply" aria-hidden="true" /></Icon>
                                        </LevelItem>
                                        <LevelItem href='#'>
                                            <Icon isSize='small'><span className="fa fa-retweet" aria-hidden="true" /></Icon>
                                        </LevelItem>
                                        <LevelItem href='#'>
                                            <Icon isSize='small'><span className="fa fa-heart" aria-hidden="true" /></Icon>
                                        </LevelItem>
                                    </LevelLeft>
                                </Level>
                            </MediaContent>
                        </Media>

                        <Media>
                            <MediaLeft>
                                <Image isSize='64x64' src='https://via.placeholder.com/128x128' />
                            </MediaLeft>
                            <MediaContent>
                                <Content>
                                    <p>
                                        <strong>John Wick</strong> <small>@JohnWick</small> <small>31m</small>
                                        <br />
                                        People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
                                    </p>
                                </Content>
                                <Level isMobile>
                                    <LevelLeft>
                                        <LevelItem href='#'>
                                            <Icon isSize='small'><span className="fa fa-reply" aria-hidden="true" /></Icon>
                                        </LevelItem>
                                        <LevelItem href='#'>
                                            <Icon isSize='small'><span className="fa fa-retweet" aria-hidden="true" /></Icon>
                                        </LevelItem>
                                        <LevelItem href='#'>
                                            <Icon isSize='small'><span className="fa fa-heart" aria-hidden="true" /></Icon>
                                        </LevelItem>
                                    </LevelLeft>
                                </Level>
                            </MediaContent>
                        </Media>
                    </Box>
                    
                </Container>
            </Section>
        )
    }
}
