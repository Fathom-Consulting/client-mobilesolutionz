import { Car, SprayCanIcon as Spray, PaintBucket, Wrench } from 'lucide-react'

const services = [
  {
    name: 'Interior Detailing',
    icon: Car,
    description: 'Deep cleaning of your car\'s interior, including vacuuming, steam cleaning, and surface treatment.'
  },
  {
    name: 'Exterior Detailing',
    icon: Spray,
    description: 'Thorough cleaning and protection of your car\'s exterior, including washing, clay bar treatment, and waxing.'
  },
  {
    name: 'Ceramic Coating',
    icon: PaintBucket,
    description: 'Long-lasting protection for your car\'s paint with a ceramic coating that enhances gloss and repels dirt.'
  },
  {
    name: 'Paint Correction',
    icon: Wrench,
    description: 'Removal of swirl marks, scratches, and other imperfections to restore your car\'s paint to its original glory.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 pb-32 bg-black">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
      Our Premium Services
    </h2>
    <div 
      className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-4 
        gap-8 
        items-stretch
        auto-rows-fr
      "
    >
      {services.map((service) => (
        <div key={service.name} className="group relative overflow-visible h-full flex flex-col">
          {/* The 'card' itself */}
          <div
            className="
              bg-white/10 
              backdrop-blur-sm 
              p-8 
              rounded-2xl 
              border border-white/10 
              hover:border-[#606c38] 
              transition-all 
              duration-300 
              transform hover:-translate-y-4 
              flex-grow
            "
          >
            <service.icon className="w-12 h-12 text-[#606c38] mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-white">{service.name}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

