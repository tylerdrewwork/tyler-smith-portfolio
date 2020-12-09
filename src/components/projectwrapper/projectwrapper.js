import React from 'react';
import Project from './project';
import { OWLD } from '../../data/projectdata';
import { Container, Row, Col } from 'react-bootstrap';

function ProjectWrapper () {
    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <Project project={OWLD}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProjectWrapper;