/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';
import SectionBrowser from 'components/SectionBrowser/SectionBrowser';
import FeaturedProjects from './Sections/FeaturedProjects';
import AboutMe from './Sections/AboutMe';
import './PageHome.scss';
import WebProjects from './Sections/WebProjects';
// Gsap Imports\

function Home () {
    return (
        <>
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