import React from 'react';
import Card from 'react-bootstrap/Card'

function Project (props) {
    const {title, description, image} = props.project;

    return (
        <Card bg="primary">
            <Card.Img src={image}/>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
        </Card>
    )
}

export default Project;