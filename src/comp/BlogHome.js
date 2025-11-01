import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/BlogPage.css";

const BlogHome = () => {
  const [blogList, setBlogList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 7;

  useEffect(() => {
    fetch("/pages/index.json")
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogList(sorted);
      });
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogList.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(blogList.length / blogsPerPage);

  // Generate page numbers with ellipsis logic
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // Show up to 9 page numbers
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftBound = Math.max(2, currentPage - 3);
      const rightBound = Math.min(totalPages - 1, currentPage + 3);
      
      pages.push(1);
      
      if (leftBound > 2) {
        pages.push('...');
      }
      
      for (let i = leftBound; i <= rightBound; i++) {
        pages.push(i);
      }
      
      if (rightBound < totalPages - 1) {
        pages.push('...');
      }
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="blog-home">
      <div className="blog-list">
        {currentBlogs.map(blog => (
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
      
      {totalPages > 1 && (
        <nav data-pagination>
          <a 
            href="#prev" 
            onClick={(e) => { e.preventDefault(); paginate(currentPage - 1); }}
            disabled={currentPage === 1}
          >
            <i className="ion-chevron-left"></i>
          </a>
          
          <ul>
            {getPageNumbers().map((page, index) => {
              if (page === '...') {
                return (
                  <li key={`ellipsis-${index}`}>
                    <a href="#more">…</a>
                  </li>
                );
              }
              
              return (
                <li key={page} className={currentPage === page ? 'current' : ''}>
                  <a 
                    href={`#${page}`}
                    onClick={(e) => { e.preventDefault(); paginate(page); }}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
          
          <a 
            href="#next" 
            onClick={(e) => { e.preventDefault(); paginate(currentPage + 1); }}
            disabled={currentPage === totalPages}
          >
            <i className="ion-chevron-right"></i>
          </a>
        </nav>
      )}
    </div>
  );
};

export default BlogHome;