import React, { useState } from "react";
import Spinner from './Spinner.svg';
import classes from "./ProjectForm.module.css";



const ProjectForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredDescription, setEnteredDescription] = useState("");
	const [selectedImage,  setSelectedImage] = useState()
	const [isUploaded, setisUploaded] = useState(false)

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	const descriptionChangeHandler = (event) => {
		setEnteredDescription(event.target.value);
	};

	const imageChangedHandler = (event) => {
		setSelectedImage(event.target.files[0])
	};

	const uploadHandler = () => { 
		setisUploaded(true)
		console.log(selectedImage)
	}

	const ImageThumb = ({ viewImage }) => {
		return <img style={{height:'12rem', width:'12rem'}} src={URL.createObjectURL(viewImage)} alt={viewImage.name} />;
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const projectData = {
			title: enteredTitle,
			description: enteredDescription,
			image: selectedImage.name
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
					<label htmlFor="img" >Upload Image</label>
					<input
						type="file"
						name="img" accept="image/*"
						onChange={imageChangedHandler}
					/>
					{isUploaded == true ? (
						<div>
							<p> file uploaded</p>
							<p>Filename: {selectedImage.name}</p>
							<p>File type: {selectedImage.type}</p>
							<p>File size: {selectedImage.size} bytes</p>
							{selectedImage && <ImageThumb viewImage={selectedImage} />}
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