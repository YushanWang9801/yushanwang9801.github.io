import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "../css/BlogPage.css";
import ResponseSection from "./Blog/ResponseSection";
import "highlight.js/styles/github.css";
import "highlight.js/styles/github-dark.css";

const BlogPage = ({ theme }) => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [content, setContent] = useState("");

  // 动态切换代码块主题 - 必须在任何条件返回之前
  useEffect(() => {
    const codeBlocks = document.querySelectorAll("pre code");
    codeBlocks.forEach((block) => {
      if (theme === "dark") {
        block.classList.add("github-dark");
        block.classList.remove("github");
      } else {
        block.classList.add("github");
        block.classList.remove("github-dark");
      }
    });
  }, [theme, content]); // 当主题或内容变化时重新应用样式

  useEffect(() => {
    fetch("/pages/index.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.slug === slug);
        setBlog(found);

        if (found?.path) {
          fetch(found.path)
            .then((res) => res.text())
            .then(setContent);
        }
      });
  }, [slug]);

  // 条件返回必须放在所有Hooks之后
  if (!blog) return <p>Sorry, Blog not found.</p>;

  return (
    <div className="blog-detail">
      <div className="markdown-body">
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            [
              rehypeHighlight,
              {
                ignoreMissing: true,
                languages: {
                  javascript: require("highlight.js/lib/languages/javascript"),
                  python: require("highlight.js/lib/languages/python"),
                  bash: require("highlight.js/lib/languages/bash"),
                  css: require("highlight.js/lib/languages/css"),
                  html: require("highlight.js/lib/languages/xml"),
                  vue: require("highlight.js/lib/languages/xml"),
                },
              },
            ],
          ]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const themeClass = theme === "dark" ? " github-dark" : " github";
              return !inline && match ? (
                <pre className={`${className}${themeClass}`}>
                  <code className={`${className}${themeClass}`} {...props}>
                    {children}
                  </code>
                </pre>
              ) : (
                <code className={`${className}${themeClass}`} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
        <ResponseSection blogId={blog.id} />
      </div>
    </div>
  );
};

export default BlogPage;
