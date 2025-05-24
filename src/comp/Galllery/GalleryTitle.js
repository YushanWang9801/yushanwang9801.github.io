import React from 'react';
import Typed from "react-typed";
import "./../../css/GalleryTitle.css";

const GalleryTitle = () => {
  return (
    <div className="GalleryTitle">
      <h2>Gallery Playground</h2>
      <div className="animated-typing">
      <Typed
       strings={["Welcome to my Photo Gallery.", 
        "I have no idea what to write next...",]}
        typeSpeed={60}
        backSpeed={25}
        loop />
      </div>
    </div>
  )
}

export default GalleryTitle;