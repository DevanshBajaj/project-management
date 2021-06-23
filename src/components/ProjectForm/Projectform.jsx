import React, { useState } from "react";
import Spinner from './Spinner.svg';
import classes from "./ProjectForm.module.css";

const ProjectForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredDescription, setEnteredDescription] = useState("");
	const [selectedImage,  setSelectedImage] = useState({
		image: '',
		uploading: false
	})

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const descriptionChangeHandler = (event) => {
		setEnteredDescription(event.target.value);
	};

	const imageChangedHandler = (event) => {
		setSelectedImage({image: event.target.files[0]})
	};

	const validateImageHandler = (event) => {
		setEnteredImage.image(event.target.files)
	}

	const uploadHandler = () => { 
		if(selectedImage.image.type === 'image/png' || selectedImage.image.type ===  'image/jpeg' ) {
			setSelectedImage({uploading: true})
		} else {
			setSelectedImage({uploading: false})
		};
	}
	
	const submitHandler = (event) => {
		event.preventDefault();

		const projectData = {
			title: enteredTitle,
			description: enteredDescription,
		};
		
        props.onSaveProjectData(projectData);
		setEnteredTitle("");
		setEnteredDescription("");
		setSelectedImage({
			image: null,
			uploading: false
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={classes.newProject__controls}>
				<div className={classes.newProject__control}>
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className={classes.newProject__control}>
					<label>description</label>
					<input
						type="text"
						value={enteredDescription}
						onChange={descriptionChangeHandler}
					/>
				</div>
				<div className={classes.newProject__control}>
					<label>Upload Image</label>
					<input
						type="file"
						onChange={imageChangedHandler}
					/>
					{selectedImage.uploading == true ? (
						<div>
							<p> file uploaded</p>
						</div>
					) : (
						<p>upload image file</p>
					)}
					<button type="button" onClick={uploadHandler}>upload</button>
				</div>
			</div>
			<div className={classes.newProject__actions}>
				<button type="button" onClick={props.onCancel}>Cancel</button>
				<button type="submit">Add Project</button>
			</div> 
		</form>
	);
};

export default ProjectForm;