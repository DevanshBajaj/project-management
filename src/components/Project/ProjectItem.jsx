import React from 'react';

import classes from './Projectitem.module.css'
import Card from '../UI/Card';

const ProjectItem = (props) => {

    return(
        <Card className={classes.projectItem}>
            <div className={classes.projectItem__Desc}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <p>{props.image}</p>
            </div>
        </Card>
    )
}

export default ProjectItem;