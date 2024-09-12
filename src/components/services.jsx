import { Rocket, Target, Code, Zap, Users, TrendingUp } from "lucide-react"

export default function Services() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white relative overflow-hidden">
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 mx-auto relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent animate-pulse">
            Our Services
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            We transform your digital business ideas into reality using NoCode tools. From MVP creation to full development, were here to bring your vision to life efficiently and cost-effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Rocket className="size-6" />,
              title: "MVP Creation",
              description: "Fast and cost-effective development of functional MVPs using cutting-edge NoCode tools, bringing your ideas to life quickly."
            },
            {
              icon: <Target className="size-6" />,
              title: "Market Validation",
              description: "We assist in launching your MVP to test market response, helping you validate your concept before further investment."
            },
            {
              icon: <Code className="size-6" />,
              title: "Full Development",
              description: "For successful MVPs, we offer end-to-end programming and development services to expand your product into a fully functional digital solution."
            },
            {
              icon: <Zap className="size-6" />,
              title: "Rapid Prototyping",
              description: "Quickly turn your ideas into interactive prototypes using NoCode tools, allowing for fast iteration and user testing."
            },
            {
              icon: <Users className="size-6" />,
              title: "User-Centric Design",
              description: "We focus on creating intuitive and engaging user experiences, ensuring your product resonates with your target audience."
            },
            {
              icon: <TrendingUp className="size-6" />,
              title: "Scalability Planning",
              description: "We design your MVP with growth in mind, ensuring a smooth transition from prototype to a fully-fledged product as your business expands."
            }
          ].map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 shadow-lg transition-all duration-300 ease-in-out hover:shadow-violet-500/20 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <span className="shrink-0 rounded-full bg-violet-600 p-4 shadow-lg animate-bounce">
                  {service.icon}
                </span>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}