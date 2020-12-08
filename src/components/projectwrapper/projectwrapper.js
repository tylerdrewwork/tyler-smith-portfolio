import React from 'react';
import Project from './project';
import { OWLD } from '../../data/projectdata';

function ProjectWrapper () {
    return (
        <section>
            <Project project={OWLD}/>
        </section>
    )
}

export default ProjectWrapper;