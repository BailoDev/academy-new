import React from 'react';

const courses = [
  {
    id: 1,
    image: "/digitalTechnology.jpg",
    title: "Foundation Digital Technology",
    description: "Build essential digital skills and learn the fundamentals of modern technology. Perfect for beginners looking to start their tech journey.",
    rating: 4.5,
  },
  {
    id: 2,
    image: "/dataAnalytics.jpg",
    title: "Data Analytics",
    description: "Master data analysis techniques and tools to transform raw data into actionable insights. Learn to make data-driven decisions.",
    rating: 4.5,
  },
  {
    id: 3,
    image: "/dataScience.jpg",
    title: "Data Science",
    description: "Explore machine learning, statistical modeling, and advanced analytics. Become proficient in Python and data visualization.",
    rating: 4.5,
  },
  {
    id: 4,
    image: "/digitalMarketing.webp",
    title: "Digital Marketing",
    description: "Learn SEO, social media marketing, content strategy, and digital advertising to grow your online presence and reach your audience.",
    rating: 4.5,
  },
  {
    id: 5,
    image: "/graphicDesign.webp",
    title: "Graphic Design",
    description: "Develop creative design skills using industry-standard tools. Learn branding, typography, color theory, and visual communication.",
    rating: 4.5,
  },
  {
    id: 6,
    image: "/cyberSecurity.webp",
    title: "Cyber Security",
    description: "Protect digital assets and learn ethical hacking, network security, and risk management. Understand modern cybersecurity threats.",
    rating: 4.5,
  },
]

export default function PopularCourses() {
  return (
    <section className="py-16 md:py-20 px-4 lg:px-8 max-w-7xl mx-auto bg-white" id="popular-courses">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 md:mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Popular Courses</h2>
          {/* Yellow underline accent */}
          <div className="mt-2 h-1 w-24 md:w-32 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent rounded-full"></div>
        </div>
        <a
          href="/courses"
          className="px-5 md:px-6 py-2.5 md:py-3 border-2 border-[#0154A1] text-gray-800 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm md:text-base"
        >
          View All Courses
        </a>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            {/* Course Image with Bookmark */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 md:h-52 object-cover"
              />
              
              {/* Bookmark Icon */}
              <div className="absolute top-4 right-4 bg-white w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-5">
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {course.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((star) => {
                  const filled = star <= Math.floor(course.rating);
                  const halfFilled = star === Math.ceil(course.rating) && course.rating % 1 !== 0;
                  
                  return (
                    <div key={star} className="relative w-4 h-4">
                      {halfFilled ? (
                        <>
                          {/* Half-filled star */}
                          <svg className="w-4 h-4 text-gray-300 fill-current absolute" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <svg className="w-4 h-4 text-blue-900 fill-current absolute" viewBox="0 0 24 24" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </>
                      ) : (
                        <svg className={`w-4 h-4 ${filled ? 'text-[#0154A1]' : 'text-gray-300'} fill-current`} viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
                {course.description}
              </p>

              {/* CTA */}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href={`/courses/${course.id}`}
                  className="text-blue-950 font-semibold hover:text-teal-700 transition-colors text-sm md:text-base inline-flex items-center gap-1"
                >
                  Explor Now 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}