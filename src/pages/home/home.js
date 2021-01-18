import React from 'react';
import ProjectWrapper from '../../components/projectwrapper';
import SectionHeading from '../../components/sectionheading';
import './home.scss';

function Home () {
    return (
        <div>
            <h1 className='jumbo'>TYLER SMITH</h1>
            {/* <SectionHeading>Projects</SectionHeading> */}
            <SectionHeading>Projects</SectionHeading>
            <ProjectWrapper />
        </div>
    )
}

export default Home;