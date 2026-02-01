"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface ServiceCardsProps {
  sectionHeight: number
}

const services = [
  {
    title: "BRANDING",
    image: {
      src: "/branding.png",
      width: 220,
      height: 200,
      alt: "Branding",
      position: {
        top: -90,
        left: 0
      }
    },
    description: "Egyedi arculatok, márka tervezés online megjelenés, logók készítése",
    icon: "✨"
  },
  {
    title: "PRINT DESIGN",
    image: {
      src: "/printer.png",
      width: 400,
      height: 300,
      alt: "Print Design",
      position: {
        top: -100,
        left: -30
      }
    },
    description: "Egyedi arculatok készítése vállalkozásoknak",
    icon: "🖨️"
  },
  {
    title: "WEB DESIGN - UI/UX",
    image: {
      src: "/ui-ux.png",
      width: 370,
      height: 200,
      alt: "Web Design UI/UX",
      position: {
        top: -90,
        left: -30
      }
    },
    description: "Egyedi arculatok készítése vállalkozásoknak",
    icon: "💡"
  }
]

const ServiceCard = ({ 
  service, 
  index, 
  sectionHeight 
}: { 
  service: typeof services[0], 
  index: number, 
  sectionHeight: number 
}) => {
  const { scrollY } = useScroll()

  const DELAY = 500

  const cardX = useTransform(
    scrollY,
    [
      sectionHeight + 800 + (index * DELAY),
      sectionHeight + 1400 + (index * DELAY)
    ],
    [500, 0]
  )

  const cardOpacity = useTransform(
    scrollY,
    [
      sectionHeight + 800 + (index * DELAY),
      sectionHeight + 1400 + (index * DELAY)
    ],
    [0, 1]
  )

  return (
    <motion.div
      className="bg-white relative rounded-lg shadow-lg flex flex-col items-center text-center h-[230px] w-full"
      style={{
        x: cardX,
        opacity: cardOpacity
      }}
    >
      {/* Image Container*/}
      <div className="relative w-full h-[110px] flex items-center justify-center ">
        <Image 
          src={service.image.src} 
          width={service.image.width} 
          height={service.image.height} 
          alt={service.image.alt}
          style={{
            position: 'absolute',
            top: `${service.image.position.top}px`,
            left: `${service.image.position.left}px`,
          }}
          className="object-contain"
        />
      </div>

      {/* Text Container - down */}
      <div className="p-6 w-full text-start">
        <h3 className="text-lg text-zinc-800 font-bold mb-2 uppercase">{service.title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  )
}

const ServiceCards = ({ sectionHeight }: ServiceCardsProps) => {
  const { scrollY } = useScroll()

  const titleOpacity = useTransform(
    scrollY,
    [sectionHeight + 350, sectionHeight + 800, sectionHeight + 4000],
    [0, 1, 1]
  )

  const titleY = useTransform(
    scrollY,
    [sectionHeight + 350, sectionHeight + 800],
    [100, 0]
  )

  return (
    <div className="relative" style={{ height: '300vh' }}>
      {/* Container mindkettőnek - KÖZÉPEN */}
      <div className="sticky top-1/2 -translate-y-1/2 px-4">
        {/* Sticky szöveg */}
        <motion.div 
          className="flex justify-center mb-12 md:mb-16"
          style={{ 
            opacity: titleOpacity,
            y: titleY
          }}
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl mb-15 font-bold text-center">
            WHAT CAN I <span className="text-blue-400">DESIGN</span> FOR YOU?
          </h2>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                index={index}
                sectionHeight={sectionHeight}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCards