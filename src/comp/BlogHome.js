import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/BlogPage.css";

const BlogHome = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    fetch("/pages/index.json")
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogList(sorted);
      });
  }, []);

  return (
    <div className="blog-home">
      <div className="blog-list">
        {blogList.map(blog => (
          <div key={blog.slug} className="blog-card">
            <Link to={`/blog/${blog.slug}`} className="blog-link">
              <div className="blog-card-layout">
                <img src={blog.cover} alt={blog.title} className="blog-cover" />
                <div className="blog-content">
                  <h2 className="blog-title">{blog.title}</h2>
                  <p className="blog-date">{blog.date}</p>
                  <p className="blog-desc">{blog.short_desc?.split('.')[0]}.</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHome;
