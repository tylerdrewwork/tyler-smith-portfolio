import React from 'react';
import './Project.scss';
import projectOutline from '../../images/projects/project_container_svg.svg';

function Project (props) {
    return (
        <div className="project">
            <div className="project-image-wrapper">
                <img className="project-image-outline" src={projectOutline}></img>
                <img className="project-image" src={props.project.image}></img>
            </div>
            <h3 className="project-title">{props.project.title}</h3>
            <div className="project-description">{props.project.description}</div>
        </div>
    )
}

export default Project;