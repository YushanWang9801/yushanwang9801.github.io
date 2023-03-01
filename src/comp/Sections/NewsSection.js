import React from "react";
import "./NewsSection.css";

import blogs from "./../Blog/blogs-data.json";
import projects from "./../Projects/projects.json";
import useFirestore from '../../hooks/useFirestore';

const getBlogs = [];
Object.entries(blogs).map(([_, blog]) => (getBlogs.push(blog)));
const news = getBlogs.slice(0,2);
const cards = projects.slice(0, 3);

const NewsSection = () => {

    const {docs} = useFirestore('images', "All");
    const shuffled = docs.sort(() => 0.5 - Math.random());
    const images = shuffled.slice(0,5);

    return (
        <div className="newsSection">
            <div class="wrapper">
                <div className="news-title">
                    <div className = "news-left">
                        <h2><strong>Latest Posts</strong></h2>
                    </div>
                    <div className = "news-right">
                        <TestIcon text={"Discover More Blogs"} link="blog" />
                    </div>
                </div>

                <div class="news">
                    {
                        news.map(blog  => (
                            <figure class="article">
                                <img src={blog.coverImage} />
                                <figcaption>
                                    <h3>{blog.name}</h3>
                                    <p>{blog.short_desc.split('.')[0]}</p>
                                </figcaption>
                            </figure>
                        ))
                    }
                </div>


                <div className="news-title">
                    <div className = "news-left">
                        <h2><strong>Featured Projects<span>( 3 )</span></strong></h2>
                    </div>
                    <div className = "news-right">
                        <TestIcon text={"My Recent Projects"} link="project" />
                    </div>
                </div>
                    <div class="cards">
                        {   
                            cards.map(card => (
                        <figure class="card">
                            <img src={card.coverImage} />
                            <figcaption>{card.name}</figcaption>
                        </figure>
                            ))
                        }
                    </div>

                    <div className="news-title">
                    <div className = "news-left">
                        <h2><strong>My Gallery</strong></h2>
                    </div>
                    <div className = "news-right">
                        <TestIcon text={"See my latest Photos"} link="gallery" />
                    </div>
                </div>

                <div className="recent-gallery">
                    <div className="gallerySection">
                        {
                            images.map(image => 
                                <img src={image.url} alt="images" />)  
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


function TestIcon ({link, text}){
    return (
        <div>
            <a class="animated-arrow" href={link} >
                <span class="the-arrow -left">
                <span class="shaft"></span>
                </span>
                <span class="main">
                <span class="text">
                    {text}
                </span>
                <span class="the-arrow -right">
                    <span class="shaft"></span>
                </span>
                </span>
            </a>
        </div>
    )
}

export default NewsSection;