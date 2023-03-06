import React from 'react';
import "./../css/Footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faInstagram, faLinkedin }
            from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row copyright">
                <div className="col-md-12">
                    <div className="pull-left">
                        <middle className="block">&copy; 2023 Yushan Wang. All Rights Reserved.</middle>
                    </div>
                    <div className="pull-right">
                        <ul className="footer-icons">
                            <li>
                                <div className="tooltip github"> Github </div>
                                <a href="https://github.com/YushanWang9801"
                                target="_blank" rel="noreferrer" aria-label="Find me on Github">
                                <FontAwesomeIcon className="faicon" icon={faGithub} /></a>
                            </li>

                            <li>
                                <div className="tooltip linkedin">LinkedIn </div>
                                <a href="https://www.linkedin.com/in/yushan1089/"
                                target="_blank" rel="noreferrer" aria-label="Find me on LinkedIn">
                                <FontAwesomeIcon className="faicon" icon={faLinkedin} /></a>
                            </li>

                            <li>
                                <div className="tooltip instagram">Instagram</div>
                                <a href="https://www.instagram.com/yushan9801/?hl=en"
                                target="_blank" rel="noreferrer" aria-label="Find me on Instagram">
                                <FontAwesomeIcon className="faicon" icon={faInstagram} /></a>
                            </li>

                            <li>
                                <div className="tooltip email"> Email Me </div>
                                <a href="mailto:yushanwang0816@gmail.com"
                                target="_blank" rel="noreferrer" aria-label="Contact me via Email">
                                <FontAwesomeIcon className="faicon" icon={faEnvelope} /></a></li>
                            
                            <li>
                                <div className="tooltip medium"> Medium </div>
                                <a href="https://medium.com/@wang33he77"
                                target="_blank" rel="noreferrer" aria-label="Find me on Medium">
                                <FontAwesomeIcon className="faicon" icon={faMedium}  /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
  
export default Footer;
