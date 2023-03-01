import Blog from './comp/Blog';
import Gallery from './comp/Gallery';
import Project from "./comp/Project";
import Mainpage from "./comp/Mainpage";
import AboutPage from './comp/AboutPage';

import HeaderWang from './comp/HeaderWang';
import Footer from './comp/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  return (
    <div className="App" >
      <HeaderWang switchTheme={switchTheme} theme={theme} />

      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/me" element={<AboutPage />} />
          <Route path="/test" element={<SingleBlog blog={blogs["VR_system"]}/>} />

          {
            Object.entries(blogs).map(([path, blog]) => {
                if(blog.type === "article"){
                  return (
                    <Route path={`/${path}`}
                        element= {<SingleArticle blog={blog} />} />     
                  )
                } else {
                  return (
                    <Route path={`/${path}`}
                        element= {<SingleBlog blog={blog} />} />     
                  )
                }
            })
          }
        </Routes>
      </Router> 




      <Footer />
    </div>
  );
}


export default App;
