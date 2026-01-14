"use client"

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

const instructors = [
  {
    name: "Fatoumatta Badjie",
    role: "Director",
    image: "/staff/badjie.webp",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Aji Awa Bittaye",
    role: "Marketing",
    image: "/staff/aji.webp",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Ebrima Konteh",
    role: "Graphic Design",
    image: "/staff/konteh.webp",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Fatoumatta Gibba",
    role: "Lead Instructor",
    image: "/young-male-instructor-with-pencil-in-bright-office.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Muhammed Jawo",
    role: "Instructor Digital Technology",
    image: "/staff/jawo.webp",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Amadou Bailo Bah",
    role: "Instructor Data Analytics",
    image: "/staff/bailo.webp",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Kawsu Kanteh",
    role: "Instructor Data Analytics",
    image: "/young-male-instructor-in-suit-and-tie-smiling.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Fatoumatta Danso",
    role: "Instructor Data Science",
    image: "/staff/danso.webp",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Ndey Sambou",
    role: "Instructor Data Science",
    image: "/staff/Ndey.webp",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Abba Sabally",
    role: "Instructor Digital Technology",
    image: "/young-male-instructor-with-glasses-in-classroom.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Mamadi Fatty",
    role: "Instructor Graphic Design",
    image: "/mature-male-instructor-with-gray-beard-and-glasses.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Edotaria Mendy",
    role: "Instructor Digital Marketing",
    image: "/young-male-instructor-with-pencil-in-bright-office.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-12 px-4 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Our Expert Instructors</h2>
        </div>

        {/* Instructors Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor, index) => (
            <div key={index} className="group relative">
              <div className="relative">
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={instructor.socials.facebook}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#00BFA6] transition-colors duration-300 group/icon"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 text-black group-hover/icon:text-white" />
                    </a>
                    <a
                      href={instructor.socials.twitter}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#00BFA6] transition-colors duration-300 group/icon"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5 text-black group-hover/icon:text-white" />
                    </a>
                    <a
                      href={instructor.socials.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#00BFA6] transition-colors duration-300 group/icon"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-black group-hover/icon:text-white" />
                    </a>
                    <a
                      href={instructor.socials.instagram}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#00BFA6] transition-colors duration-300 group/icon"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-black group-hover/icon:text-white" />
                    </a>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-xl shadow-lg px-6 py-4 w-[85%] text-center">
                  <h3 className="text-lg md:text-xl font-bold text-black mb-1">{instructor.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{instructor.role}</p>
                </div>
              </div>

              <div className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
