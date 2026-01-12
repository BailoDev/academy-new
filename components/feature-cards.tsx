import React from 'react';

export default function FeatureCards() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Left Card - Industry-driven Curriculum */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden min-h-[320px] md:min-h-[350px] flex flex-col">
          {/* Decorative spiral pattern */}
          <div className="absolute top-4 md:top-6 right-4 md:right-6 w-20 md:w-28 h-20 md:h-28 opacity-15">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d="M50,50 Q50,30 60,30 Q70,30 70,40 Q70,50 60,50 Q50,50 50,60 Q50,70 60,70 Q75,70 75,55 Q75,40 60,40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-orange-400"
              />
              <circle cx="50" cy="50" r="3" fill="currentColor" className="text-orange-400" />
              <circle cx="60" cy="30" r="2" fill="currentColor" className="text-orange-400" />
              <circle cx="70" cy="40" r="2" fill="currentColor" className="text-orange-400" />
            </svg>
          </div>

          {/* Decorative triangle */}
          <div className="absolute bottom-16 md:bottom-20 right-8 md:right-10 opacity-20">
            <svg width="40" height="40" viewBox="0 0 60 60" className="md:w-[50px] md:h-[50px]">
              <polygon
                points="30,10 50,45 10,45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-orange-400"
                strokeDasharray="4,4"
              />
            </svg>
          </div>

          <div className="flex-1 z-10 mb-24 md:mb-28">
            <p className="text-blue-800 font-medium mb-2 text-sm md:text-base">Learn together with</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Industry-driven Curriculum
            </h2>

            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-gray-700 text-sm md:text-base">Learn from Industry Experts</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-700 text-sm md:text-base">Skill based Learning</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 text-sm md:text-base">Exposure to industry tools</span>
              </li>
            </ul>
          </div>
          
          {/* Image container */}
          <div className="absolute bottom-0 right-0 w-56 h-36 md:w-72 md:h-44 lg:w-80 lg:h-48">
            <div className="relative w-full h-full transform -rotate-6 translate-x-4 md:translate-x-6 translate-y-2 md:translate-y-3">
              <img
                src="/abt-sub-img.jpg"
                alt="Teacher presenting"
                className="w-full h-full rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Right Card - Hands on learning */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 overflow-hidden min-h-[320px] md:min-h-[350px] flex flex-col">
          {/* Decorative circles */}
          <div className="absolute top-4 md:top-6 right-4 md:right-6 w-24 md:w-32 h-24 md:h-32 opacity-15">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400" />
            </svg>
          </div>

          {/* Decorative triangle */}
          <div className="absolute bottom-16 md:bottom-20 right-8 md:right-10 opacity-20">
            <svg width="40" height="40" viewBox="0 0 60 60" className="md:w-[50px] md:h-[50px]">
              <polygon
                points="30,10 50,45 10,45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-400"
                strokeDasharray="4,4"
              />
            </svg>
          </div>

          <div className="flex-1 z-10 mb-24 md:mb-28">
            <p className="text-blue-800 font-medium mb-2 text-sm md:text-base">Get the skills</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Hands on learning
            </h2>

            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span className="text-gray-700 text-sm md:text-base">Expert Instructors</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700 text-sm md:text-base">Career Support</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-gray-700 text-sm md:text-base">Skills application over theory</span>
              </li>
            </ul>
          </div>

          {/* Image container */}
          <div className="absolute bottom-0 right-0 w-56 h-36 md:w-72 md:h-44 lg:w-80 lg:h-48">
            <div className="relative w-full h-full transform rotate-6 translate-x-4 md:translate-x-6 translate-y-2 md:translate-y-3">
              <img
                src="/card-1.webp"
                alt="Students learning"
                className="w-full h-full rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}