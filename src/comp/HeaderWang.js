import React from 'react';
import "./../css/HeaderWang.css";

const HeaderWang = ({switchTheme, theme}) => {
    return (
        <div className="HeaderWang">
            <a href="/"><h1>YushanWang9801</h1> </a>   
            <nav className="navbar">
                <a href="/#/project">Projects</a>
                <a href="/#/blog">Blogs</a>
                <a href="/#/gallery">Gallery</a>
                <a href="/#/me" id="Me">Me</a>
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
        </div>
    );
}

export default HeaderWang;