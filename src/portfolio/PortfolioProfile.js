import React, { Component } from 'react';
import { Columns, Column, Level, LevelItem, Label, Progress } from 'bloomer';
import './PortfolioProfile.css';
import './SkillColor.css';

export default class PortfolioProfile extends Component {
    render() {
        return (
            <Columns isCentered>
                <Column isSize='1/3'>
                    <img    
                        src={this.props.profile.img_url} 
                        width="350" 
                        height="350" 
                        alt="profile holder" />
                    <Level className="profile-logos">
                        <LevelItem href='#'>
                            <i className="fa fa-linkedin-square fa-4x"></i>
                        </LevelItem>
                        <LevelItem href='#' >
                            <i className="fa fa-github-square fa-4x"></i>
                        </LevelItem>
                        <LevelItem href='#'>
                            <i className="fa fa-facebook-square fa-4x"></i>
                        </LevelItem>    
                    </Level>
                </Column>
                <Column isSize='2/3' hasTextAlign="left">
                    <Label isSize="medium">ID: {this.props.profile.id}</Label>
                    <Label isSize="medium">Name: {this.props.profile.full_name}</Label>
                    <Label isSize="medium">Email: {this.props.profile.email}</Label>
                    <Label isSize="medium">Phone: {this.props.profile.phone}</Label>
                    <Label isSize="medium">Courses taken: {
                        this.props.profile.course_taken.map((course) => {
                            return <span key={course}><a href="">&nbsp;{course}&nbsp;</a></span>
                        })}
                    </Label>
                    <Label isSize="medium">Experience: {this.props.profile.experience}</Label>
                    <Label isSize="medium">Location: {this.props.profile.location}</Label>
                    <Label isSize="medium">Language: {this.props.profile.language.join(", ")}</Label>
                    <Label isSize="medium">Skills: {
                        this.props.profile.skill.map((skill) => {
                            return <span key={skill} className={skill}>&nbsp;{skill}&nbsp;</span>
                        })}
                    </Label>
                    <Label isSize="medium">Additional skills: {this.props.profile.additional_skill.join(", ")}</Label>
                    <Label isSize="medium">Score: <Progress isColor='primary' value={this.props.profile.score} max={100}/></Label>
                    {/* <progress class="progress is-primary" value={this.props.profile.score} max="100">90%</progress> */}
                </Column>
            </Columns>
        )
    }
}



