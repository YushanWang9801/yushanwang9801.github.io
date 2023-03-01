import React from 'react';
import {motion} from 'framer-motion';

import "./../css/Contact.css";
import "./../css/style.css";
import IconSection from "./IconSection.js";

import {useState} from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

function Contact(){
    return (
      <div className='Contact'>
        <IconSection />
        <InfoSection />
      </div>
    );
}

function InfoSection () {
    return (
        <div className="info-section">
            <Form />
            <motion.div className="info-image"> 
            </motion.div>
        </div>
    );
}

function Form (){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const collectionRef = projectFirestore.collection('contact');

    const handleSubmit = (e) => { 
        e.preventDefault();
        const createdAt = timestamp();
        if(name !== "" && email !== "" && message !== "")
            collectionRef.add({
                name: name,
                email: email,
                subject: subject,
                message: message,
                createdAt: createdAt
            }).then (()=> {
                alert("Message has been submitted");
            })
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
    };   
      

    return (
        <form className="form" onSubmit={handleSubmit} 
        action="./mail.php" method="POST">
        <h1>Get in Touch</h1>
        <div className="form-first-row" >
            <div className="form-name">
                <h2>Full Name</h2>
                <input type="text" className="form-control" name="name"
                        id="name" placeholder="Name" 
                        value={name} required 
                        onChange={(event) => {setName(event.target.value)}}/> 
            </div>
            <div className="form-email">
                <h2>Email Address</h2>
                <input type="email" className="form-control" 
                    name="email" id="email" placeholder="Email" 
                    value={email} required 
                    onChange={(event) => {setEmail(event.target.value)}} /> 
            </div>
        </div>
        <div className="form-second-row">    
            <h2>Subject</h2>
            <input type="text" className="form-control" 
                    name="subject" id="subject" placeholder="Subject"
                    value={subject}
                    onChange={(event) => {setSubject(event.target.value)}} /> 
        </div>
        <div className="form-third-row">    
            <h2>Message</h2>
            <textarea className="form-control" name="message" id="message"
                 placeholder="Tell me Anything..." 
                 value={message}
                 onChange={(event) => {setMessage(event.target.value)}}></textarea>
        </div>
        <div className="form-fourth-row">
            <button className="sendButton" type="submit" >
                Send Message</button>    
        </div>
      </form >
    );
}

export default Contact;