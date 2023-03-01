import React from "react";
import "../../css/CoverSection.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function CoverSection() {
    return (
        <div className="coversection">
            <div className="leftpage">
                <div className="first-row">
                    <span>Hi, I am</span><span className="name">YUSHAN WANG</span>
                </div>
                <div className="second-row">
                    <div className="title">
                        <a href="/#/me">
                        <span id="title">Software Developer, Researcher, Ametur Writer, Photographer</span>
                        <span >
                        <FontAwesomeIcon className="faicon" icon={faCircleArrowRight} />
                        </span> 
                        </a>
                    </div>
                    <div className="institution">Research Fellow - Eye Moorefield Hospital, CGVI - UCL, <br />
                                    Computer Engineering - UC San Diego</div>
                </div>
            </div>
            <div className="rightpage">
                <div className="circle"></div>
                <div className="sendMessage">
                    <span>Send Message</span>       
                </div>
            </div>
        </div>
    );
}

export default CoverSection;