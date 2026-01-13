"use client"

import { Zap } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    "/home/hero-2.png",
    "/home/hero-1.png",
    "/home/hero-2.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-28" style={{ backgroundColor: "#F2F8FD" }}>
      {/* Yellow dots pattern - left side */}
      <div className="absolute left-8 top-1/6 grid grid-cols-6 gap-2 opacity-60">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
        ))}
      </div>

      {/* Teal dots pattern - right side */}
      <div className="absolute right-24 top-1/8 grid grid-cols-5 gap-2 opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      {/* Red square - top center */}
      <div className="absolute left-1/2 top-20 h-6 w-6 -translate-x-1/2 bg-blue-900" />

      {/* Purple zigzag - top right */}
      <svg
        className="absolute right-48 top-18 opacity-70"
        width="120"
        height="40"
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20 L15 10 L30 20 L45 10 L60 20 L75 10 L90 20 L105 10 L120 20"
          stroke="#0154A1"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Orange circle - bottom right */}
      <div className="absolute bottom-24 right-12 h-16 w-16 rounded-full border-4 border-orange-400" />

      {/* Semi-circular SVG at the bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0 120 L0 60 Q 360 0, 720 60 Q 1080 120, 1440 60 L1440 120 Z" fill="white" opacity="0.8" />
      </svg>

      {/* Main Content Container */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Zap className="h-5 w-5 fill-blue-900 text-blue-900" />
              <span className="font-medium text-gray-900">Learn From 20,000+ Quality Courses</span>
            </div>

            {/* Main Heading */}
            <div className="relative lg:max-w-5xl">
              <h1 className="text-balance font-bold leading-snug text-slate-900" style={{ fontSize: 'clamp(2.75rem, 6vw, 3.4rem)' }}>
                <span className="block">Unlock Your Potential</span>
                <span className="block">With Our Cutting-Edge</span>
                <span className="relative block">
                I.T Courses
                </span>
              </h1>
              
            </div>
            <p className="text-sm sm:text-base text-black">
                We set out to reinvent education in the digital era. In a world driven by data and technology, we believe in making technical expertise accessible to everyone.</p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <button className="rounded-md px-8 py-2.5 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl" style={{ backgroundColor: '#0154A1' }}>
                  Buy Form
                </button>
                <button className="rounded-md border-2 px-8 py-2.5 text-base font-semibold shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl" style={{ borderColor: '#0154A1', color: '#0154A1' }}>
                  Pay Tuition Fee
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Stats */}
          <div className="relative flex justify-center lg:justify-end mt-16 lg:mt-0">
            {/* Decorative circular elements behind the image */}
            <div className="absolute -left-8 top-20 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 opacity-20 blur-xl"></div>
            <div className="absolute -right-6 top-40 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-20 blur-xl"></div>
            <div className="absolute bottom-32 left-12 h-20 w-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 blur-xl"></div>

            <div className="relative z-10 h-[550px] sm:h-[600px] lg:h-[650px] w-full max-w-xl sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl lg:mt-12">
              {images.map((src, index) => (
                <img
                  key={src}
                  src={src || "/student.png"}
                  alt={`Student ${index + 1}`}
                  className={`absolute inset-0 h-auto w-full transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Stats Card */}
              <div className="absolute left-1/2 top-[55%] z-20 -translate-x-1/2 rounded-2xl bg-white p-6 shadow-2xl">
                <div className="mb-3 flex items-center -space-x-3">
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-orange-200">
                    <img src="/student.png" alt="Student 1" className="h-full w-full object-cover" />
                  </div>
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-blue-200">
                    <img src="/student.png" alt="Student 2" className="h-full w-full object-cover" />
                  </div>
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-pink-200">
                    <img src="/student.png" alt="Student 3" className="h-full w-full object-cover" />
                  </div>
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-teal-200">
                    <img src="/student.png" alt="Student 4" className="h-full w-full object-cover" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-orange-400 text-sm font-bold text-white">
                    2K+
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">1000+</div>
                  <div className="text-sm text-gray-600">Total Enrolled Students</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}