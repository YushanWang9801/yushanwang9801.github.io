import React from "react";
import NameCard from "./NameCard";
import "./../../css/AboutSection.css";
 
function AboutSection(){
    return (
        <div className="AboutSection">
            <div className="aboutLeft">
                <NameCard />
            </div>
            <div className="aboutRight">
                <p> 
                    Founder of InjectionOCR.<br/>
                    DevOps Engineer at Beijing Supreium Inc.<br/>
                    Msc in CGVI, UCL 2022<br/>
                    Bsc in Computer Engineering, <br/>
                    Bsc in Applied Mathematics, UCSD 2020<br/>
                </p> 
                <p id="optional_paragraph">
                Academic Lecturer at Beijing Vision Overseas Education Ltd.<br/>
                Teachinng Instructor at Yes Education Vancouver.<br/>
                Research Fellow at Eye Moorefield Hospital<br/>
                Data Analyst at IQIYI. <br/>
                SWE Internship at Jiuyang Media.<br/>
                Cloud Computing research with NYU Prof. Jean-Claude Franchitti. <br/>
                </p>
            </div>
        </div>
    );
}

export default AboutSection;