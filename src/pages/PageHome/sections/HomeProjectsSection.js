/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';

function HomeProjectsSection () {
    return (
        <section>
            
            <h1>
                Featured Projects
            </h1> 

            <p>
                Projects in both Game and Web Development that I'm proud of.
            </p>

            <ProjectsGallery/>

        </section>
    )
}

export default HomeProjectsSection;