import React from 'react';
import Project from './Project/Project';

import "./ProjectsGallery.scss";

function ProjectsGallery (props) {
    return (
        <>
            <div className="projects-container">
                <h2 className="projects-headerbar">{props.name}</h2>
                {GetProjectsJSX(props.project)}
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