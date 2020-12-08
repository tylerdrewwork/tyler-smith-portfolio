import React from 'react';

function Project (props) {
    const {name, description, image} = props.project;
    return (
        <div>
            {name}
            {description}
            {image}
        </div>
    )
}

export default Project;