import React from 'react';

function Project (props) {
    return (
        <div className="project">
            <h3 className="project-title">{props.project.title}</h3>
            <img className="project-image" src={props.project.image}></img>
            <div className="project-description">{props.project.description}</div>
        </div>
    )
}

export default Project;