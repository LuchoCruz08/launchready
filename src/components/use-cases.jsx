'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const useCases = [
  "Startup Validation", "Small Business Digital Transformation", "Product Launch Preparation",
  "Internal Tool for Process Automation", "Event Management", "E-commerce Store",
  "Non-Profit Fundraising Platform", "Educational Course Platform", "Market Research Tool",
  "Community Engagement Platform", "Prototype for Investor Pitch", "On-Demand Service Platform",
  "Membership Site", "CRM System for Small Businesses", "Health and Wellness App",
  "Custom Survey Tool", "Crowdsourcing Platform", "Rental Booking System",
  "Interactive Portfolio for Creatives", "Appointment Scheduling App", "Employee Onboarding Tool",
  "Loyalty Program Platform", "Virtual Event Platform", "Personal Finance Tracker",
  "Job Board Platform", "Digital Menu for Restaurants", "Custom Learning Management System (LMS)",
  "Task Management Tool for Teams", "Content Curation Platform", "Subscription Box Service"
]

export default function UseCases() {
  const [startIndex, setStartIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const displayCount = 6

  const nextSet = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setStartIndex((prevIndex) => (prevIndex + displayCount) % useCases.length)
    }
  }

  const prevSet = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setStartIndex((prevIndex) => (prevIndex - displayCount + useCases.length) % useCases.length)
    }
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600 text-center mb-8 animate-pulse">
          Use Cases
        </h2>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {useCases.slice(startIndex, startIndex + displayCount).map((useCase, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-lg p-4 text-center transition-all duration-500 hover:bg-gray-700 hover:shadow-lg hover:shadow-violet-500/20 transform hover:scale-105 ${
                  isAnimating ? 'animate-fade-in' : ''
                }`}
              >
                <p className="text-gray-300 text-sm font-medium">{useCase}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSet}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-gray-800 hover:bg-gray-700 border-violet-500 text-violet-500 hover:text-violet-400"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous set</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSet}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full bg-gray-800 hover:bg-gray-700 border-violet-500 text-violet-500 hover:text-violet-400"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next set</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute left-1/4 top-1/2 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </section>
  )
}