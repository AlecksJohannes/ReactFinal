import React, { Component } from 'react';
import profileImg from './profile_pic.png';
import projImg1 from './kampu.png';
import { Section, Container, Box, Content, Title, Columns, Column, Label } from 'bloomer';
import { Media, MediaLeft, MediaContent, Level, LevelLeft, LevelItem, Image, Icon } from 'bloomer';
import YouTube from './YouTube';

export default class Portfolio extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <Title isSize={1}>Student Portfolio</Title>
                    <Title isSize={3} hasTextAlign="left">Basic Information</Title>
                    <Box>
                        <Columns isCentered>
                            <Column isSize='1/3'>
                                <img src={profileImg} width="350" height="350" alt="profile picture" />
                            </Column>
                            <Column isSize='2/3' hasTextAlign="left">
                                <Label isSize="medium">ID: STD001</Label>
                                <Label isSize="medium">Name: Khanh Huynh</Label>
                                <Label isSize="medium">Classes taken: Android, iOS, Rails, React, NodeJS</Label>
                                <Label isSize="medium">Experience: Mid-level</Label>
                                <Label isSize="medium">Location: Ho Chi Minh</Label>
                                <Label isSize="medium">Language: English, Vietnamese</Label>
                                <Label isSize="medium">Skills: Javascript (ES6), HTML5, CSS3, Node, Express, MongoDB, Mongoose, jQuery, Bootstrap, Git/Github, EJS</Label>
                                <Label isSize="medium">Additional skills: Agile, Team Player, Big Data, Mobile, E-commerce, Leadership, Project Management</Label>
                                <Label isSize="medium">Score: 8.0</Label>
                            </Column>
                        </Columns>
                    </Box>
                    
                    <Title isSize={3} hasTextAlign="left">Introduction Video</Title>
                    <Box>
                        <YouTube video="lWYfKyWYUQc" autoplay="0" rel="0" modest="1" width="1000" height="480"/>
                    </Box>

                    <Title isSize={3} hasTextAlign="left">Recent Projects</Title>
                    <Box>
                        <Content>
                            <Columns isCentered>
                                <Column isSize='1/3'>
                                    <img src={projImg1} width="350" alt="project 1" />
                                </Column>
                                <Column isSize='2/3' hasTextAlign="left">
                                    <h3>Kampu / <a href="">Link to website</a> / <a href="">Link to github</a></h3>
                                    <br/>
                                    <h4>Application developed using MongoDB, Node.js, Mongoose and Express. It allows the user to create a user and post campgrounds to share with other people.</h4>
                                </Column>
                            </Columns>
                            <Columns isCentered>
                                <Column isSize='1/3'>
                                    <img src={projImg1} width="350" alt="project 1" />
                                </Column>
                                <Column isSize='2/3' hasTextAlign="left">
                                    <h3>Guess the Color game / <a href="">Link to website</a> / <a href="">Link to github</a></h3>
                                    <br/>
                                    <h4>Simple front-end application developed using JavaScript, jQuery, CSS and HTML.</h4>
                                </Column>
                            </Columns>
                        </Content>    
                    </Box>

                    <Title isSize={3} hasTextAlign="left">Current Employment</Title>
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

                    <Title isSize={3} hasTextAlign="left">Feedback</Title>
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
                    </Box>
                    
                </Container>
            </Section>
        )
    }
}
