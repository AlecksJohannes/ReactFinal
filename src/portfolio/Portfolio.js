import React, { Component } from 'react';
import { Section, Container, Title } from 'bloomer';
import AccordionSection from './AccordionSection';
import PortfolioProfile from './PortfolioProfile';
import PortfolioVideo from './PortfolioVideo';
import PortfolioProject from './PortfolioProject';
import PortfolioEmployment from './PortfolioEmployment';
import PortfolioFeedback from './PortfolioFeedback';

export default class Portfolio extends Component {
    render() {
        const student = this.props.student;
        return (
            <Section>
                <Container>
                    <Title isSize={1}>Student Portfolio</Title>
                    <AccordionSection title="Student Profile" isActive>
                        <PortfolioProfile profile={student.profile}/>
                    </AccordionSection>
                    <AccordionSection title="Introduction Video">
                        <PortfolioVideo intro_video={student.intro_video}/>
                    </AccordionSection>
                    <AccordionSection title="Recent Projects" showCount>
                        <PortfolioProject project={student.projects.proj1}/>
                        <PortfolioProject project={student.projects.proj2}/>
                    </AccordionSection>
                    <AccordionSection title="Current Employment" showCount>
                        <PortfolioEmployment employment={student.employment.emp1}/>
                    </AccordionSection>
                    <AccordionSection title="Feedback" showCount>
                        <PortfolioFeedback feedback={student.feedback.feed1}/>
                        <PortfolioFeedback feedback={student.feedback.feed2}/>
                        <PortfolioFeedback feedback={student.feedback.feed3}/>
                        <PortfolioFeedback feedback={student.feedback.feed4}/>
                    </AccordionSection>
                </Container>
            </Section>
        )
    }
}
