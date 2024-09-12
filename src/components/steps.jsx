import { MessageSquare, Code, Headphones } from "lucide-react"

export default function Steps() {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Initial Consultation",
      description: "Contact us to discuss your project details. We'll work together to understand your vision and requirements."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Development Phase",
      description: "Based on the project's complexity, we'll spend a few weeks crafting your MVP using NoCode tools. We keep you updated throughout the process."
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Presentation and Support",
      description: "We'll present your completed project and provide ongoing support. Together, we'll determine the next steps for your product's growth and success."
    }
  ]

  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent animate-pulse">
          How Our Service Works
        </h2>
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8 group">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-violet-600 text-white shadow-lg transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-violet-500/50">
                  {step.icon}
                </div>
              </div>
              <div className="flex-grow md:ml-4 text-center md:text-left">
                <h3 className="text-2xl font-bold text-violet-300 mb-4 group-hover:text-violet-400 transition-colors duration-300">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-1/2 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  )
}