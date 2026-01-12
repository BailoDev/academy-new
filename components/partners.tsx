import React from 'react';

export default function Partners() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" id="partners">
      {/* Decorative robot icon - bottom left */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <div className="w-20 h-20 relative opacity-80">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative chat icons - bottom right */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="relative">
          <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl mb-2">
            💬
          </div>
          <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl absolute -bottom-4 left-8">
            💬
          </div>
        </div>
      </div>

      {/* Triangle decoration - top right */}
      <div className="absolute top-12 right-12 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5L35 35H5L20 5Z" fill="#8B5CF6" opacity="0.6" />
        </svg>
      </div>

      {/* Circle decoration - bottom right */}
      <div className="absolute bottom-32 right-32 hidden lg:block">
        <div className="w-6 h-6 bg-orange-400 rounded-full opacity-60"></div>
      </div>

      <div className="mx-4 lg:mx-[8vw] max-w-[1400px] 2xl:mx-auto relative z-10">
        {/* Centered heading and description at top */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by Leading Educational <br className="hidden md:block" />
            Institutions Worldwide
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We partner with renowned universities, colleges, and training centers to deliver world-class learning
            experiences that empower students to achieve their full potential.
          </p>
        </div>

        {/* Partner logos in wave pattern */}
        <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-wrap max-w-6xl mx-auto">
          {/* Partner 1 - baseline */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform p-3">
            <img src="/partners/modem.png" alt="Partner" className="w-full h-full object-contain" />
          </div>
          {/* Partner 2 - up */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform -mt-6 p-3">
            <img src="/partners/logo.png" alt="Partner" className="w-full h-full object-contain" />
          </div>
          {/* Partner 3 - down */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform mt-6 p-3">
            <img src="/partners/cdg.png" alt="Partner" className="w-full h-full object-contain" />
          </div>
          {/* Partner 4 - up */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform -mt-4 p-3">
            <img src="/partners/kit.png" alt="Partner" className="w-full h-full object-contain" />
          </div>
          {/* Partner 5 - baseline */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform p-3">
            <img src="/partners/kg.png" alt="Partner" className="w-full h-full object-contain" />
          </div>
          {/* Partner 6 - down */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform mt-8 p-3">
            <img src="/partners/baldez-media.png" alt="Partner" className="w-full h-full object-contain" />
          </div>
          {/* Partner 7 - up */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform -mt-6 p-3">
            <img src="/partners/educate.png" alt="Partner" className="w-full h-full object-contain" />
          </div>
          {/* Partner 8 - baseline */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform p-3">
            <img src="/partners/innovate-her.png" alt="Partner" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}