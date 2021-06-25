import React from 'react';
import ProjectItem from './ProjectItem'
import classes from './ProjectList.module.css'

const ProjectList = (props) => {
    return (
        <ul className={classes.projectList}>
            {props.items.map((project) => (
                <ProjectItem 
                    key={project.id}
                    id={project.id}
                    title={project.title} 
                    description={project.description}
                    image={project.image}
                    onDelete={props.onDeleteProject}
                />
            ))}
        </ul>
    )
}

export default ProjectList;