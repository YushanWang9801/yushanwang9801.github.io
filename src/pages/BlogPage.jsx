import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchPosts } from '../services/supabaseQueries';

// --- 自定义 Markdown 渲染组件 ---
const MarkdownComponents = {
  // 核心修复：将 div 改为 span，避免嵌套在 <p> 中报错
  img: ({ node, ...props }) => (
    <span style={{ 
      margin: '2.5rem 0', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      width: '100%' // 确保 span 撑满父容器
    }}>
      <img
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '2px' }}
        loading="lazy"
        {...props}
      />
    </span>
  ),
  
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <div style={{ margin: '2rem 0', borderRadius: '0.5rem', overflow: 'hidden' }}>
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            fontSize: '13px',
            lineHeight: '1.6',
            backgroundColor: '#1a1a1a'
          }}
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code style={{
        backgroundColor: 'rgba(156,163,175,0.1)',
        padding: '0.125rem 0.25rem',
        borderRadius: '0.25rem',
        fontSize: '0.9em'
      }} {...props}>
        {children}
      </code>
    );
  },

  a: ({ node, ...props }) => (
    <a style={{ textDecoration: 'underline', textUnderlineOffset: '4px', color: 'inherit' }}
       target="_blank" rel="noopener noreferrer" {...props} />
  ),

  p: ({ node, children }) => (
    <p style={{ marginBottom: '1.25rem', lineHeight: '1.7', wordBreak: 'break-word' }}>
      {children}
    </p>
  ),
};

const BlogPage = () => {
  const HEADER_OFFSET_PX = 84;
  const EXTRA_TOP_GAP_PX = 16;
  const TOP_CLEARANCE_PX = HEADER_OFFSET_PX + EXTRA_TOP_GAP_PX;
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchPosts();
        setBlogs(data);
      } catch (error) {
        console.error('Fetch error:', error.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  const decodedSlug = slug ? decodeURIComponent(slug) : null;
  const activeBlog = decodedSlug
    ? blogs.find((blog) => blog.slug === decodedSlug)
    : null;
  const isPostView = Boolean(decodedSlug && activeBlog);

  const getBlogPath = (blog) => {
    if (!blog?.slug) return '/blog';
    return `/blog/${encodeURIComponent(blog.slug)}`;
  };

  const openPost = (blog) => {
    navigate(getBlogPath(blog));
  };

  const backToList = () => {
    navigate('/blog');
  };

  if (loading) {
    return (
      <div
        style={{
          marginTop: `${TOP_CLEARANCE_PX}px`,
          height: `calc(100vh - ${TOP_CLEARANCE_PX}px)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '10px',
          letterSpacing: '0.3em'
        }}
      >
        INITIALIZING DATABASE...
      </div>
    );
  }

  return (
    <>
      <style>{`
        .blog-scroll-container::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .blog-list-item-category,
          .blog-list-item-excerpt {
            display: none !important;
          }
          .blog-list-item-main {
            padding-right: 0 !important;
          }
        }
      `}</style>
      <div
        ref={scrollContainerRef}
        className="blog-scroll-container"
        style={{
          marginTop: `${TOP_CLEARANCE_PX}px`,
          padding: '0 0 2rem',
          scrollPaddingTop: '1rem',
          width: '100%',
          height: `calc(100vh - ${TOP_CLEARANCE_PX}px)`,
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatePresence mode="wait">
            {!isPostView ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ paddingBottom: '4rem' }}
            >
              {/* 列表头部 */}
              <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '0.5rem', fontSize: '11px', opacity: 0.6, display: 'flex' }}>
                <div style={{ width: '120px' }}>Date</div>
                <div style={{ flex: 1 }}>Title</div>
              </div>

              {/* 列表项 */}
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => openPost(blog)}
                  style={{
                    padding: '1.75rem 0',
                    borderBottom: '1px solid #eee',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{ width: '120px', fontSize: '11px', opacity: 0.6 }}>
                    {blog.date}
                  </div>
                  <div className="blog-list-item-main" style={{ flex: 1, paddingRight: '2rem' }}>
                    <h2 style={{ fontSize: '18px', margin: 0, fontWeight: '500' }}>{blog.title}</h2>
                    <p className="blog-list-item-excerpt" style={{ fontSize: '12px', opacity: 0.6, marginTop: '0.5rem', lineHeight: '1.5' }}>{blog.excerpt}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="post"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ paddingBottom: '6rem' }}
            >
              <div
                style={{
                  position: 'sticky',
                  top: 0,
                  zIndex: 5,
                  padding: '0.5rem 0 1.5rem',
                  background: 'var(--color-background, #fff)'
                }}
              >
                <button
                  onClick={backToList}
                  style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '10px',
                    letterSpacing: '0.25em',
                    padding: 0
                  }}
                >
                  ← BACK TO INDEX
                </button>
              </div>

              <article style={{ maxWidth: '720px', margin: '0 auto' }}>
                {activeBlog?.cover_url && (
                  <div style={{ marginBottom: '2.5rem' }}>
                    <img
                      src={activeBlog.cover_url}
                      alt="Cover"
                      style={{ width: '100%', maxHeight: '450px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                  </div>
                )}

                <header style={{ marginBottom: '2.5rem' }}>
                  <div style={{ fontSize: '11px', marginBottom: '0.75rem', opacity: 0.6 }}>
                    {activeBlog?.category || 'POST'} • {activeBlog?.date}
                  </div>
                  <h1 style={{ fontSize: '32px', margin: 0, fontWeight: '600', lineHeight: '1.2' }}>
                    {activeBlog?.title}
                  </h1>
                </header>

                <div className="markdown-container">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkBreaks]}
                    components={MarkdownComponents}
                  >
                    {activeBlog?.content}
                  </ReactMarkdown>
                </div>
              </article>
            </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default BlogPage;