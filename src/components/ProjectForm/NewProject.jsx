import React, { useState } from 'react';

import classes from './NewProject.module.css';

import ProjectForm from './Projectform';


const NewProject = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveProjectDataHandler = (enteredProjectData) => {
        const projectData = {
            ...enteredProjectData,
            id: Math.random().toString()
        };
        props.onAddProject(projectData);
        setIsEditing(false);
    };

    const startEditing = () => {
        setIsEditing(true);
    }

    const stopEditing = () => {
        setIsEditing(false);
    }
    return (
        <div className={classes.newProject}>
            { !isEditing && <button onClick={startEditing} >Add Project</button> }
            { isEditing && <ProjectForm onSaveProjectData={saveProjectDataHandler} onCancel = {stopEditing}/>}
        </div>
    );
};

export default NewProject;