"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube as YouTube, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <div className="w-full">
      <div className="bg-[#f2f8fd] px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <div className="flex items-center justify-center gap-3 text-gray-600 text-sm md:text-base">
          <a href="/" className="hover:text-blue-800 transition-colors">
            Home
          </a>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900 font-medium">Contact</span>
        </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Need to get in touch with us?</h2>
                <p className="text-gray-600 text-lg">
                  Either fill out the form with your inquiry or link us through email or phone you'd like to contact
                  below, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-10 pt-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#0154A1] rounded-full p-3 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+220 3696325 / 3229625</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#0154A1] rounded-full p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">academy@gomindz.gm</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#0154A1] rounded-full p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">Kairaba Avenue, Opposite Qcell</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media :</h3>
                <div className="flex gap-5">
                  <a href="#" className="bg-blue-800 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-blue-800 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-blue-800 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Leave your message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
