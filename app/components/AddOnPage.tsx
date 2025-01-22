import Link from 'next/link'
import Image from 'next/image'

interface AddOnPageProps {
  title: string
  description: string
  benefits: string[]
  process: string[]
  imageSrc: string
}

export default function AddOnPage({ title, description, benefits, process, imageSrc }: AddOnPageProps) {
  return (
    <div className="text-white p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-300 mb-8">{description}</p>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#606c38] mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={400}
            className="rounded-lg mb-8"
          />
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
            <ol className="space-y-2">
              {process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#606c38] mr-2 font-semibold">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <Link 
            href="/#contact" 
            className="bg-[#606c38] text-white px-8 py-3 rounded-full hover:bg-[#515c30] transition-all duration-300 inline-block"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
