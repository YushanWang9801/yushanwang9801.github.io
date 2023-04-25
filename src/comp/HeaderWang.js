import { useRef } from "react";
import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./../css/HeaderWang.css";

const HeaderWang = ({switchTheme, theme}) => {
    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
    };

    return (
        <div className="HeaderWang">
            <a href="/"><h1>YushanWang9801</h1> </a>   
            <nav className="navbar" ref={navRef}>
                <a href="/#/project" onClick={() => {showNavbar(); setIsOpen(false)}}>Projects</a>
                <a href="/#/blog"    onClick={() => {showNavbar(); setIsOpen(false)}}>Blogs</a>
                <a href="/#/gallery" onClick={() => {showNavbar(); setIsOpen(false)}}>Gallery</a>
                <a href="/#/me" id="Me"
                                     onClick={() => {showNavbar(); setIsOpen(false)}}>Me</a>
            </nav>
            <div className='dark_mode'>
                <input
                    className='switch'
                    checked = {theme === "light"}
                    type='checkbox'
                    id='darkmode-toggle'
                    onChange={switchTheme}
                />
            </div>
            <button
				className="nav-btn"
				onClick={() => {showNavbar(); setIsOpen(!isOpen)}}>
				{isOpen ? <FaTimes /> : <FaBars />}
			</button>
        </div>
    );
}

export default HeaderWang;