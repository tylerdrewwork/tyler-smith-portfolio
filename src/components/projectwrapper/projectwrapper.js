import React from 'react';
import Project from './project';
import projectdata from '../../data/projectdata';
// import { Container, Row, Col } from 'react-bootstrap';
import "./projectwrapper.scss";

function ProjectWrapper () {
    return (
        <section>
                    <div id="project-container">
                        {/* Map projectdata for each project! :D */}
                        {projectdata.map(p => <Project project={p}/>)}
                    </div>
        </section>
    )
}

export default ProjectWrapper;