import React, { Component } from 'react'

export default class YouTube extends Component {
    render() {
        let videoSrc = `https://www.youtube.com/embed/${this.props.video}?autoplay=${this.props.autoplay}&rel=${this.props.rel}&modestbranding=${this.props.modest}`;
        return (
            <div className="container">
                <iframe className="player" title="YouTube Player" type="text/html" width={this.props.width} height={this.props.height} src={videoSrc} frameBorder="0" />
            </div>
        )
    }
}