'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "What is an MVP, and why do I need one?",
    answer: "An MVP, or Minimum Viable Product, is the simplest version of your product that allows you to test your business idea with real users. It helps you validate the concept before investing in a full-scale development, saving time and money."
  },
  {
    question: "How long does it take to develop an MVP?",
    answer: "The timeline for developing an MVP varies depending on the complexity of the project. Generally, it can take anywhere from 2 to 12 weeks. We work closely with you to establish a clear timeline and keep you informed throughout the process."
  },
  {
    question: "Can I scale my MVP into a full product later?",
    answer: "An MVP is just the starting point. Once your idea is validated, we can help you scale it into a fully-fledged product by adding more features and functionality as needed."
  },
  {
    question: "What happens after the MVP is built?",
    answer: "After delivering your MVP, we offer support to help you test it with users, gather feedback, and make necessary adjustments. If your MVP is successful, we can assist in scaling it into a full product."
  },
  {
    question: "How much does it cost to develop an MVP?",
    answer: "Our pricing plans start at $25 USD or $30.000 ARS. The cost depends on the complexity of your project and the features you want to include in your MVP. We offer flexible pricing to suit different budgets."
  },
  {
    question: "Do I need technical knowledge to work with you?",
    answer: "No technical knowledge is required! We handle all the technical aspects, allowing you to focus on your business. We also explain everything in simple terms so that you're always in the loop."
  },
  {
    question: "What if I want to add more features to my MVP later?",
    answer: "You can easily add more features to your MVP as your business evolves. We offer ongoing development services to help you expand your product as needed."
  },
  {
    question: "Can you help with marketing and launching my MVP?",
    answer: "Yes, we can assist with marketing strategies and launch planning to ensure your MVP reaches the right audience and gains traction in the market."
  },
  {
    question: "What kind of support do you provide after the launch?",
    answer: "We provide ongoing support to help you manage, update, and optimize your MVP. This includes troubleshooting, adding new features, and ensuring the product runs smoothly."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply contact us through our email, and we'll set up a consultation to discuss your project and determine the best plan of action."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600 text-center mb-12 animate-pulse">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-violet-500/20 transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-violet-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/4 top-1/2 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </section>
  )
}