import { Mail, GitHub, Linkedin, Twitter, Rocket } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-700 text-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-3 group">
              <Rocket className="h-10 w-10 text-violet-500 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-2xl font-bold text-white tracking-wide">
                Launch<span className="text-violet-400">Ready</span>
              </span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              Transforming ideas into MVPs with NoCode solutions. We bring your vision to life efficiently and cost-effectively.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {['MVP Creation', 'NoCode Development', 'Rapid Prototyping', 'Market Validation'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; 2024 LaunchReady. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="mailto:contact@launchready.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-colors duration-300 shadow-lg hover:shadow-violet-500/50"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="absolute left-1/4 bottom-0 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </footer>
  )
}