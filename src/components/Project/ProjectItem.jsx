import React from 'react';

import classes from './Projectitem.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
const ProjectItem = (props) => {

    const deleteProject = () => {
        props.onDelete(props.id);
    }

    return(
        <Card className={classes.projectItem}>
            <li className={classes.projectItem__description} id={props.id}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                {props.image ? (
                    <img style={{height:"40%", width:"50%"}} src={props.image} alt="not found" />
                ) : (
                    <p>No image</p>
                )}
                <Button onClick={deleteProject}>Delete Item</Button>
            </li>
        </Card>
    )
}

export default ProjectItem;