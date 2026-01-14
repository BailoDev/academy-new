'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How do I enroll in a course?',
    answer: 'Visit the school and buy the form, a link will be shared via email and register or contact this number +220 5293353 / 3696325.'
  },
  {
    question: 'Can I enroll in more than one course at a time?',
    answer: 'Yes you can enroll in two courses at the same time but you cannot enroll in an intermediate course and an advanced course at the same time'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Upon enrolling in the program and payment is done, we do not offer any form of refunding.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'payment is done through the bank at ecobank : 6240032289 or call +220 3314301. you can also pay through the site using Modem Pay.'
  },
  {
    question: 'What happens if I don\'t finish a course?',
    answer: 'After three weeks of not attending class without prior notification the institution has all rights to terminate your program.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-6 sm:px-8 lg:px-12 transition-all duration-500 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          // backgroundImage: '/card2.webp',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 z-0 bg-white/80 backdrop-blur-sm" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="absolute -top-12 left-0 w-20 h-20 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute -top-8 right-10 w-16 h-16 bg-purple-100 rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '75ms' }} />
        <div className="absolute top-1/4 -left-8 w-24 h-24 bg-indigo-100 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '150ms' }} />
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 transition-all duration-500">
          FAQ's
        </h2>
        
        <p className="text-center text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-12 lg:mb-16 leading-relaxed relative">
          <span className="inline-block mr-2 text-2xl">📚</span>
          Find answers to the most common questions about our services, process, and policies.
          <span className="inline-block ml-2 text-2xl">💡</span>
        </p>
        
        <div className="absolute bottom-20 right-0 w-20 h-20 bg-green-100 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-yellow-100 rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '100ms' }} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-0 lg:space-y-5 md:space-y-5">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-b-2 border-gray-200 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition-all duration-300"
                >
                  <span className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="pr-8">
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-8 order-first lg:order-last flex items-center justify-center">
            <div className="transition-all pt-0 scale-115 duration-500 hover:scale-105">
              <img
                src="/faq.png"
                alt="Person with laptop showing enthusiasm"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}