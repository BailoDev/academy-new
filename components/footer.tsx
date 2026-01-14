"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white py-16 px-4 mt-0">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-700">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">GOMINDZ ACADEMY</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Our curriculum is designed to be hands-on and industry relevant, ensuring that our students not only gain theoretical knowledge but also practical skills that are in high demand in today's job market.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-950 rounded-lg flex items-center justify-center">
                <i className="bx bx-phone text-white text-xl"></i>
              </div>
              <div>
                <p className="text-blue-400 text-xs mb-1">Call us at</p>
                <p className="text-white font-semibold">+220 5184402</p>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company Details</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-blue-400  transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400  transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400  transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400  transition-colors">
                  Data Literacy
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400  transition-colors">
                  Digital Technolgy
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400  transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400  transition-colors">
                  Cyber security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="bx bx-map text-blue-500 text-xl mt-1"></i>
                <div>
                  <p className="text-gray-300 text-sm">Kairaba Avenue,</p>
                  <p className="text-gray-300 text-sm">Beside Qcell</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="bx bx-phone text-blue-500 text-xl mt-1"></i>
                <div>
                  <p className="text-gray-300 text-sm">+220 5184402</p>
                  <p className="text-gray-300 text-sm">+220 3696325</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="bx bx-envelope text-blue-500 text-xl mt-1"></i>
                <Link
                  href="mailto:academy@gomindz.gm"
                  className="text-gray-300 text-sm hover:text-blue-500 transition-colors"
                >
                  academy@gomindz.gm
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">Copyright 2026 Gomindz Academy | Developed By Gomindz</p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com"
              className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
            >
              <i className="bx bxl-facebook text-white text-lg"></i>
            </Link>
            <Link
              href="https://twitter.com"
              className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
            >
              <i className="bx bxl-twitter text-white text-lg"></i>
            </Link>
            <Link
              href="https://www.linkedin.com"
              className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
            >
              <i className="bx bxl-linkedin text-white text-lg"></i>
            </Link>

            {/* Scroll to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 bg-blue-500 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors ml-4"
              aria-label="Scroll to top"
            >
              <i className="bx bx-up-arrow-alt text-white text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
