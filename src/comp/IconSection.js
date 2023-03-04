import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faInstagram, faLinkedin }
            from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./../css/IconSection.css";

import {motion} from 'framer-motion';

function IconSection() {
    return (
        <motion.div className="icons">
        <a href="https://github.com/yushan1089"
            target="_blank" rel="noreferrer" aria-label="Find me on Github">
            <Layer icon={faGithub} />
            <div className="text"> Github @Yushan1089</div>
         </a>
         <a href="https://www.linkedin.com/in/yushan1089/"
            target="_blank" rel="noreferrer" aria-label="Find me on LinkedIn">
            <Layer icon={faLinkedin} />
            <div className="text"> LinkedIn @Yushan1089 </div>
         </a>
         <a href="https://www.instagram.com/yushan9801/?hl=en"
            target="_blank" rel="noreferrer" aria-label="Find me on Instagram">
            <Layer icon={faInstagram} />
            <div className="text"> Instagram @yushan9801 </div>
         </a>
         <a href="mailto:yushanwang0816@gmail.com"
            target="_blank" rel="noreferrer" aria-label="Contact me via Email">
            <Layer icon={faEnvelope}/>
            <div className="text">Email: yuw688@126.com </div>
         </a>
         <a href="https://medium.com/@wang33he77"
            target="_blank" rel="noreferrer" aria-label="Find me on Medium">
            <Layer icon={faMedium} />
            <div className="text"> Medium @wang33he77 </div>
         </a>
      </motion.div>
    );
}

function Layer({icon}) {
    return (
        <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span className="fab"><FontAwesomeIcon className="faicon" icon={icon} /></span>
        </div>
    );
}

export default IconSection;