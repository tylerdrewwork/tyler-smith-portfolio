import React from 'react';
import './Project.scss';

function Project (props) {
    return (
        <div className="project">
            <img className="project-image" src={props.project.image}></img>
            <h3 className="project-title">{props.project.title}</h3>
            <div className="project-description">{props.project.description}</div>
        </div>
    )
}

export default Project;