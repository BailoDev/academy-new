import Image from "next/image"
import { Target, Eye } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-12 px-4 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Image collage with decorative elements */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative yellow stripes */}
              <div className="absolute -top-8 right-8 md:right-12 lg:right-16 z-10">
                <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="w-20 md:w-28 lg:w-32">
                  <line x1="10" y1="5" x2="70" y2="25" stroke="#F2F8FD" strokeWidth="8" strokeLinecap="round" />
                  <line x1="30" y1="20" x2="90" y2="40" stroke="#0154A1" strokeWidth="8" strokeLinecap="round" />
                  <line x1="50" y1="35" x2="110" y2="55" stroke="#0154A1" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </div>

              {/* Decorative black dots */}
              <div className="absolute top-16 -right-4 md:top-20 md:-right-6 lg:top-24 lg:-right-8 z-10">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="w-10 md:w-12">
                  <circle cx="10" cy="10" r="4" fill="#000000" />
                  <circle cx="25" cy="8" r="5" fill="#000000" />
                  <circle cx="40" cy="12" r="4" fill="#000000" />
                  <circle cx="15" cy="25" r="3" fill="#000000" />
                  <circle cx="32" cy="28" r="4" fill="#000000" />
                </svg>
              </div>

              {/* Main large image */}
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-xl">
                  <Image src="/abt.jpg" alt="Student with headphones" fill className="object-cover" />
                </div>
              </div>

              {/* Overlapping smaller image */}
              <div className="absolute bottom-8 right-4 md:bottom-12 md:right-8 lg:bottom-16 lg:right-12 w-48 md:w-56 lg:w-64 z-20">
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                  <Image src="/abt.webp" alt="Student studying" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Sub heading */}
            <div>
              <p className="text-sm md:text-base font-medium tracking-wide uppercase mb-3" style={{ color: "#0154A1" }}>
                Welcome To Gomindz Academy
              </p>
              {/* Main heading */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance"
                style={{ color: "#000000" }}
              >
                Empowering Minds To Transform The Future In The Digital Age
              </h1>
            </div>

            {/* Know About Us section */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-black">Know About Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Gomindz Academy, where innovation meets education! We're a leading tech institution dedicated
                to empowering individuals with cutting-edge skills and knowledge. We offer dynamic programs designed to
                prepare students for success in today's tech landscape. Join us and shape the future of technology and
                entrepreneurship.
              </p>
            </div>

            {/* Vision and Mission cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Vision card */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <Target className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Vision</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To bridge the gap between the academia and workforce, preparing a skilled workforce to drive
                  technological progress and economic growth in our communities.
                </p>
              </div>

              {/* Mission card */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <Eye className="h-5 w-5 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Mission</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To empower learners across the region with accessible and innovative educational tools, promoting
                  lifelong learning, critical thinking and digital literacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
