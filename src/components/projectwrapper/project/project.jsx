import React from 'react';
// import Card from 'react-bootstrap/Card'
import "./project.scss";

function Project (props) {
    const {title, description, image} = props.project;

    return (
        <div className="project">
            {/* <Card.Img src={image}/> */}
            <div className="project-title">{title}</div>
            <div className="project-description">
                {description}
            </div>
        </div>
    )
}

export default Project;