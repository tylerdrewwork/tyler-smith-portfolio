/* eslint-disable react/display-name */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SectionBrowser from 'components/SectionBrowser/SectionBrowser';
import FeaturedProjects from './Sections/FeaturedProjects';
import AboutMe from './Sections/AboutMe';
import WebProjects from './Sections/WebProjects';

import './PageHome.scss';
import './PageHomeStars.scss';

function Home () {
    return (
        <>
        <div id="stars-container">
            <div id="stars-small"></div>
            <div id="stars-medium"></div>
            <div id="stars-large"></div>
        </div>
        <section>
            <div id="landing-intro">
                <h1>Tyler Smith</h1>
                <p>Another developer</p>
            </div>

            <SectionBrowser sections={sections}/>
        </section>
        </>
    )
}

let sections = [
    {title: "About Me", component: <AboutMe />},
    {title: "Featured Projects", component: <FeaturedProjects />},
    {title: "Web Projects", component: <WebProjects />},
]

export default Home;