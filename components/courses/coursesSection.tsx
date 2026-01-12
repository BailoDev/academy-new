'use client';

import React, { useState } from 'react';

interface Course {
  id: number;
  category: string;
  title: string;
  courseName: string;
  duration: string;
  daysPerWeek: string;
  originalPrice?: number;
  currentPrice: number;
  isFree: boolean;
  image: string;
  level: string;
}

const courses: Course[] = [
  {
    id: 1,
    category: 'Digital Technology',
    title: 'Creating Stunning UI Design with Figma',
    courseName: 'Found Digital Technology',
    duration: '12 Weeks',
    daysPerWeek: '3days/Week',
    originalPrice: 4500,
    currentPrice: 4000,
    isFree: false,
    image: '/courses/digital-marketing-1.jpg',
    level: 'Foundation'
  },
  {
    id: 2,
    category: 'DEVELOPMENT',
    title: 'Mastering Responsive Web Design Techniques',
    courseName: 'Data Literacy',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 5500,
    currentPrice: 5000,
    isFree: false,
    image: '/courses/advanced-analytics.webp',
    level: 'Foundation'
  },
  {
    id: 3,
    category: 'LANGUAGE',
    title: 'Building Chatbots with OpenAI\'s GPT',
    courseName: 'Found Data Science',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 5500,
    currentPrice: 5000,
    isFree: false,
    image: '/lang1.jpg',
    level: 'Advanced'
  },
  {
    id: 4,
    category: 'COOKING',
    title: 'Master the Art of Vegan Cooking Recipes',
    courseName: 'Data Analytics (Int)',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 10000,
    currentPrice: 8000,
    isFree: false,
    image: '/cook1.jpg',
    level: 'Foundation'
  },
  {
    id: 5,
    category: 'DEVELOPMENT',
    title: 'Introduction to Python for Web Developers',
    courseName: 'Data Science (Int)',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 10000,
    currentPrice: 8000,
    isFree: false,
    image: '/dev2.jpg',
    level: 'Foundation'
  },
  {
    id: 6,
    category: 'COOKING',
    title: 'Conversational Spanish for Beginners',
    courseName: 'Digital Marketing (Int)',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 10000,
    currentPrice: 8000,
    isFree: false,
    image: '/cook2.jpg',
    level: 'Intermediate'
  },
  {
    id: 7,
    category: 'TRAINING',
    title: 'Corporate Leadership Development',
    courseName: 'Leadership Training',
    duration: '8 Weeks',
    daysPerWeek: '1day/Week',
    originalPrice: 15000,
    currentPrice: 12000,
    isFree: false,
    image: '/training1.jpg',
    level: 'Corporate Training'
  },
  {
    id: 8,
    category: 'TRAINING',
    title: 'Team Building & Communication',
    courseName: 'Corporate Communication',
    duration: '6 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 12000,
    currentPrice: 10000,
    isFree: false,
    image: '/training2.jpg',
    level: 'Corporate Training'
  },
  {
    id: 9,
    category: 'TRAINING',
    title: 'Statistical Analysis for Business',
    courseName: 'Stata',
    duration: '2 Weeks',
    daysPerWeek: '5days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/stata.jpg',
    level: 'Corporate Training'
  },
  {
    id: 10,
    category: 'TRAINING',
    title: 'Strategic Business Development',
    courseName: 'Business Development',
    duration: '2 Weeks',
    daysPerWeek: '5days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/business-dev.jpg',
    level: 'Corporate Training'
  },
  {
    id: 11,
    category: 'TRAINING',
    title: 'Data Visualization with Tableau',
    courseName: 'Analytics With Tableau',
    duration: '2 Weeks',
    daysPerWeek: '5days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/tableau.jpg',
    level: 'Corporate Training'
  },
  {
    id: 12,
    category: 'TRAINING',
    title: 'Financial Analysis & Reporting',
    courseName: 'Financial Analysis',
    duration: '2 Weeks',
    daysPerWeek: '5days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/financial.jpg',
    level: 'Corporate Training'
  },
  {
    id: 13,
    category: 'TRAINING',
    title: 'Financial Technology Solutions',
    courseName: 'Fintech',
    duration: '2 Weeks',
    daysPerWeek: '5days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/fintech.jpg',
    level: 'Corporate Training'
  },
  {
    id: 14,
    category: 'TRAINING',
    title: 'AI Prompt Engineering Mastery',
    courseName: 'Prompt Engineering',
    duration: '2 Weeks',
    daysPerWeek: '5days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/prompt-eng.jpg',
    level: 'Corporate Training'
  },
  {
    id: 15,
    category: 'TRAINING',
    title: 'Effective Public Speaking Skills',
    courseName: 'Public Speaking',
    duration: '2 Weeks',
    daysPerWeek: '5days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/public-speaking.jpg',
    level: 'Corporate Training'
  },
  {
    id: 16,
    category: 'TRAINING',
    title: 'Procurement & Supply Chain Basics',
    courseName: 'Procurement Fundamentals',
    duration: '2 Weeks',
    daysPerWeek: '5days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/procurement.jpg',
    level: 'Corporate Training'
  },
  {
    id: 17,
    category: 'TRAINING',
    title: 'Professional Photography Techniques',
    courseName: 'Photography',
    duration: '2 Weeks',
    daysPerWeek: '5days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/photography.jpg',
    level: 'Corporate Training'
  }
];

const filters = ['All', 'Foundation', 'Intermediate', 'Advanced', 'Corporate Training'];

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => course.level === activeFilter);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
              activeFilter === filter
                ? 'bg-gray-200 text-gray-900'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Courses Grid - 4 columns on both laptop and large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col p-4"
          >
            {/* Course Image */}
            <div className="relative h-48 rounded-xl mb-4 overflow-hidden bg-gray-100">
              <img 
                src={course.image} 
                alt={course.courseName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Course Content */}
            <div className="px-2 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {course.courseName}
              </h3>

              {/* Duration */}
              <div className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">Duration:</span> {course.duration} <span className="font-normal">{course.daysPerWeek}</span>
              </div>

              {/* Fees */}
              <div className="text-sm text-gray-700 mb-6 flex items-center gap-2">
                <span className="font-semibold">Fees:</span>
                {course.originalPrice && (
                  <span className="text-gray-400 line-through">
                    D{course.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-blue-600 font-bold text-lg">
                  D{course.currentPrice.toLocaleString()}
                </span>
              </div>

              {/* Course Overview Link */}
              <a
                href="#"
                className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors duration-300 mt-auto"
              >
                Course Overview
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}