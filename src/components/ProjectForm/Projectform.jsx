import React, { useState } from "react";
import classes from "./ProjectForm.module.css";
import Button from '../UI/Button';

const ProjectForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [titleIsValid, setTitleIsValid] = useState()
	const [enteredDescription, setEnteredDescription] = useState("");
	const [descriptionIsValid, setDescriptionIsValid] = useState();
	const [selectedImage,  setSelectedImage] = useState()
	const [isUploaded, setisUploaded] = useState(false)
	const [formIsValid, setFormIsValid] = useState(false);

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);

		setFormIsValid(
			event.target.value.trim().length > 0 && enteredDescription.trim().length > 149
		);
	};

	const descriptionChangeHandler = (event) => {
		setEnteredDescription(event.target.value);
		setFormIsValid(
			event.target.value.trim().length > 149 && enteredTitle.trim().length > 0
		);
	};

	const validateTitleHandler = () => {
		setTitleIsValid(enteredTitle.trim().length > 0)
	}
	const validateDescription = () => {
		setDescriptionIsValid(enteredDescription.trim().length > 149)
	}

	const imageChangedHandler = (event) => {
		let reader = new FileReader();
    	reader.onload = function(e) {
      		setSelectedImage(e.target.result);
    	};
    	reader.readAsDataURL(event.target.files[0]);
	};


	const uploadHandler = (event) => { 
		setisUploaded(true)
	}

	const submitHandler = (event) => {
		event.preventDefault();

		const projectData = {
			title: enteredTitle,
			description: enteredDescription,
			image: selectedImage
		};

		
        props.onSaveProjectData(projectData);
		setEnteredTitle("");
		setEnteredDescription("");
		setSelectedImage("");
		setisUploaded(false)
	};

	

	return (
		<form onSubmit={submitHandler}>
			
			<div className={classes.newProject__controls}>

				<div className={classes.newProject__control}>
					<div
						className={`${classes.control} ${
							titleIsValid === false ? classes.invalid : ''
						}`}
        			>
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
						onBlur={validateTitleHandler}
					/>
					<p>Title should be more than one character</p>
					</div>
				</div>
				<div className={classes.newProject__control}>
					<div
						className={`${classes.control} ${
							descriptionIsValid === false ? classes.invalid : ''
						}`}
        			>
					<label>Description</label>
					<input
						type="text"
						value={enteredDescription}
						onChange={descriptionChangeHandler}
						onBlur={validateDescription}
					/>
					<p>Description should be more than 150 character</p>
					</div>
				</div>
				<div className={classes.newProject__control}>
					<label htmlFor="img" >Upload Image</label>
					<input id='fileUpload'
						type="file"
						name="img" accept="image/*"
						onChange={imageChangedHandler}
					/>
					{isUploaded == true ? (
						<div>
							<p> file uploaded</p>
							<img style={{height:"250px", width:"280px"}} src={selectedImage} alt=""></img>
						</div>
					) : (
						<p style={{color: '#CD113B', paddingTop: '0.5rem'}}>Please upload an image file</p>
					)}
						<Button type="button" onClick={uploadHandler}>Upload</Button>
				</div>
			</div>

			<div className={classes.newProject__actions}>
				<Button type="button" onClick={props.onCancel}>Cancel</Button>
				<Button type="submit" className={classes.btn} disabled={!formIsValid}>Add Project</Button>
			</div> 
		</form>
	);
};

export default ProjectForm;