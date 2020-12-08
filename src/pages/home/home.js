import React from 'react';
import Header from '../../components/header';
import ProjectWrapper from '../../components/projectwrapper';
import SectionHeading from '../../components/sectionheading';
import styled from 'styled-components';
import { headingNameStyle, sectionHeadingStyle } from './home-style';

const HeadingName = styled.h1`${headingNameStyle}`;
// const SectionHeading = styled.h2`${sectionHeadingStyle}`;

function Home () {
    return (
        <div>
            <Header page="home"/>
            <HeadingName>TYLER SMITH</HeadingName>
            {/* <SectionHeading>Projects</SectionHeading> */}
            <SectionHeading>Wowie</SectionHeading>
            <ProjectWrapper />
        </div>
    )
}

export default Home;