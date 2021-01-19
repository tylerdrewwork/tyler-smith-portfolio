import React from 'react';
import './sectionheading.scss';

function SectionHeading (props) {
    return (
        <h1 className="section-heading">
            <span>{props.children}</span>
            <hr />
        </h1>
    );
}

export default SectionHeading;