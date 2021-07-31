/* eslint-disable react/no-unescaped-entities */
// import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';
import ProjectsGallery from 'components/ProjectsGallery/ProjectsGallery';
import Project from 'components/Project/Project';
import projectdata from 'data/projectdata';
import React from 'react';

function GameProjects () {
    return (
        <div>
            <h2>
                Unity C# Projects
                <hr/>
            </h2> 

            <p>
                Projects in both Unity C# Game Development that I'm proud of!! These are in chronological order.
            </p>

            <ProjectsGallery>
                <Project borderimage project={projectdata.pbab}/>
                <Project borderimage project={projectdata.backflipMaster}/>
                <Project borderimage project={projectdata.meat}/>
            </ProjectsGallery>
        </div>
    )
}

export default GameProjects;