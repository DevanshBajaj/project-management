import React from 'react';
import classes from './ProjectList.module.css'

import ProjectItem from './ProjectItem'

const ProjectList = (props) => {
    console.log(props.items)

    return (
        <ul>
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