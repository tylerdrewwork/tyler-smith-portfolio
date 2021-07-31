import React from 'react';
import './Project.scss';
import projectOutline from '../../images/projects/project_container_svg.svg';
// import linksvg from '../../images/svg/link.svg';

function Project (props) {
    return (
        <div className="project">
            <div className={"project-image-wrapper " + ShouldBorderImage()}>
                <img className="project-image-outline" src={projectOutline}></img>
                <img className="project-image" src={props.project.image}></img>
            </div>
            <h3 className="project-title">{props.project.title}</h3>
            <div className="project-description">{props.project.description}</div>
            {ShouldProjectLink()}
        </div>
    )

    function ShouldBorderImage () {
        if (props.borderimage) {
            return "border-image";
        }
        else {
            return;
        }
    }

    function ShouldProjectLink () {
        if (props.project.link != "") {
            return <a className="project-link" href={props.project.link}>Click to check it out!</a>;
        } else {
            return;
        }
    }
}

export default Project;