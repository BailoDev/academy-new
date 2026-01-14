"use client"

import Image from "next/image"

export default function CTA() {
  return (
    <section className="relative bg-[#f2f8fd] py-16 md:py-24 lg:py-32 overflow-hidden mb-0">
      {/* Large circular background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gray-200/60 rounded-full -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gray-100/60 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
          {/* Left Student Image */}
          <div className="relative order-1 lg:order-1 w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[260px]">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-4 h-4 sm:w-5 sm:h-5">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L8 2M5 2L5 8" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 2L18 2M15 2L15 8" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 12L8 18" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* Tilted card with student */}
              <div className="relative rounded-3xl p-6 sm:p-8 transform -rotate-6 shadow-2xl">
                <div className="transform rotate-6">
                  <Image
                    src="/cta1.webp"
                    alt="Student with laptop"
                    width={320}
                    height={400}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="order-2 lg:order-2 flex-1 text-center max-w-2xl px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a202c] mb-8">
              <span className="block">Nurturing Tech Talents</span>
              <span className="block">In The Gambia</span>
            </h2>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>

          {/* Right Student Image */}
          <div className="relative order-3 lg:order-3 w-full max-w-[220px] sm:max-w-[240px] lg:max-w-[260px]">
            <div className="relative">
              {/* Decorative dashed line */}
              <svg
                className="absolute -top-8 -right-8 w-20 h-20 sm:w-24 sm:h-24"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 50 Q 30 30, 50 50 T 90 50"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                />
              </svg>

              {/* Tilted card with student */}
              <div className="relative rounded-3xl p-6 sm:p-8 transform rotate-8 shadow-2xl">
                <div className="transform -rotate-6">
                  <Image
                    src="/cta.webp"
                    alt="Student with books"
                    width={320}
                    height={400}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
