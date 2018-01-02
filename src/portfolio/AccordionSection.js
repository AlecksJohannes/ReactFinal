import React, { Component } from 'react';
import { Title, Box } from 'bloomer';
import './AccordionSection.css';

export default class AccordionSection extends Component {
    toogleAccordion(e) {
        e.target.classList.toggle("active");
        let box = e.target.nextElementSibling;
        if (box.style.maxHeight) {
            box.style.maxHeight = null;
        } else { 
            box.style.maxHeight = box.scrollHeight + 10 + "px"; 
        }       
    }

    render() {
        let className = "accordion";
        let maxHeight;
        if (this.props.isActive) { 
            className += " active";
            maxHeight = 491;
        };

        let body = [];
        let count = 0;
        React.Children.forEach(this.props.children, (child) => {
            body.push(child);
            count++;
        });
        if (this.props.showCount) { count = `(${count})` } 
        else { count = "" }

        return (
            <div>
                <Title isSize={3} hasTextAlign="left" className={className} onClick={this.toogleAccordion}>
                    {this.props.title} {count}
                </Title>
                <Box style={{maxHeight: maxHeight}}>
                    {body}
                </Box>
            </div>
        )
    }
}
