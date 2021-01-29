import React, { useEffect } from 'react';
import './home.scss';
// Gsap Imports
import { gsap } from "gsap";
import FXText from 'components/FXText';

function Home () {
    function startAnimations () {
        gsap.to(".fxtext__overlay",
            {backgroundPositionX: '100px', repeat: -1, yoyo: true, duration: 15})
        }
        
    // useEffect triggers once on page load, which triggers the animations
    useEffect (() => {
        startAnimations();
    }, []);
    
    return (
        <div id="home-title-container">
            <FXText className="jumbo home-title">
                TYLER
            </FXText>
            {/* <h1 className="jumbo home-title" id="home-title-first"> */}
                {/* <div className="home-title__fx">TYLER</div>     */}
            {/* </h1> */}
            <h1 className="jumbo home-title" id="home-title-last">SMITH</h1>
            {/* <SectionHeading>Projects</SectionHeading> */}
            {/* <ProjectWrapper /> */}
        </div>
    )
}

export default Home;