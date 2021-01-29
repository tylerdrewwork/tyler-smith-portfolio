import React from 'react';
import './home.scss';
// Gsap Imports
import FXText from 'components/FXText';

function Home () {
    
    
    return (
        <div id="home-title-container">
            <FXText className="jumbo home-title">
                TYLER
            </FXText>
            <FXText className="jumbo home-title">
                SMITH
            </FXText>
            {/* <h1 className="jumbo home-title" id="home-title-first"> */}
                {/* <div className="home-title__fx">TYLER</div>     */}
            {/* </h1> */}
            {/* <h1 className="jumbo home-title" id="home-title-last">SMITH</h1> */}
            {/* <SectionHeading>Projects</SectionHeading> */}
            {/* <ProjectWrapper /> */}
        </div>
    )
}

export default Home;