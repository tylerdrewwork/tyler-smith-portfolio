/* eslint-disable react/no-unescaped-entities */
import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';
import React from 'react';

function FeaturedProjects () {
    return (
        <section>
            <h1>
                Featured Projects
            </h1> 

            <p>
                Projects in both Game and Web Development that I'm proud of.
            </p>

            <ProjectsGallery />
        </section>
    )
}

export default FeaturedProjects;