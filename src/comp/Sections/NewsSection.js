import React, { useEffect, useState } from "react";
import "./NewsSection.css";
import useFirestore from '../../hooks/useFirestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NewsSection = () => {
  const [news, setNews] = useState([]);

  const { docs } = useFirestore('images', "All");
  const shuffled = docs.sort(() => 0.5 - Math.random());
  const images = shuffled.slice(0, 5);

  useEffect(() => {
    fetch("/pages/index.json")
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNews(sorted.slice(0, 2));
      });
  }, []);

  return (
    <div className="newsSection">
      <div className="wrapper">
        <div className="news-title">
          <div className="news-left">
            <h2><strong>Latest Posts</strong></h2>
          </div>
          <div className="news-right">
            <TestIcon text={"Discover More Blogs"} link="/#/blog" />
          </div>
        </div>

        <div className="news">
          {
            news.map(blog => (
              <figure className="article" key={blog.slug}>
                <img src={blog.cover} alt="blog-coverimage" />
                <figcaption>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p>{blog.short_desc?.split('.')[0]}</p>
                  <div className="link">
                    <a href={`/#/blog/${blog.route}`}>
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

        <div className="news-title">
          <div className="news-left">
            <h2><strong>My Gallery</strong></h2>
          </div>
          <div className="news-right">
            <TestIcon text={"See my latest Photos"} link="/#/gallery" />
          </div>
        </div>

        <div className="recent-gallery">
          <div className="gallerySection">
            {
              images.map((image, idx) => (
                <img key={idx} src={image.url} alt="gallery" />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

function TestIcon({ link, text }) {
  return (
    <div>
      <a className="animated-arrow" href={link}>
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
  );
}

export default NewsSection;
