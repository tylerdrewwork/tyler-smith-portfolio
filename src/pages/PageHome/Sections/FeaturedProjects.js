/* eslint-disable react/no-unescaped-entities */
// import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';
import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';
import Project from 'components/Project/Project';
import projectdata from 'data/projectdata';
import React from 'react';

function FeaturedProjects () {
    return (
        <div>
            <h2>
                Featured Projects
                <hr/>
            </h2> 

            <p>
                Projects in both Game and Web Development that I'm proud of.
            </p>

            <ProjectsGallery>
                <Project project={projectdata.offYourChest}/>
                <Project project={projectdata.offYourChest}/>
            </ProjectsGallery>
        </div>
    )
}

export default FeaturedProjects;