import React from "react";
import NameCard from "./NameCard";
import "./../../css/Mainpage.css";
 
function AboutSection(){
    return (
        <div className="AboutSection">
            <div className="aboutLeft">
                <NameCard />
            </div>
            <div className="aboutRight">
                <h1>My Latest</h1>
                <p>
                I recently graduated from University College London with Distinction
                in Master of Science, Computer Graphics, Vision and Imaging.
                </p> 
                <p>
                I completed my bachelor degrees at University of California, San Diego with a Double Major in Computer Engineering and Applied Mathematics. 
                </p> 
                <p>
                I worked at IQIYI as a Data Analyst in 2021. 
                I worked at Jiuyang Media as Software Development Engineer intern during summer 2021, 
                and did research with NYU Professor Jean-Claude Franchitti. 
                </p>
            </div>
        </div>
    );
}

export default AboutSection;