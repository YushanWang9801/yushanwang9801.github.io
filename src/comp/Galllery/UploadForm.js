import React from 'react';
import {useState} from 'react';
import ProgressBar from './ProgressBar';
import "./../../css/UploadForm.css";

const UploadFrom = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    //const [docs, setDocs] = useState(null);

    const allowed_types = ["image/jpg", "image/png", "iamge/gif", "image/jpeg"];
    
    const changeHandler = (e) => {
        let selected_file = e.target.files[0];
        if (selected_file && allowed_types.includes(selected_file.type)){
        //&& ! docs.includes(selected_file)){
            setFile(selected_file);
            setError(''); 
        } else {
            setFile(null);
            setError("Please select a file with correct format");
        }
        // } else if (docs.includes(selected_file)){
        //     setFile(null);
        //     setError("Thie file has uploaded before");
        // }
    };

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div className='file'>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};

export default UploadFrom; 