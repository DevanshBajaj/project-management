import React from 'react';

import classes from './Projectitem.module.css'
import Card from '../UI/Card';

const ProjectItem = (props) => {

    return(
        <Card className={classes.projectItem}>
            <div className={classes.projectItem__description}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <img style={{height:"40%", width:"50%"}} src={props.image} alt="not found" />
            </div>
        </Card>
    )
}

export default ProjectItem;