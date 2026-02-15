"use client"

import React from "react"
import { motion } from "framer-motion"
import { Palette, Printer, Globe} from "lucide-react"


const services = [
  {
    title: "BRANDING",
    image: {
      icon: <Palette color="#2e72b3" size={50}  className="text-gray-900 mb-5"/>,
      width: 220,
      height: 200,
      alt: "Branding",
      position: {
        top: -90,
        left: 0
      }
    },
    description: "We craft bespoke brand identities designed to elevate businesses and create lasting recognition.",
    icon: "✨"
  },
  {
    title: "PRINT DESIGN",
    image: {
      icon: <Printer className="text-gray-900 mb-5" color="#2e72b3" size={50}/>,
      width: 400,
      height: 300,
      alt: "Print Design",
      position: {
        top: -100,
        left: -30
      }
    },
    description: "Premium print design that brings your brand to life beyond the screen.",
    icon: "🖨️"
  },
  {
    title: "WEB DESIGN - UI/UX",
    image: {
      icon: <Globe className="text-gray-900 mb-5" color="#2e72b3" size={50}/>,
      width: 370,
      height: 200,
      alt: "Web Design UI/UX",
      position: {
        top: -90,
        left: -30
      }
    },
    description: "Websites where strategy, design, and user experience work together to grow your business.",
    icon: "💡"
  }
]

const ServiceCard = ({ 
  service, 
  index, 
 
}: { 
  service: typeof services[0], 
  index: number, 
}) => {
  return (
    <motion.div
    variants={{
      hidden: { opacity: 0, x: 300 },
      visible: { opacity: 1, x: 0 }
    }}
    transition={{
      duration: 0.3,
    }}
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[200px] w-[90%]">
      {/* Image Container*/}
      <div className=" w-full flex items-center justify-start ">
        {service.image.icon }
      </div>

      {/* Text Container - down */}
      <div className="w-full text-start">
        <h3 className="text-lg text-zinc-800 font-bold uppercase">{service.title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  )
}

const ServiceCards = () => {
  return (
    <div className="bg-zinc-950 mt-[80vh]">
      {/* Non-sticky trigger wrapper */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
         transition={{
          staggerChildren: 0.3,
          delayChildren: 0.1,
          type: "spring",
          stiffness: 50,
        }}
      >
        <div className="sticky top-1/2 -translate-y-1/2 px-4">
          <div className="flex justify-center mb-12 md:mb-16">
            <motion.h2 className="text-xl sm:text-2xl md:text-4xl mb-15 font-bold text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
              WHAT CAN I <span className="text-blue-400">DESIGN</span> FOR YOU?
            </motion.h2>
          </div>

          {/* Service Cards Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ServiceCards