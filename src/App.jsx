import { Routes, Route } from "react-router-dom";
import HeaderWang from './components/HeaderWang';
import Mainpage from './pages/Mainpage';
import Gallery from './pages/Gallery';
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
import F1InSchoolsPage from './pages/F1InSchoolsPage';
import BrickRiddlePage from './pages/BrickRiddlePage';
import MaydayConcertPage from './pages/MaydayConcertPage';
import RB6Page from './pages/RB6Page';
import LogViewerPage from './pages/LogViewerPage';
import MarioPage from './pages/MarioPage';
import VirtualKeyboardPage from './pages/VirtualKeyboardPage';
import AI2048Page from './pages/AI2048Page';
import FrenchFlashcardPage from './pages/FrenchFlashcardPage';
import TeachingPage from './pages/TeachingPage';
import CafeAtWorldsEndPage from './pages/CafeAtWorldsEndPage';
import MePage from './pages/MePage';

function App() {
  return (
    /* 1. 移除外层的 snap-y，防止全局滚动锁定。
       2. 确保最外层容器是全屏高度且禁止溢出，
          让各页面组件内部自己决定如何处理滚动。
    */
    <div className="h-screen w-full overflow-hidden bg-background text-secondary transition-colors duration-300 flex flex-col">
      
      {/* Header 固定在最上方 */}
      <div className="fixed top-0 left-0 w-full z-[100]">
         <HeaderWang />
      </div>

      <main className="flex-1 h-full w-full">
        <Routes>
          {/* Mainpage 内部需要自己实现 snap 逻辑，或者在跳转时动态修改 Body 样式 */}
          <Route path="/" element={<Mainpage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/project/F1InSchools" element={<F1InSchoolsPage />} />
          <Route path="/project/BrickRiddle" element={<BrickRiddlePage />} />
          <Route path="/project/MaydayConcert" element={<MaydayConcertPage />} />
          <Route path="/project/RB6" element={<RB6Page />} />
          <Route path="/project/LogViewer" element={<LogViewerPage />} />
          <Route path="/project/Mario" element={<MarioPage />} />
          <Route path="/project/VirtualKeyboard" element={<VirtualKeyboardPage />} />
          <Route path="/project/AI2048" element={<AI2048Page />} />
          <Route path="/project/FrenchFlashcard" element={<FrenchFlashcardPage />} />
          <Route path="/project/CafeAtWorldsEnd" element={<CafeAtWorldsEndPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/me" element={<MePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;