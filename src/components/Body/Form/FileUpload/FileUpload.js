import React from 'react'
import './FileUpload.scss'

const FileUpload = ({selectedFile, onFileSelectSuccess, onFileSelectError, focusPoint}) => {

	const handleFileInput = (e) => {
		const file = e.target.files[0];
		if (Math.round(file.size / 1024) > 5120)
			onFileSelectError({ error: "File size cannot exceed more than 5MB" });
		else onFileSelectSuccess(file);
	}
  return (
    <div class="fileinputs">
			<input 
			type="file" 
			required
			className="file" 
			accept="image/jpg, image/jpeg"
			value={selectedFile}
      onChange={(e) => handleFileInput(e)}
			ref={focusPoint} 
			/>			
			<div class="fakefile">
				<button className='upload-btn'>Upload</button>
				<input placeholder="Upload your photo" class="photo" />
			</div>
		</div>
  )
}

export default FileUpload