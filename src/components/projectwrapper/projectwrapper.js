import React from 'react';
import Project from './project';
import projectdata from '../../data/projectdata';
import { Container, Row, Col } from 'react-bootstrap';
import "./projectwrapper.css";

function ProjectWrapper () {
    return (
        <section>
            <Container>
                <Row>
                    <Col className="project-container">
                        {projectdata.map(p => <Project project={p}/>)}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectWrapper;