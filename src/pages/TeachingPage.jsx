import React, { useEffect, useState, useRef } from 'react';
import { experienceData } from '../components/Experience.js';
import '../css/TeachingPage.css';

const TeachingPage = () => {
  const [displayHours, setDisplayHours] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const totalHours = Math.round(experienceData.teaching.reduce((sum, item) => sum + item.hours, 0));
  const animationRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const TOP_CLEARANCE_PX = 72;

  useEffect(() => {
    const duration = 2000;
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(startValue + (totalHours - startValue) * easeOutQuart);
      
      setDisplayHours(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayHours(totalHours);
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [totalHours]);

  const groupedTeaching = experienceData.teaching.reduce((acc, item) => {
    if (!acc[item.employer]) {
      acc[item.employer] = [];
    }
    acc[item.employer].push(item);
    return acc;
  }, {});

  const employerOrder = ['北京新东方前途出国', 'Yes Education Center', 'EASYKE', 'TESTDAILY', 'UCSD'];

  return (
    <>
      <style>{`
        .teaching-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .teaching-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div
        ref={scrollContainerRef}
        className="teaching-scroll-container"
        style={{
          marginTop: `${TOP_CLEARANCE_PX}px`,
          width: '100%',
          height: `calc(100vh - ${TOP_CLEARANCE_PX}px)`,
          overflowY: 'auto',
          overflowX: 'hidden',
          background: 'var(--color-background, #0a0a0a)'
        }}
      >
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 pt-16 md:pt-20 pb-12">
          
          {/* Hero Section - Total Hours Animation */}
          <div className="mb-16 md:mb-20">
            <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-secondary mb-4 opacity-60">
              Teaching Experience
            </div>
            <div className="flex items-baseline gap-4">
              <div className="relative">
                <span 
                  className={`text-[15vw] md:text-[10vw] font-bold tracking-tighter leading-none transition-all duration-300 ${
                    isAnimating ? 'text-secondary' : 'text-secondary'
                  }`}
                >
                  {displayHours}
                </span>
                {isAnimating && (
                  <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                )}
              </div>
              <div className="text-[4vw] md:text-[2.5vw] font-bold uppercase tracking-wider opacity-60 pb-4">
                Hours
              </div>
            </div>
            <div className="mt-2 text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-secondary opacity-40">
              of instruction delivered across {Object.keys(groupedTeaching).length} institutions
            </div>
          </div>

          {/* Decorative Line */}
          <div className="w-full h-px bg-secondary/10 mb-12 md:mb-16"></div>

          {/* Teaching Details by Employer */}
          <div className="space-y-12 md:space-y-16">
            {employerOrder.map((employer) => {
              const courses = groupedTeaching[employer];
              if (!courses || courses.length === 0) return null;
              
              const employerTotal = courses.reduce((sum, item) => sum + item.hours, 0);

              return (
                <div key={employer} className="animate-fade-in">
                  {/* Employer Header */}
                  <div className="flex justify-between items-baseline mb-4 md:mb-6 border-b border-secondary/10 pb-3">
                    <h2 className="text-base md:text-xl font-bold text-secondary tracking-tight">
                      {employer}
                    </h2>
                    <span className="text-xs md:text-sm font-mono text-secondary opacity-60">
                      {employerTotal}h
                    </span>
                  </div>

                  {/* Course List */}
                  <div className="space-y-0">
                    {courses.map((item, index) => (
                      <div 
                        key={index}
                        className="grid grid-cols-12 py-2 md:py-3 items-center px-2 hover:bg-secondary/[0.02] transition-all border-b border-secondary/5"
                      >
                        <div className="col-span-10 md:col-span-7">
                          <span className="text-xs md:text-sm text-secondary">
                            {item.course}
                          </span>
                        </div>
                        <div className="col-span-2 md:col-span-3 text-xs text-secondary opacity-50 font-mono">
                          {item.timeSpan}
                        </div>
                        <div className="col-span-2 md:col-span-2 text-right text-xs md:text-sm font-mono text-secondary">
                          {item.hours}h
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Footer */}
          <div className="mt-16 md:mt-20 pt-8 border-t border-secondary/10">
            <div className="flex justify-between items-center text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-secondary opacity-60">
              <span>Total Teaching Hours</span>
              <span className="font-mono">{totalHours}h</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default TeachingPage;
