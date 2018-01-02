import React, { Component } from 'react';
import { Media, MediaLeft, MediaContent, Content, Image} from 'bloomer';

export default class PortfolioProject extends Component {
    render() {
        return (
            <Media>
                <MediaLeft>
                    <Image isSize='64x64' src={this.props.feedback.img_url} />
                </MediaLeft>
                <MediaContent>
                    <Content>
                        <p>
                            <strong>{this.props.feedback.name}</strong>
                            <br />
                            {this.props.feedback.comment}
                        </p>
                    </Content>
                </MediaContent>
            </Media>
        )
    }
}