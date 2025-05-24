import React from "react";

import "../css/AboutPage.css";

function AboutPage() {
    return (
        <div className="AboutPage">
            <AboutSection />
        </div>
    );
}


function AboutSection() {
    return (
        <div>
            <h1>
                <span className="focusing">Written</span> 
                <span className="the">on</span> 
                <span className="heart">Temporary Storage</span>
            </h1>
            <article>
                <cite>
                    Photo by <span className="name">Tianshu Wang</span> | Dungeness, UK, June 23, 2022
                </cite>
                <aside>
					Now that you're on your own, you're free to look as stupid as you like.
                </aside>
                <img src="./DSC_7789.jpg" alt="cover" />
                <main>
                    <p><span className="dropcap">Latest</span> I'm the founder of <span className="name">InjectionOCR</span>, a startup that focuses on digitizing handwritten medical reports and injection prescriptions using OCR (Optical Character Recognition) technology. 
                    Our mission is to enhance the accessibility and efficiency of medical documentation through intelligent automation.</p>
                    <p>
                        The platform aims to assist clinics and pharmacies by converting paper-based medication instructions into structured digital data. 
                        Features include multi-language recognition, structured data extraction, and secure storage for cross-border usage.
                    </p>

                    <p>
                        I hold a Master's degree in Computer Graphics, Vision, and Imaging from University College London (UCL), 
                        and dual Bachelor's degrees in Computer Engineering and Applied Mathematics from the University of California, San Diego.
                    </p>
                </main>
                <main>
                    <h2>About this site</h2>
                    <h3>A digital space for thoughts and updates</h3>
                    <p>
                        This website serves as my personal introduction and project showcase. 
                        I also share updates and development notes from InjectionOCR and occasional thoughts on frontend/backend engineering in the <a className="external-link" href="/#/blog">blog page</a>.
                        I designed and developed the site myself, and I'm fairly happy with its aesthetics and layout.
                    </p>
                </main>
            </article>
        </div>
    );
}


export default AboutPage;