import React from 'react';
import Project from './Project/Project';

import "./ProjectsGallery.scss";
import projectdata from 'data/projectdata';

function ProjectsGallery () {

    return (
        <>
        <div className="projects-container">
            <h2 className="projects-headerbar">Game Development</h2>
            {GetProjectsJSX(projectdata.gamedev)}
        </div>
        
        <div className="projects-container">
            <h2 className="projects-headerbar">Web Development</h2>
            {GetProjectsJSX(projectdata.web)}
        </div>
        </>
    );
}

function GetProjectsJSX(projectdata) {
    return projectdata.map(project => {
        return (
            // Return a project component and pass down the project data
            <Project key={project.title} project={project}/>
        )
    });
}

export default ProjectsGallery