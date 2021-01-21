import React from 'react';
import ProjectWrapper from '../../components/projectwrapper';
import SectionHeading from '../../components/sectionheading';
import maskSplatter1 from 'images/masks/mask-paint-splatter.png';
import './home.scss';

function Home () {
    return (
        <div id="home-title-container">
            {/* <img className="mask-splatter" src={maskSplatter1} alt="Splatter"></img> */}
            <h1 className="jumbo home-title" id="home-title-first">TYLER</h1>
            <h1 className="jumbo home-title" id="home-title-last">SMITH</h1>
            {/* <SectionHeading>Projects</SectionHeading> */}
            {/* <ProjectWrapper /> */}
        </div>
    )
}

export default Home;