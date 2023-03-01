import React from "react";

import "../css/AboutPage.css";

function AboutPage() {
    return (
        <div className="AboutPage">
            <AboutSection />
        </div>
    );
}


function AboutSection(){
    return (
	<div>
		<h1>
			<span class="focusing">Brief STORY</span> 
			<span class="the">of</span> 
			<span class="heart">Me, MYSELF & i</span>
		</h1>
        <article>
			<cite> 
				Photo by <span class="name">Tianshu Wang</span> | Dungeness, UK, June 23, 2022
			</cite>
			<aside>
				Besides fancy resume to show off, 
				I deeply like to design cocktail receipes during my free time. 
				My favorite drink has to be <br/>
				<span class="name">Gin and Tonic</span>
			</aside>
			<img src="./DSC_7789.jpg" alt="cover" />
			<main>
				<p><span class="dropcap">Latest</span> My recent paper "Age 
				Prediction from Retinal Fundus Images and Segmented Vessel 
				Images using Deep Learning" is accepted for ARVO 2023.</p>
				<p>
				I am a graduate student in University College London, 
				studying my graduate program in Computer Graphics, Vision and 
				Imaging. I worked as a Research Fellow in Moorfield Eye Hospital 
				during summer 2022. I did my thesis project with Professor Keane 
				Pearse. Later I submit my project to ARVO. My paper is currently 
				under review.</p>
				<p>
				I completed my bachelor degrees at University of California, 
				San Diego with a Double Major in Computer Engineering and 
				Applied Mathematics. I graduated in December, 2020. 
				Then I worked in IQIYI as a Data Analyst for the first half of 2021.
				</p>
				<p>
					I worked at Jiuyang Media as Software Development Engineer 
					intern during summer 2021, and was doing research with NYU 
					Professor Jean-Claude Franchitti. Later I also published my 
					first paper"Real-Time Age Estimation using Convolutional 
					Neural Network" in later 2021.</p>
			</main>
			<main>
				<h2>2023</h2>
				<h3>Janurary - New start in Vancouver</h3>
				<p>Coming up...</p>
				<h2>2022</h2>
				<h3>May - Research Fellowship in Eye Moorfield Hospital</h3>
				<p>I did my resarch and my thesis project with Professor Keane Pearse
					and Siegfried Wagner. My research focused on developing deep
					learning algorithms to extract useful 
					information from Retinal fundus images( Eye Scan Images in 
					Layman term) and Eye Vessel Images.
				</p>
				<h2>2021</h2>
				<h3>September - UCL</h3>
				<p>My gradaute program is Msc in Computer Graphics, Vision and Imaging.
					I graduated with distinction with the following major courses:<br/>
					Computer Graphics, Image Processing, Machine Vision, Machine
					 Learning Visual Computing, Inverse Imaging, Numerical Optimization,
					 Virtual Environment and Robot Vision Navigation.
				</p>
				<h3>June - SWE intern</h3>
				<p>I worked in Jiuyang Media as a Software Engineering Intern. 
					I participated in the development of the Cloud-based Facial 
					Recognition Platform, and developed a classifier model, to 
					achieve facial recognition in extreme conditions. I also 
					developed a program of blurred image processing for the Image
					 Extraction Team.</p>
				<h3>Feburary - Data Analyst</h3>
				<p>I worked in IQIYI as a Data Analyst. I developed python script
					 in Jupyter notebook to allow users to access the intl-mirror,
					  IQIYI’s data warehouse, in order to automatically process 
					  and analyze the daily user data to provide to the website 
					  design team. I used SQL and Excel for analyzing user data 
					  collected from the application pingback, aiming to improve 
					  the current product marketing tactics.</p>
			</main>
        </article>
	</div>
    );
}

export default AboutPage;