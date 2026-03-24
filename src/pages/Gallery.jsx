import React, { useState, useEffect } from 'react';
import { supabase } from '../components/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';

// 样式导入
import "../css/ImageGrid.css";
import "../css/Modal.css";
import { EXCLUDED_TAGS } from "../config/galleryExcludedTags";
const RANDOM_COUNT = 15;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pigeonhole: pick up to RANDOM_COUNT images, ensuring at least 1 per tag when possible */
function selectRandomWithPigeonhole(allImages) {
  const byTag = {};
  for (const img of allImages) {
    const t = img.tag || "Untagged";
    if (!byTag[t]) byTag[t] = [];
    byTag[t].push(img);
  }
  const tags = Object.keys(byTag);
  const result = [];
  const used = new Set();

  // 1. Pick one from each tag (pigeonhole)
  const shuffledTags = shuffle(tags);
  for (const tag of shuffledTags) {
    if (result.length >= RANDOM_COUNT) break;
    const pool = byTag[tag].filter((img) => !used.has(img.id));
    if (pool.length > 0) {
      const pick = pool[Math.floor(Math.random() * pool.length)];
      result.push(pick);
      used.add(pick.id);
    }
  }

  // 2. Fill remaining slots with random picks
  const remaining = allImages.filter((img) => !used.has(img.id));
  const extra = shuffle(remaining).slice(0, RANDOM_COUNT - result.length);
  return shuffle([...result, ...extra]);
}

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [category, setCategory] = useState("Random");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState(["Random"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      // 按 created_at 排序获取所有照片，然后提取 tag，保持排序顺序
      const { data } = await supabase
        .from('photos')
        .select('tag, created_at')
        .order('created_at', { ascending: false });
      
      if (data) {
        const excluded = new Set(EXCLUDED_TAGS);
        const seen = new Set();
        const orderedTags = ["Random"];
        
        for (const item of data) {
          if (item.tag && !excluded.has(item.tag) && !seen.has(item.tag)) {
            seen.add(item.tag);
            orderedTags.push(item.tag);
          }
        }
        setTags(orderedTags);
      }
    };
    fetchTags();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      // 按 created_at 时间戳倒序获取所有图片
      const { data } = await supabase
        .from('photos')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!data) {
        setImages([]);
        setLoading(false);
        return;
      }
      
      const excluded = new Set(EXCLUDED_TAGS);
      let filtered = data.filter((img) => !excluded.has(img.tag));
      
      if (category !== "Random") {
        // 按 tag 筛选后也保持时间排序
        filtered = filtered.filter((img) => img.tag === category);
      } else {
        filtered = selectRandomWithPigeonhole(filtered);
      }
      setImages(filtered);
      setLoading(false);
    };
    fetchImages();
  }, [category]);

  return (
    /**
     * 1. 全局容器：pt-32 提供更多顶部留白，增加高级感
     */
    <div className="bg-background h-screen w-full overflow-hidden pt-32 flex flex-col">
      
      {/* 2. 顶部导航区域 (Mobile) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex-shrink-0">
        <div className="md:hidden flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-2">
          {tags.map((tag) => (
            <button 
              key={tag}
              onClick={() => setCategory(tag)}
              className={`text-[10px] uppercase tracking-[0.25em] whitespace-nowrap transition-all duration-300 ${
                category === tag ? 'text-primary font-bold scale-110' : 'text-secondary/50 hover:text-secondary'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 3. 主交互区域：包含侧边栏和图片库 */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex-1 min-h-0">
        <div className="flex h-full gap-16">
          
          {/* 左侧固定 Filter (Desktop) */}
          <aside className="hidden md:block w-40 flex-shrink-0 h-full pt-2">
            <div className="h-full overflow-y-auto no-scrollbar pr-4 pb-24">
              <nav className="flex flex-col gap-6">
                {tags.map((tag) => (
                  <button 
                    key={tag}
                    onClick={() => setCategory(tag)}
                    className={`text-[10px] uppercase tracking-[0.25em] text-left transition-all duration-300 ${
                      category === tag 
                      ? 'text-primary font-bold border-l-2 border-primary pl-4 scale-105' 
                      : 'text-secondary/40 hover:text-secondary hover:pl-2 pl-4'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* 右侧图片滚动区域 */}
          <main className="flex-1 h-full overflow-y-auto no-scrollbar scroll-smooth">
            {loading ? (
              <div className="py-10 text-[10px] uppercase tracking-[0.5em] text-secondary/20 animate-pulse">
                Synchronizing Archive...
              </div>
            ) : (
              <div className="masonry-grid pb-40 pt-2">
                {images.map((img) => (
                  <motion.div 
                    key={img.id}
                    className="masonry-item mb-10 break-inside-avoid group cursor-zoom-in"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => setSelectedImg(img.url)}
                  >
                    <div className="relative overflow-hidden bg-secondary/5 border border-transparent group-hover:border-secondary/10 transition-colors">
                      <img 
                        src={encodeURI(img.url)} 
                        alt={img.name}
                        className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* 悬停时的标签信息 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                         <span className="text-[8px] text-white/80 tracking-[0.4em] uppercase font-light">
                           {img.tag} // {img.name.split('.')[0]}
                         </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* 图片放大 Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="backdrop fixed inset-0 z-[999] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <motion.img 
              src={selectedImg} 
              className="max-w-full max-h-full object-contain shadow-[0_0_80px_rgba(0,0,0,0.4)]"
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            />
            {/* 关闭提示 */}
            <div className="absolute top-8 right-8 text-secondary/50 text-[10px] uppercase tracking-widest pointer-events-none hidden md:block">
              Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;