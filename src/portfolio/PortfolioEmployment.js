import React, { Component } from 'react';
import { Content } from 'bloomer';

export default class PortfolioProject extends Component {
    render() {
        const resps = this.props.employment.responsibility.map(resp => <li >{resp}</li>)
        return (
            <Content hasTextAlign="left">
                <h3>{this.props.employment.job_title} at {this.props.employment.company}</h3>
                <ul> {resps} </ul>
            </Content>
        )
    }
}