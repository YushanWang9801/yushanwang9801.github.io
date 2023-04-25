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
        setIsOpen(!isOpen);
	};

    return (
        <div className="HeaderWang">
            <a href="/"><h1>YushanWang9801</h1> </a>   
            <nav className="navbar" ref={navRef}>
                <a href="/#/project" onClick={showNavbar}>Projects</a>
                <a href="/#/blog"    onClick={showNavbar}>Blogs</a>
                <a href="/#/gallery" onClick={showNavbar}>Gallery</a>
                <a href="/#/me" id="Me"
                                     onClick={showNavbar}>Me</a>
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
				onClick={showNavbar}>
				{isOpen ? <FaTimes /> : <FaBars />}
			</button>
        </div>
    );
}

export default HeaderWang;