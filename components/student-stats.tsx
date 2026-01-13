"use client"

import Image from "next/image"

export default function StudentStats() {
  return (
    <section className="relative bg-[#f2f8fd] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Student Image with Decorative Elements */}
          <div className="relative flex justify-center lg:justify-center">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 animate-float">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform -rotate-12 flex items-center justify-center">
                <i className="bx bxs-graduation text-white text-3xl"></i>
              </div>
            </div>

            <div
              className="absolute top-1/3 -left-4 w-20 h-20 bg-orange-500 rounded-full animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>

            <div
              className="absolute bottom-1/4 left-0 w-12 h-12 border-4 border-orange-400 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Dots Pattern */}
            <div className="absolute top-20 right-20 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
              ))}
            </div>

            {/* Yellow Circle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400 rounded-full -z-10"></div>

            {/* Student Image */}
            <div className="relative z-10 md:scale-110">
              <Image
                src="/home/whyUs1.png"
                alt="Student with laptop"
                width={450}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-left">
            <p className="text-[#0154A1] font-semibold text-lg mb-4">why Gomindz Acadey</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Build Skills That Power Your Career
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Our industry aligned curriculum, hands on learning approach and expert mentorship help you gain practical skills and confidence for real world success.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-blue-950 mb-2">1K+</div>
                <div className="text-gray-700 font-medium">Students Enrolled</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-blue-950 mb-2">96%</div>
                <div className="text-gray-700 font-medium">Students Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-blue-950 mb-2">10+</div>
                <div className="text-gray-700 font-medium">Courses </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
