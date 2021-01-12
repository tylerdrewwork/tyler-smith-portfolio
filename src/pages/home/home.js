import React from 'react';
import Header from '../../components/header';
import ProjectWrapper from '../../components/projectwrapper';
import SectionHeading from '../../components/sectionheading';
// import styled from 'styled-components';
// import { headingNameStyle } from './home-style';

// const HeadingName = styled.h1`${headingNameStyle}`;
// const SectionHeading = styled.h2`${sectionHeadingStyle}`;

function Home () {
    return (
        <div>
            <h1>TYLER SMITH</h1>
            {/* <SectionHeading>Projects</SectionHeading> */}
            <SectionHeading>Projects</SectionHeading>
            <ProjectWrapper />
        </div>
    )
}

export default Home;