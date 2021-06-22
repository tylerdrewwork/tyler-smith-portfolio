/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from 'react';
import HomeAboutSection from './sections/HomeAboutSection';
import projectdata from 'data/projectdata';
// Components
import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';
import SectionBrowser from 'components/SectionBrowser/SectionBrowser';
// CSS
import './PageHome.scss';

function Home () {

    // Sections to send to the SectionBrowser
    let sections = {
        gamedev: {
            name: "Game Development",
            component: function() {
                return <ProjectsGallery name={this.name} project={projectdata.gamedev}/>
            },
        },
        web: {
            name: "Web Development",
            component: function() {
                return <ProjectsGallery name={this.name} project={projectdata.web}/>
            },
        },
    }

    // JSX for page
    return (
        <>
        <HomeAboutSection/>
        <SectionBrowser sections={sections}/>
        </>
    )
}

export default Home;