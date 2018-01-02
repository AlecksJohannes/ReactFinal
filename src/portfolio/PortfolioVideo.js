import React, { Component } from 'react';
import YouTube from './YouTube';

export default class PortfolioVideo extends Component {
    render() {
        return (
            <YouTube 
                video={this.props.intro_video.video_url} 
                autoplay="0" 
                rel="0" 
                modest="1"
                width="1000" 
                height="480"
            />
        )
    }
}