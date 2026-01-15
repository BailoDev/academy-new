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
    // FOUNDATION COURSES
    id: 1,
    category: 'Digital Technology',
    title: 'Creating Stunning UI Design with Figma',
    courseName: 'Found Digital Technology',
    duration: '12 Weeks',
    daysPerWeek: '3days/Week',
    originalPrice: 4500,
    currentPrice: 4000,
    isFree: false,
    image: '/digitalTechnology.jpg',
    level: 'Foundation'
  },
  {
    id: 2,
    category: 'Analytics',
    title: 'Mastering Responsive Web Design Techniques',
    courseName: 'Data Literacy & Analytics',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 5500,
    currentPrice: 5000,
    isFree: false,
    image: '/courses/dataLiteracy.webp',
    level: 'Foundation'
  },

  // INTERMEDIATE COURSES
  {
    id: 3,
    category: 'Analytics',
    title: 'Building Chatbots with OpenAI\'s GPT',
    courseName: 'Data Science (Int)',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 1000,
    currentPrice: 8000,
    isFree: false,
    image: '/dataScience.jpg',
    level: 'Intermediate'
  },
  {
    id: 4,
    category: 'Analytics',
    title: 'Data Analytics',
    courseName: 'Data Analytics (Int)',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 10000,
    currentPrice: 8000,
    isFree: false,
    image: '/dataAnalytics.jpg',
    level: 'Intermediate'
  },
  {
    id: 6,
    category: 'Marketing',
    title: 'Digital Marketing',
    courseName: 'Digital Marketing (Int)',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 10000,
    currentPrice: 8000,
    isFree: false,
    image: '/digitalMarketing.webp',
    level: 'Intermediate'
  },
  {
    id: 6,
    category: 'Design',
    title: 'Graphic Design',
    courseName: 'Graphic Desing (Int)',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 10000,
    currentPrice: 8000,
    isFree: false,
    image: '/graphicDesign.webp',
    level: 'Intermediate'
  },
  {
    id: 6,
    category: 'Security',
    title: 'Cyber Security',
    courseName: 'Cyber Security (Int)',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 10000,
    currentPrice: 8000,
    isFree: false,
    image: '/cyberSecurity.webp',
    level: 'Intermediate'
  },


  // ADVANCED COURSES
  {
    id: 4,
    category: 'Analytics',
    title: 'Data Analytics',
    courseName: 'Data Analytics (Adv)',
    duration: '16 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 12500,
    currentPrice: 12000,
    isFree: false,
    image: '/courses/dataAnalyticsA.webp',
    level: 'Advanced'
  },
  {
    id: 5,
    category: 'DEVELOPMENT',
    title: 'Introduction to Python for analyst',
    courseName: 'Data Science (Adv)',
    duration: '12 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 12500,
    currentPrice: 12000,
    isFree: false,
    image: '/courses/dataScienceA.jpg',
    level: 'Advanced'
  },
  {
    id: 6,
    category: 'Marketing',
    title: 'Digital Marketing',
    courseName: 'Digital Marketing (Adv)',
    duration: '16 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 12500,
    currentPrice: 12000,
    isFree: false,
    image: '/courses/digitalMarketing.jpg',
    level: 'Advanced'
  },
  {
    id: 6,
    category: 'Design',
    title: 'Graphic Desing',
    courseName: 'Graphic Desing (Adv)',
    duration: '16 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 12500,
    currentPrice: 12000,
    isFree: false,
    image: '/courses/graphicDesign.webp',
    level: 'Advanced'
  },
  {
    id: 6,
    category: 'Security',
    title: 'Cyber Security',
    courseName: 'Cyber Security (Adv)',
    duration: '16 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 12500,
    currentPrice: 12000,
    isFree: false,
    image: '/courses/cyberSecurity.webp',
    level: 'Advanced'
  },

  // CORPORATE COURSES
  {
    id: 9,
    category: 'TRAINING',
    title: 'Statistical Analysis for Business',
    courseName: 'Stata',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/stata.jpg',
    level: 'Corporate Training'
  },
  {
    id: 10,
    category: 'TRAINING',
    title: 'Strategic Business Development',
    courseName: 'Business Development',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/businessDevelopment.jpg',
    level: 'Corporate Training'
  },
  {
    id: 11,
    category: 'TRAINING',
    title: 'Data Visualization with Tableau',
    courseName: 'Analytics With Tableau',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/tableau.jpg',
    level: 'Corporate Training'
  },
  {
    id: 12,
    category: 'TRAINING',
    title: 'Financial Analysis & Reporting',
    courseName: 'Financial Analysis',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/financialAnalysis.webp',
    level: 'Corporate Training'
  },
  {
    id: 13,
    category: 'TRAINING',
    title: 'Financial Technology Solutions',
    courseName: 'Fintech',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/fintech.webp',
    level: 'Corporate Training'
  },
  {
    id: 14,
    category: 'TRAINING',
    title: 'AI Prompt Engineering Mastery',
    courseName: 'Prompt Engineering',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/promptEngineering.webp',
    level: 'Corporate Training'
  },
  {
    id: 15,
    category: 'TRAINING',
    title: 'Effective Public Speaking Skills',
    courseName: 'Public Speaking',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/publicSpeaking.webp',
    level: 'Corporate Training'
  },
  {
    id: 16,
    category: 'TRAINING',
    title: 'Procurement & Supply Chain Basics',
    courseName: 'Procurement Fundamentals',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/procurement.jpeg',
    level: 'Corporate Training'
  },
  {
    id: 17,
    category: 'TRAINING',
    title: 'Professional Photography Techniques',
    courseName: 'Photography',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/photography.webp',
    level: 'Corporate Training'
  },
  {
    id: 17,
    category: 'TRAINING',
    title: 'Professional Photography Techniques',
    courseName: 'Project Management',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/projectManagement.webp',
    level: 'Corporate Training'
  },
  {
    id: 17,
    category: 'TRAINING',
    title: 'Professional Photography Techniques',
    courseName: 'Personal Branding',
    duration: '2 Weeks',
    daysPerWeek: '2days/Week',
    originalPrice: 2000,
    currentPrice: 1500,
    isFree: false,
    image: '/courses/personalBranding.jpg',
    level: 'Corporate Training'
  },

];

const filters = ['All', 'Foundation', 'Intermediate', 'Advanced', 'Corporate Training'];

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesLevel = activeFilter === 'All' || course.level === activeFilter;
    const matchesSearch = searchQuery === '' || 
      course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Filter Tabs and Search Bar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex gap-4 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-gray-200 text-gray-900'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
          </div>
          
          {/* Search Bar */}
          <div className="relative w-64 flex-shrink-0">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Courses Grid - 4 columns on both laptop and large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Course Image */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.courseName}
                </h3>

                {/* Duration */}
                <div className="text-sm text-gray-600 mb-3">
                  <p>Duration: {course.duration}</p>
                  <p>{course.daysPerWeek}</p>
                </div>

                {/* Fees */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Fees:</p>
                  <div className="flex items-center gap-2">
                    {course.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        D{course.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-lg font-bold text-green-600">
                      D{course.currentPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Course Overview Link */}
                <a href="#" className="text-blue-600 hover:underline text-sm">
                  Course Overview
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}