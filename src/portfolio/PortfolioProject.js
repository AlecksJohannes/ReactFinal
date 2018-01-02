import React, { Component } from 'react';
import { Columns, Column, Content } from 'bloomer';

export default class PortfolioProject extends Component {
    render() {
        return (
            <Columns isCentered>
                <Column isSize='1/3'>
                    <img src={this.props.project.img_url} width="350" alt="project 1" />
                </Column>
                <Column isSize='2/3' hasTextAlign="left">
                    <Content>
                        <h3>
                            <a href={this.props.project.website_url}>
                                {this.props.project.title}
                            </a>
                            &nbsp;&nbsp;-&nbsp;&nbsp;
                            <a href={this.props.project.github_url}>
                                <i className="fa fa-github fa-lg"></i>
                            </a>
                        </h3>
                        <br/>
                        <h4>{this.props.project.summary}</h4>
                    </Content>
                </Column>
            </Columns>
        )
    }
}