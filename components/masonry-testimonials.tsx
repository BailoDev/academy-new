"use client"
import { useEffect, useRef, useState } from "react"

interface Testimonial {
  id: number
  name: string
  handle: string
  avatar: string
  text: string
  verified?: boolean
  height: "short" | "medium" | "tall"
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Fatoumatta Baryy", handle: "@fatima", avatar: "/student.png", text: "This institution completely transformed my career! The practical training and industry-ready curriculum helped me land my dream job within 2 months of graduation. Forever grateful!", height: "tall", verified: true },
  { id: 2, name: "Ebrima Mbye", handle: "@ebrim_mbye", avatar: "/rahul.jpg", text: "Best decision I ever made. The faculty here doesn't just teach—they mentor. They genuinely care about your success and push you to reach your potential.", height: "medium" },
  { id: 3, name: "nyanya", handle: "@nyanya_dol", avatar: "/ananya.jpg", text: "The hands-on projects and real-world exposure I got here were invaluable. I learned more in 6 months than I did in my entire degree program!", height: "medium", verified: true },
  { id: 4, name: "Sheikh Njie", handle: "@sheikh", avatar: "/rohan.jpg", text: "⭐⭐⭐⭐⭐\n\nAmazing infrastructure, supportive staff, and incredible placement opportunities. This place truly delivers on its promises!", height: "short" },
  { id: 5, name: "Mariama Jallow", handle: "@jallow_m", avatar: "/sneha.jpg", text: "From day one, I felt welcomed and supported. The learning environment is collaborative, not competitive. Made lifelong friends and gained skills that matter in the real world.", height: "tall" },
  { id: 6, name: "Jonas Mendy", handle: "@jo_mendy", avatar: "/arjun.jpg", text: "The industry connections this institution has are unreal. Got internship opportunities with top companies and the career guidance team helped me negotiate a better package!", height: "tall", verified: true },
  { id: 7, name: "Deebor ", handle: "@deebie", avatar: "/kavya.jpg", text: "Three things that stand out: world-class faculty, state-of-the-art labs, and personalized attention. You're not just a number here—you're a future professional being crafted.", height: "medium" },
  { id: 8, name: "Halimatou Samateh", handle: "@samateh", avatar: "/vikram.jpg", text: "I was skeptical at first, but this institution exceeded all my expectations. The curriculum is constantly updated with industry trends and the trainers have real industry experience.", height: "tall", verified: true },
  { id: 9, name: "Nyima Sanneh", handle: "@nyima", avatar: "/divya.jpg", text: "The best part? They don't just focus on technical skills. Soft skills, interview prep, resume building they prepare you for the complete professional journey!", height: "tall" },
  { id: 10, name: "Jainaba Baldeh", handle: "@baldeh", avatar: "/aditya.jpg", text: "Enrolled here on a friend's recommendation and now I recommend it to everyone! The quality of education and the support system are top-notch. Worth every penny!", height: "medium", verified: true },
  { id: 11, name: "Saikou Camara", handle: "@saikou", avatar: "/riya.jpg", text: "This institution changed my life trajectory. From doubting my abilities to confidently cracking interviews at top companies—the transformation has been incredible!", height: "tall", verified: true },
  { id: 12, name: "Carl Gomez", handle: "@carl", avatar: "/karthik.jpg", text: "The alumni network alone is worth joining for! Regular workshops, guest lectures from industry leaders, and endless networking opportunities. This place invests in your future!", height: "medium" },
]

export default function MasonryTestimonials() {
  const column1Ref = useRef<HTMLDivElement>(null)
  const column2Ref = useRef<HTMLDivElement>(null)
  const column3Ref = useRef<HTMLDivElement>(null)

  const [isPaused1, setIsPaused1] = useState(false)
  const [isPaused2, setIsPaused2] = useState(false)
  const [isPaused3, setIsPaused3] = useState(false)

  useEffect(() => {
    const columns = [
      { ref: column1Ref.current, isPaused: isPaused1 },
      { ref: column2Ref.current, isPaused: isPaused2 },
      { ref: column3Ref.current, isPaused: isPaused3 }
    ]
    const speeds = [15, 18, 12]
    const intervals: NodeJS.Timeout[] = []

    columns.forEach((column, index) => {
      if (!column.ref) return

      let scrollPosition = 0
      const speed = speeds[index]

      const animate = () => {
        if (column.isPaused) return

        scrollPosition -= 1

        if (scrollPosition <= -(column.ref!.scrollHeight / 2)) {
          scrollPosition = 0
        }

        column.ref!.style.transform = `translateY(${scrollPosition}px)`
      }

      const interval = setInterval(animate, speed)
      intervals.push(interval)
    })

    return () => intervals.forEach(interval => clearInterval(interval))
  }, [isPaused1, isPaused2, isPaused3])

  const column1 = [testimonials[0], testimonials[1], testimonials[2], testimonials[3]]
  const column2 = [testimonials[4], testimonials[5], testimonials[6], testimonials[7]]
  const column3 = [testimonials[8], testimonials[9], testimonials[10], testimonials[11]]

  const renderTestimonial = (testimonial: Testimonial) => {
    const heightClass = {
      short: "min-h-[180px]",
      medium: "min-h-[240px]",
      tall: "min-h-[320px]",
    }[testimonial.height]

    return (
      <div
        className={`bg-white rounded-2xl shadow-lg p-5 sm:p-6 border border-gray-100 ${heightClass} flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
      >
        <div className="flex items-start gap-3 mb-3 sm:mb-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex-shrink-0 object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 truncate">{testimonial.name}</h3>
              {testimonial.verified && (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            {testimonial.handle && (
              <p className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.handle}</p>
            )}
          </div>
        </div>
        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line flex-1">
          {testimonial.text}
        </p>
      </div>
    )
  }

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10 sm:mb-14 lg:mb-20">
          <p className="text-base sm:text-lg font-semibold mb-2 sm:mb-3" style={{ color: '#0154A1' }}>
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#000000' }}>
            What Our Students Say
          </h2>
        </div>

        <div className="relative h-[700px] sm:h-[800px] md:h-[900px] lg:h-[1000px] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-40 sm:h-48 md:h-56 bg-gradient-to-b from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 right-0 h-40 sm:h-48 md:h-56 bg-gradient-to-t from-white via-white/90 to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 h-full">
            <div 
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused1(true)}
              onMouseLeave={() => setIsPaused1(false)}
            >
              <div ref={column1Ref} className="space-y-4 sm:space-y-5 lg:space-y-6">
                {[...column1, ...column1].map((testimonial, index) => (
                  <div key={`col1-${index}`}>{renderTestimonial(testimonial)}</div>
                ))}
              </div>
            </div>

            <div 
              className="overflow-hidden hidden md:block"
              onMouseEnter={() => setIsPaused2(true)}
              onMouseLeave={() => setIsPaused2(false)}
            >
              <div ref={column2Ref} className="space-y-4 sm:space-y-5 lg:space-y-6">
                {[...column2, ...column2].map((testimonial, index) => (
                  <div key={`col2-${index}`}>{renderTestimonial(testimonial)}</div>
                ))}
              </div>
            </div>

            <div 
              className="overflow-hidden hidden lg:block"
              onMouseEnter={() => setIsPaused3(true)}
              onMouseLeave={() => setIsPaused3(false)}
            >
              <div ref={column3Ref} className="space-y-4 sm:space-y-5 lg:space-y-6">
                {[...column3, ...column3].map((testimonial, index) => (
                  <div key={`col3-${index}`}>{renderTestimonial(testimonial)}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}