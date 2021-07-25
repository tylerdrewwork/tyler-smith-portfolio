import React from 'react';

import "./ProjectsGallery.scss";

function ProjectsGallery (props) {
    return (
        <>
            <div className="project-gallery">
                {props.children}
            </div>
        </>
    );
}

export default ProjectsGallery