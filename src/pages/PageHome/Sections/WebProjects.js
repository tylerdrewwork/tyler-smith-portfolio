/* eslint-disable react/no-unescaped-entities */
import Project from 'components/Project/Project';
import React from 'react';
import projectdata from 'data/projectdata';

function WebProjects () {
    return (
        <div>
            <h2>
                Web Projects
                <hr/>
            </h2> 

            <p>
                Projects in both Game and Web Development that I'm proud of.
            </p>

            <Project project={projectdata.offYourChest}/>
        </div>
    )
}

export default WebProjects;