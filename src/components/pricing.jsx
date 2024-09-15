'use client'

import { useState } from 'react'
import { Check, X, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: 'Basic',
    priceUSD: { min: 25, max: 50 },
    priceARS: { min: 30000, max: 60000 },
    features: [
      'Initial consultation',
      'Basic UI/UX design',
      'Simple MVP development',
      'Basic functional testing',
    ],
  },
  {
    name: 'Standard',
    priceUSD: { min: 80, max: 150 },
    priceARS: { min: 85000, max: 180000 },
    features: [
      'Detailed consultation',
      'Customizable UI/UX design',
      'Multi-page MVP development',
      'Comprehensive testing',
      'Basic launch support',
    ],
  },
  {
    name: 'Premium',
    priceUSD: { min: 200, max: 500 },
    priceARS: { min: 230000, max: 600000 },
    features: [
      'In-depth consultation',
      'Custom UI/UX design',
      'Advanced MVP development',
      'Extensive testing',
      'Full launch support',
      'Advanced analytics',
      'Post-launch support',
    ],
  },
]

export default function Pricing() {
  const [isArgentina, setIsArgentina] = useState(false)

  const formatPrice = (price, isARS) => {
    const formatter = new Intl.NumberFormat(isARS ? 'es-AR' : 'en-US', {
      style: 'currency',
      currency: isARS ? 'ARS' : 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    return `${formatter.format(price.min)} - ${formatter.format(price.max)}`
  }

  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600 animate-pulse sm:text-5xl">
            Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Choose the perfect plan for your project
          </p>
        </div>

        <div className="mt-8 flex justify-center items-center space-x-4">
          <Globe className="h-6 w-6 text-gray-400" />
          <span className="text-gray-300">USD</span>
          <Switch
            checked={isArgentina}
            onCheckedChange={setIsArgentina}
          />
          <span className="text-gray-300">ARS</span>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={plan.name} className="bg-gray-800 rounded-lg shadow-lg divide-y divide-gray-700 transition-all duration-300 hover:shadow-violet-500/20 hover:scale-105">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-4 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
                  {formatPrice(isArgentina ? plan.priceARS : plan.priceUSD, isArgentina)}
                </p>
                <a href='https://launchready.fillout.com/t/tNCx2FDgBvus' target='_blank'>
                  <Button className="mt-8 w-full bg-violet-600 hover:bg-violet-700 transition-colors duration-300">
                    Get started
                  </Button>
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wide">Whats included</h4>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" />
                      </div>
                      <p className="ml-3 text-sm text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-300 text-lg">
          Prices may vary depending on the difficulty of the project.
        </p>
      </div>
      <div className="absolute left-1/4 top-1/2 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  )
}