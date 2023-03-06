import "./NewsSection.css";
import useFirestore from '../../hooks/useFirestore';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight }
            from '@fortawesome/free-solid-svg-icons';

// import blogs from "./../Blog/blogs-data.json";
// import projects from "./../Projects/projects.json";

// const getBlogs = [];
// Object.entries(blogs).map(([_, blog]) => (getBlogs.push(blog)));
// const news = getBlogs.slice(0,2);
// const cards = projects.slice(0, 3);

import { pages } from "../../pages/pagesInfo";
const news = pages.slice(0,2);

const NewsSection = () => {

    const {docs} = useFirestore('images', "All");
    const shuffled = docs.sort(() => 0.5 - Math.random());
    const images = shuffled.slice(0,5);

    return (
        <div className="newsSection">
            <div className="wrapper">
                <div className="news-title">
                    <div className = "news-left">
                        <h2><strong>Latest Posts</strong></h2>
                    </div>
                    <div className = "news-right">
                        <TestIcon text={"Discover More Blogs"} link="/#/blog" />
                    </div>
                </div>

                <div className="news">
                    {
                        news.map(blog  => (
                            <figure className="article">
                                <img src={blog.cover} alt="blog-coverimage"/>
                                <figcaption>
                                    <h3 className="blog-title">{blog.name.substring(0, blog.name.length - 3)}</h3>
                                    <p>{blog.short_desc.split('.')[0]}</p>
                                    <div className="link">
                                    <a href={`/#/blog${blog.route}`}>
                                        <span className="click">    
                                            Click to see project 
                                            <FontAwesomeIcon className="faicon" icon={faArrowRight} />
                                        </span>
                                    </a>
                                    </div>
                                </figcaption>
                            </figure>
                        ))
                    }
                </div>


                {/* <div className="news-title">
                    <div className = "news-left">
                        <h2><strong>Featured Projects<span>( 3 )</span></strong></h2>
                    </div>
                    <div className = "news-right">
                        <TestIcon text={"My Recent Projects"} link="/#/project" />
                    </div>
                </div>
                    <div className="cards">
                        {   
                            cards.map(card => (
                        <figure className="card">
                            <img src={card.coverImage} alt="project-coverimage"/>
                            <figcaption>{card.name}</figcaption>
                        </figure>
                            ))
                        }
                    </div> */}

                    <div className="news-title">
                    <div className = "news-left">
                        <h2><strong>My Gallery</strong></h2>
                    </div>
                    <div className = "news-right">
                        <TestIcon text={"See my latest Photos"} link="/#/gallery" />
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
            <a className="animated-arrow" href={link} >
                <span className="the-arrow -left">
                <span className="shaft"></span>
                </span>
                <span className="main">
                <span className="text">
                    {text}
                </span>
                <span className="the-arrow -right">
                    <span className="shaft"></span>
                </span>
                </span>
            </a>
        </div>
    )
}

export default NewsSection;