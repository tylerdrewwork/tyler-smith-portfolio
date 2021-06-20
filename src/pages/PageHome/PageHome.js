import React from 'react';
import './PageHome.scss';
import HomeAboutSection from './sections/HomeAboutSection';
import HomeProjectsSection from './sections/HomeProjectsSection';
// Gsap Imports\

function Home () {
    return (
        <>
        <HomeAboutSection/>
        <HomeProjectsSection/>
        </>
    )
}

export default Home;