import React from 'react';
import HomeAboutSection from './sections/HomeAboutSection';
import HomeProjectsSection from './sections/HomeProjectsSection';
// Components
import SectionBrowser from 'components/SectionBrowser/SectionBrowser';
// CSS
import './PageHome.scss';

function Home () {
    return (
        <>
        <HomeAboutSection/>
        
        <SectionBrowser>
            <HomeProjectsSection/>
        </SectionBrowser>
        </>
    )
}

export default Home;