import React from 'react';
import { Accordion } from 'react-bootstrap';

import "./ProjectsGallery.scss";

function ProjectsGallery (props) {
    // console.log("children: ", props.children);
    return (
        <>
            <div className="project-gallery">
                {props.children}
            </div>
        </>
    );

    // eslint-disable-next-line no-unused-vars
    function MapProjectsIntoAccordionJSX () {
        for (let i = 0; i < props.children.length; i++) {
            let project = props.children[i];
            return (
                <Accordion.Item eventKey={i}>
                    <Accordion.Header>{project.name}</Accordion.Header>
                    <Accordion.Body>{project.description}</Accordion.Body>
                </Accordion.Item>
            )
        }
    }
}

export default ProjectsGallery;