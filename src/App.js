import Blog from './comp/Blog';
import Gallery from './comp/Gallery';
import Project from "./comp/Project";
import Mainpage from "./comp/Mainpage";
import AboutPage from './comp/AboutPage';

import HeaderWang from './comp/HeaderWang';
import Footer from './comp/Footer';

import {Routes, Route, Navigate } from "react-router-dom";

import {useEffect} from "react";
import useLocalStorage from 'use-local-storage';

import SingleBlog from './comp/Blog/SingleBlog';
import SingleArticle from './comp/Blog/SingleArticle';

import blogs from "./comp/Blog/blogs-data.json";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  //const navigate = useNavigate();

  return (
    <div className="App" >
      <HeaderWang switchTheme={switchTheme} theme={theme} />
        <Routes>
          <Route key="home"     path="/" element={<Mainpage />} />
          <Route key="project"  path="/project" element={<Project />} />
          <Route key="blog"     path="/blog" element={<Blog />} />
          <Route key="gallery"  path="/gallery" element={<Gallery />} />
          <Route key="me"       path="/me" element={<AboutPage />} />
          <Route key="test"     path="/test" element={<SingleBlog blog={blogs["VR_system"]}/>} />
 
          {
            Object.entries(blogs).map(([path, blog]) => {
                if(blog.type === "article"){
                  return (
                    <Route path={`/blog/${blog.url}`} key={`/${path}`}
                        element= {<SingleArticle blog={blog} />} />     
                  )
                } else {
                  return (
                    <Route path={`/blog/${blog.url}`} key={`/${path}`}
                        element= {<SingleBlog blog={blog} />} />     
                  )
                }
            })
          }
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>


      <Footer />
    </div>
  );
}


export default App;
