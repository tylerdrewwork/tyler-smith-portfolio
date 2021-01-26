import React, { useEffect } from 'react';
import './home.scss';
// Gsap Imports
import { gsap } from "gsap";
import { CSSPlugin, CSSRulePlugin } from "gsap/all"
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);


function Home () {
    function startAnimations () {
        // const paintSpatter = CSSRulePlugin.getRule(".home-title:before");
        // gsap.to(paintSpatter, 
        // { backgroundPositionX: 200, repeat: -1, yoyo: true, })
    }

    // useEffect triggers once on page load, which triggers the animations
    useEffect (() => {
        startAnimations();
    }, []);
    
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