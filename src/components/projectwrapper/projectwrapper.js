import React from 'react';
import Project from './project';
import { OWLD } from '../../data/projectdata';

function ProjectWrapper () {
    return (
        <Project project={{...OWLD}}/>
    )
}

export default ProjectWrapper;