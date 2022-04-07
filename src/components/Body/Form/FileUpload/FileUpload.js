import React, {useRef} from 'react'
import './FileUpload.scss'

const FileUpload = ({selectedFile, onFileSelectSuccess, onFileSelectError}) => {
	const fileInput = useRef(null)

	const handleFileInput = (e) => {
		const file = e.target.files[0];
		if (file.size > 5120)
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
      onChange={handleFileInput}/>
			<div class="fakefile">
				<button className='upload-btn' onClick={e => fileInput.current && fileInput.current.click()}>Upload</button>
				<input placeholder="Upload your photo" class="photo" />
			</div>
		</div>
  )
}

export default FileUpload