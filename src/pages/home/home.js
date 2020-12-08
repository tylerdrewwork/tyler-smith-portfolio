import React from 'react';
import Header from '../../components/header';
import ProjectWrapper from '../../components/projectwrapper';
import SectionHeading from '../../components/sectionheading';
import styled from 'styled-components';
import { headingNameStyle } from './home-style';

const HeadingName = styled.h1`${headingNameStyle}`;

function Home () {
    return (
        <div>
            <Header page="home"/>
            <HeadingName>TYLER SMITH</HeadingName>
            {/* <SectionHeading>Projects</SectionHeading> */}
            <SectionHeading>Projects</SectionHeading>
            <ProjectWrapper />
        </div>
    )
}

export default Home;