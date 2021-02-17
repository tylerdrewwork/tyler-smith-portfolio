import React from 'react';
// import Card from 'react-bootstrap/Card'
import "./project.scss";

function Project (props) {
    const {title, description, image} = props.project;

    return (
        <div className="project">
            {/* project-img needs to be a square image, so it can be scaled down and turned into a circle accordingly */}
            <div className="project-title">{title}</div>
            <div className="project__info">
                <img className="project-img" src={image} alt={title}/>
                <div className="project-description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Project;