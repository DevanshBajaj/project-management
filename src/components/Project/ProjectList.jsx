import React from 'react';
import ProjectItem from './ProjectItem'
import classes from './ProjectList.module.css'

const ProjectList = (props) => {
    console.log(props.items)

    return (
        <ul className={classes.projectList}>
            {props.items.map((project) => (
                <ProjectItem 
                    key={project.id}
                    title={project.title} 
                    description={project.description}
                    image={project.image}
                />
            ))}
        </ul>
    )
}

export default ProjectList;