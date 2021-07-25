/* eslint-disable react/no-unescaped-entities */
import Project from 'components/Project/Project';
import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';
import projectdata from 'data/projectdata';
import React from 'react';

function WebProjects () {
    return (
        <div>
            <h2>
                Web Projects
                <hr/>
            </h2> 

            <p>
                Projects in both Game and Web Development that I'm proud of.
            </p>

            <ProjectsGallery>
                <Project project={projectdata.offYourChest}/>
                <Project project={projectdata.elt}/>
            </ProjectsGallery>
        </div>
    )
}

export default WebProjects;