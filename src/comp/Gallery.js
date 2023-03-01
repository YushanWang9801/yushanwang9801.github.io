import React from 'react';
import {useState} from 'react';

import Modal from './Galllery/Modal';
import GalleryTitle from './Galllery/GalleryTitle';
import ImageGrid from './Galllery/ImageGrid';
// import UploadForm from './Galllery/UploadForm';

function Gallery(){
    const [selectedImg, setSelectedImg] = useState(null); 
  
    return (
      <div className="Gallery">
        <GalleryTitle />
        {/* <UploadForm /> */}
        <ImageGrid setSelectedImg={setSelectedImg}/>
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
    </div>
    );
  }

export default Gallery;