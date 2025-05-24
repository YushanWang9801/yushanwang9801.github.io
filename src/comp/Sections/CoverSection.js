import "../../css/CoverSection.css";
import {Link} from 'react-scroll';

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
                        <span id="title">Software Developer, Part Time Blogger, Photographer</span>
                        <span >
                        <FontAwesomeIcon className="faicon" icon={faCircleArrowRight} />
                        </span> 
                        </a>
                    </div>
                    <div className="institution">Founder of InjectionOCR.<br/>
                    DevOps Engineer at Beijing Supreium Inc.<br/>
                    Msc in Computer Graphics, Vision and Imaging, UCL 2022. <br/>
                    Bsc in Computer Engineering, Applied Mathematics, UCSD 2020</div>
                </div>
            </div>
            <div className="rightpage">
                <div className="circle"></div>
                <div className="sendMessage">
                    <span>
                        <Link  to="contact" spy={true} smooth={true}>
                            Send Message
                        </Link>
                    </span>       
                </div>
            </div>
        </div>
    );
}

export default CoverSection;