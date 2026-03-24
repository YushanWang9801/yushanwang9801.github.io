import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { EXCLUDED_TAGS } from '../config/galleryExcludedTags';

const GalleryPreview = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const { data, error } = await supabase
          .from('photos')
          .select('url, name, tag')
          .order('created_at', { ascending: false })
          .limit(60);

        if (data) {
          const excluded = new Set(EXCLUDED_TAGS);
          const filtered = data.filter((img) => !excluded.has(img.tag));

          // Group by tag, pick one random image per tag
          const tagGroups = {};
          filtered.forEach((img) => {
            if (!tagGroups[img.tag]) {
              tagGroups[img.tag] = [];
            }
            tagGroups[img.tag].push(img);
          });

          // Pick one random image from each tag, then shuffle and take 4
          const onePerTag = Object.values(tagGroups)
            .map((group) => group[Math.floor(Math.random() * group.length)])
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);

          setImages(onePerTag);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPreview();
  }, []);

  // 辅助函数：处理可能引起 400 错误的 URL 字符
  const getSafeUrl = (url) => {
    if (!url) return '';
    // 确保 URL 中的空格和特殊字符被转义，同时处理大写扩展名
    return encodeURI(url);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* Header 部分 - 响应式字号 */}
      <div className="flex justify-between items-end mb-8 md:mb-12 border-b border-secondary/90 pb-4">
        <div className="animate-in">
          <h3 className="text-3xl md:text-5xl font-serif italic text-Secondary tracking-tighter">Snapshot</h3>
        </div>
        <a href="/gallery" className="text-[9px] font-bold uppercase tracking-widest text-Secondary hover:text-amber-600 transition-colors mb-1">
          Explore All →
        </a>
      </div>

      {/* 响应式网格布局：手机 2 列，桌面 4 列 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {loading ? (
          [...Array(4)].map((_, i) => <div key={i} className="aspect-[3/4] bg-white/5 animate-pulse" />)
        ) : (
          images.map((img, i) => (
            <div 
              key={i} 
              className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 shadow-2xl"
            >
              <img 
                src={getSafeUrl(img.url)} 
                alt={img.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300x400?text=Image+Error"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-[8px] text-amber-700 font-bold uppercase tracking-tighter">{img.tag}</span>
                <span className="text-[10px] text-white/80 font-light truncate uppercase">{img.name?.split('.')[0]}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GalleryPreview;