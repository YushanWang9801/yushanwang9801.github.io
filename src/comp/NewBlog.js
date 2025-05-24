import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "../css/BlogPage.css"
import ResponseSection from "./Blog/ResponseSection"

const BlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/pages/index.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.slug === slug);
        setBlog(found);

        if (found?.path) {
          fetch(found.path)
            .then(res => res.text())
            .then(setContent);
        }
      });
  }, [slug]);

  if (!blog) return <p>Sorry, Blog not found.</p>;

  return (
    <div className="blog-detail">
      <div className="markdown-body">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        />
        <ResponseSection blogId={blog.id} />
      </div>
    </div>
  );
};

export default BlogPage;