// import {useRef} from 'react';
import "./../css/AboutSection.css";
import "./../css/style.css";
// import AboutSection from './Sections/AboutSection';
import CoverSection from './Sections/CoverSection';
import Contact from './Contact';
import NewsSection from './Sections/NewsSection';

function Mainpage() {
    return (
        <div className="Mainpage">
            <CoverSection />
            {/* <AboutSection /> */}
            <NewsSection />
            <Contact />
        </div>
    );
}

export default Mainpage;