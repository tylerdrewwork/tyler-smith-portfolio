/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';
import SectionBrowser from 'components/SectionBrowser/SectionBrowser';
import FeaturedProjects from './Sections/FeaturedProjects';
import AboutMe from './Sections/AboutMe';
import './PageHome.scss';
// Gsap Imports\

function Home () {
    return (
        <>
        <section>
            <SectionBrowser sections={sections}/>
        </section>
        </>
    )
}

let sections = [
    {title: "About Me", component: <AboutMe />},
    {title: "Featured Projects", component: <FeaturedProjects />},
]

export default Home;