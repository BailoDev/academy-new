'use client';

import { useEffect, useRef } from 'react';

// Parallax effect hook
const useParallax = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;
      
      const depth = elementRef.current.getAttribute('data-depth');
      const depthValue = depth ? parseFloat(depth) : 0.5;
      
      const moveX = (e.clientX - window.innerWidth / 2) * depthValue / 10;
      const moveY = (e.clientY - window.innerHeight / 2) * depthValue / 10;
      
      elementRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return elementRef;
};

// Dot Grid Component
const DotGrid = ({ position = 'left', color = 'teal' }: { position?: 'left' | 'right', color?: string }) => {
  const parallaxRef = useParallax();
  
  const colorClasses = {
    teal: 'bg-teal-400',
    orange: 'bg-orange-400'
  };

  return (
    <div
      ref={parallaxRef}
      data-depth="0.8"
      className={`absolute ${position === 'left' ? 'left-8 md:left-20' : 'right-8 md:right-20'} top-1/2 -translate-y-1/2 transition-transform duration-100`}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="grid grid-cols-9 gap-2">
        {Array.from({ length: 81 }).map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${colorClasses[color as keyof typeof colorClasses]} opacity-60`}
          />
        ))}
      </div>
    </div>
  );
};

// Wave Lines Component
const WaveLines = ({ position = 'right' }: { position?: 'left' | 'right' }) => {
  const parallaxRef = useParallax();
  
  return (
    <div
      ref={parallaxRef}
      data-depth="0.6"
      className={`absolute ${position === 'right' ? 'right-8 md:right-32' : 'left-8 md:left-32'} top-1/2 -translate-y-1/2 transition-transform duration-100`}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
    >
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="opacity-70">
        <path d="M10 20 Q 40 10, 70 20 T 130 20" stroke="#14B8A6" strokeWidth="3" fill="none" />
        <path d="M10 40 Q 40 30, 70 40 T 130 40" stroke="#14B8A6" strokeWidth="3" fill="none" />
        <path d="M10 60 Q 40 50, 70 60 T 130 60" stroke="#14B8A6" strokeWidth="3" fill="none" />
      </svg>
    </div>
  );
};

// Courses Hero Section
export default function CoursesHero() {
  return (
    <section className="relative bg-[#F2F8FD] py-32 md:py-40 overflow-hidden min-h-[400px] md:min-h-[400px]">
      {/* Decorative Elements */}
      <DotGrid position="left" color="teal" />
      <WaveLines position="right" />
      
      {/* Top Left Circle */}
      <div 
        className="absolute top-8 left-8 md:left-20 w-3 h-3 bg-teal-500 rounded-full opacity-70"
        data-depth="0.8"
        style={{
          transform: 'translate3d(-9.7px, -23px, 0px)',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          position: 'absolute',
          display: 'block'
        }}
      />
      
      {/* Bottom Right Circle */}
      <div 
        className="absolute bottom-8 right-8 md:right-20 w-3 h-3 bg-orange-500 rounded-full opacity-70"
        data-depth="0.8"
        style={{
          transform: 'translate3d(-9.7px, -23px, 0px)',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          position: 'absolute',
          display: 'block'
        }}
      />
      
      {/* Top Right Dots */}
      <div className="absolute top-8 right-8 md:right-20">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400 opacity-60" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Courses
        </h1>
        
        <div className="flex items-center justify-center gap-3 text-gray-600 text-sm md:text-base">
          <a href="/" className="hover:text-teal-600 transition-colors">
            Home
          </a>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-medium">Courses</span>
        </div>
      </div>
    </section>
  );
}