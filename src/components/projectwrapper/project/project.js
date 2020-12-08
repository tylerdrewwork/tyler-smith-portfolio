import React from 'react';

function Project (props) {
    const {name, description, image} = props.project;
    console.log("name: ", name);

    return (
        <div>
            {name}
            {description}
            {image}
        </div>
    )
}

export default Project;