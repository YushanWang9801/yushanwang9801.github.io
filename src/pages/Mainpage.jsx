import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Mainpage.css";
import { experienceData } from '../components/Experience.js';
import GalleryPreview from '../components/GalleryPreview';

const Mainpage = () => {
  const [activeTab, setActiveTab] = useState('work');
  const [projectIndex, setProjectIndex] = useState(0);

  const displayWork = experienceData.work.items;
  const displayProject = experienceData.project.slice(0, 5);
  const displayEducation = experienceData.education.items;
  
  // Sort teaching by most recent and show only the latest items
  const sortedTeaching = [...experienceData.teaching].sort((a, b) => {
    const getDate = (timeSpan) => {
      const match = timeSpan.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s*\d{4}/);
      if (match) {
        const dateStr = match[0];
        return new Date(dateStr);
      }
      return new Date(0);
    };
    return getDate(b.timeSpan) - getDate(a.timeSpan);
  }).slice(0, 6);

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-background hide-scrollbar">

      {/* 1. Hero Section */}
      <section className="relative snap-start flex items-end">
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src="/asset-images/mainpage-background.jpg"
            className="w-full h-full object-cover opacity-80"
            alt="bg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 sm:px-12 pb-24 md:pb-32">
          <h1 className="hero-title text-[13vw] md:text-[8rem] font-bold tracking-tighter uppercase text-primary animate-name-up -ml-1 md:-ml-5 leading-[0.85]">
            Yushan <br className="hidden md:block" /> WANG
          </h1>
        </div>
      </section>

      {/* 2. Experience Section - 修复垂直居中与避让 */}
      <section className="relative snap-start bg-background flex flex-col experience-section">
        <div className="section-content-wrapper max-w-[1200px] mx-auto w-full px-8 sm:px-12">

          {/* Navigation Tabs */}
          <div className="tabs-container flex justify-end gap-6 md:gap-10 border-b border-secondary/10 pb-4 mb-8 mt-2 md:mt-3">
            {['work', 'project', 'teaching'].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setProjectIndex(0); }}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all ${activeTab === tab ? 'text-secondary opacity-100 scale-105' : 'text-secondary opacity-30 hover:opacity-100'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative min-h-[460px]">
            {/* WORK TAB */}
            {activeTab === 'work' && (
              <div className="animate-in space-y-8">
                {/* Work Section */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-secondary mb-3 opacity-60">Experience</div>
                  <div className="divide-y divide-secondary/15 border-b border-secondary/15">
                    {displayWork.map((item, i) => (
                      <div key={i} className="grid grid-cols-12 py-2 items-center px-2 hover:bg-secondary/[0.02] transition-all">
                        <div className="col-span-12 md:col-span-5 font-bold text-sm md:text-base text-secondary">
                          {item.title}
                        </div>
                        <div className="col-span-8 md:col-span-5 text-xs md:text-sm text-secondary truncate">
                          {item.role}
                        </div>
                        <div className="col-span-4 md:col-span-2 text-right text-xs md:text-sm font-mono text-secondary">
                          {item.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Section */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-secondary mb-3 opacity-60">Education</div>
                  <div className="divide-y divide-secondary/15 border-b border-secondary/15">
                    {displayEducation.map((item, i) => (
                      <div key={i} className="grid grid-cols-12 py-2 items-center px-2 hover:bg-secondary/[0.02] transition-all">
                        <div className="col-span-12 md:col-span-5 font-bold text-sm md:text-base text-secondary">
                          {item.school}
                        </div>
                        <div className="col-span-8 md:col-span-5 text-xs md:text-sm text-secondary truncate">
                          {item.degree}
                        </div>
                        <div className="col-span-4 md:col-span-2 text-right text-xs md:text-sm font-mono text-secondary">
                          {item.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Papers Section - Placeholder */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-secondary mb-3 opacity-60">Papers</div>
                  <div className="divide-y divide-secondary/15 border-b border-secondary/15">
                    {/* TODO: Add paper entries here */}
                    <div className="py-2 px-2 text-xs md:text-sm text-secondary opacity-40 italic">
                      [Papers coming soon...]
                    </div>
                  </div>
                </div>

                <div className="work-bottom-note mt-2 text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-secondary">
                  Selected positions from recent years. Full CV available upon request.
                </div>
              </div>
            )}

            {/* PROJECT TAB */}
            {activeTab === 'project' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-in">
                <div className="md:col-span-6 divide-y divide-secondary/10 border-b border-secondary/10">
                  {displayProject.map((item, i) => (
                    <Link
                      key={i}
                      to={item.link || '/project'}
                      onMouseEnter={() => setProjectIndex(i)}
                      onClick={() => setProjectIndex(i)}
                      className={`flex justify-between items-center py-3 px-4 cursor-pointer transition-all border-l-2 hover:bg-secondary/[0.02] ${projectIndex === i ? 'border-secondary bg-secondary/5' : 'border-transparent'
                        }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-bold text-sm md:text-base md:text-lg text-secondary">{item.title}</span>
                        <span className="text-[9px] md:text-xs text-secondary uppercase tracking-wider">{item.role}</span>
                      </div>
                      <span className="text-secondary/40 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  ))}
                </div>
                <div className="md:col-span-6 hidden md:block">
                  <div className="max-w-[90%] mx-auto aspect-video bg-secondary/5 rounded-sm overflow-hidden shadow-2xl">
                    <img src={displayProject[projectIndex]?.cover} className="w-full h-full object-cover animate-in" key={projectIndex} alt="cover" />
                  </div>
                </div>
              </div>
            )}

            {/* TEACHING TAB */}
            {activeTab === 'teaching' && (
              <div className="animate-in space-y-4">
                {sortedTeaching.map((item, i) => (
                  <div key={i} className="grid grid-cols-12 py-2 items-center px-2 hover:bg-secondary/[0.02] transition-all border-b border-secondary/10">
                    <div className="col-span-10 md:col-span-9 text-xs md:text-sm text-secondary truncate">
                      {item.course}
                    </div>
                    <div className="col-span-2 md:col-span-3 text-right text-xs md:text-sm font-mono text-secondary hidden md:block">
                      {item.hours}h
                    </div>
                  </div>
                ))}

                {/* View All Button */}
                <div className="mt-6 text-right">
                  <a href="/teaching" className="group flex items-center justify-end gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary transition-all">
                    VIEW ALL <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </div>
            )}

            {/* View All Button - 修复版：位置正确 + 高亮不透明 */}
            {activeTab === 'project' && (
              <div className="mt-4 text-right">
                <a href="/project" className="group flex items-center justify-end gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary transition-all">
                  VIEW ALL <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </section >

      {/* 3. Visual Archive Section */}
      <section className="snap-start bg-background flex items-center relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="max-w-[1200px] mx-auto w-full px-8 sm:px-12 z-10">
          <GalleryPreview />
        </div>
      </section>

    </div >
  );
};

export default Mainpage;