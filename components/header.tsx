"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/", icon: "bx-home-alt", id: "home" },
    { name: "About", href: "/about", icon: "bx-info-circle", id: "about" },
    { name: "Courses", href: "/courses", icon: "bx-book-open", id: "courses" },
    { name: "Contact", href: "/contact", icon: "bx-message-rounded", id: "contact" }
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-400 ${scrolled ? "shadow-lg bg-[#1A2332] backdrop-blur-lg" : "bg-transparent"}`}
      >
        <nav className="h-16 flex justify-between items-center mx-4 lg:mx-[8vw] max-w-[1600px] 2xl:mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/gomindz-academy-logo.jpg"
              alt="company-logo"
              width={40}
              height={40}
              className="w-10 rounded-full"
            />
            <span className={`font-semibold text-lg transition-colors ${scrolled ? "text-white" : "text-[#0154A1]"}`}>
              Gomindz App
            </span>
          </Link>

          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link 
                    href={item.href} 
                    className={`${scrolled ? "text-white" : "text-[#0154A1]"} hover:opacity-80 text-[15px] font-medium transition-all flex items-center gap-2`}
                  >
                    <i className={`bx ${item.icon} text-lg`}></i>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/hire-interns"
              className="px-5 py-2.5 rounded-full bg-[#0154A1] text-white text-[14px] font-semibold transition-all duration-300 hover:bg-[#014080] shadow-lg flex items-center gap-2"
            >
              <span className="hidden sm:inline">Hire Interns</span>
              <span className="sm:hidden">Hire</span>
              <i className="bx bx-right-arrow-alt text-xl"></i>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 shadow-lg pb-safe">
        <ul className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <li key={item.id} className="flex-1">
              <Link
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center h-full gap-1 transition-colors ${
                  activeTab === item.id ? "text-[#0154A1]" : "text-gray-500"
                }`}
              >
                <i className={`bx ${item.icon} text-2xl`}></i>
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}