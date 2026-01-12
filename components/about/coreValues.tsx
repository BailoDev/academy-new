"use client"

import { BookOpen, Lightbulb, Rocket, Users } from "lucide-react"

const coreValues = [
  {
    title: "Excellence",
    icon: BookOpen,
    color: "",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-800",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    color: "orange",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Empowerment",
    icon: Rocket,
    color: "pink",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Community",
    icon: Users,
    color: "cyan",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-700",
  },
]

export default function CoreValuesSection() {
  return (
    <section className="relative py-12 px-4 md:py-20 lg:py-24 bg-gray-50">
      {/* Decorative circle */}
      <div className="absolute left-8 top-12 md:left-12 md:top-16 lg:left-16 lg:top-20">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-blue-200"></div>
      </div>

      {/* Decorative dots */}
      <div className="absolute right-8 top-32 md:right-12 md:top-40 lg:right-16 lg:top-48">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-200"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
          </div>
          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
          </div>
          <div className="flex gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-300"></div>
            <div className="w-2 h-2 rounded-full bg-orange-300"></div>
            <div className="w-2 h-2 rounded-full bg-blue-100"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black inline-block relative">
            Our Core Values
            {/* Yellow underline decoration */}
            <svg
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 md:w-40 lg:w-48"
              height="8"
              viewBox="0 0 200 8"
              fill="none"
            >
              <path d="M2 6C50 3 150 2 198 5" stroke="#0154A1" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </h2>
        </div>

        {/* Core Values Cards - Wave Format */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, index) => {
            const Icon = value.icon
            const isTopCard = index % 2 === 0
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-[180px] md:h-[200px] ${
                  isTopCard ? "lg:-translate-y-4" : "lg:translate-y-4"
                }`}
              >
                <div className="flex flex-col items-center text-center h-full justify-center">
                  <div className={`${value.bgColor} p-4 rounded-xl transition-all duration-500`}>
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 ${value.iconColor} transition-all duration-500`} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mt-4 transition-all duration-500">
                    {value.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
