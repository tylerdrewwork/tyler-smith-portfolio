/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SectionBrowser from 'components/SectionBrowser/SectionBrowser';
import Footer from 'components/Footer/Footer';
import AboutMe from './Sections/AboutMe';
import GameProjects from './Sections/GameProjects';
import WebProjects from './Sections/WebProjects';

import './PageHome.scss';
import './PageHomeStars.scss';

function Home () {
    return (
        <>

        <section>
            <div id="landing-intro">
                <h1>Tyler Smith</h1>
                <p>Full Stack MERN & C# Developer</p>
            </div>

            <SectionBrowser sections={sections}/>
        </section>

        <Footer />

        {/* STARFIELD */}
        <div id="stars-container">
            {/* Configure the starfield on PageHomeStars.scss */}
            <div id="stars-small"></div>
            <div id="stars-medium"></div>
            <div id="stars-large"></div>
        </div>
        <div id="earth-container"></div>

        </>
    )
}

let sections = [
    {title: "About Me", component: <AboutMe />},
    {title: "Web Projects", component: <WebProjects />},
    {title: "Unity C# Projects", component: <GameProjects />},
]

export default Home;