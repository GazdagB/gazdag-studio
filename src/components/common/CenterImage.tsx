"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface CenterImageProps {
  sectionHeight: number
}

const CenterImage = ({ sectionHeight }: CenterImageProps) => {
  const { scrollY } = useScroll()

  const opacity = useTransform(
    scrollY, 
    [sectionHeight, sectionHeight + 500], 
    [1, 0]
  )

  const scale = useTransform(
    scrollY,
    [0, sectionHeight + 500],
    [1.7, 1]
  )

  const clip1 = useTransform(scrollY, [0, sectionHeight], [25, 0])
  const clip2 = useTransform(scrollY, [0, sectionHeight], [75, 100])

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden"
      style={{ 
        opacity
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          clipPath: useTransform(
            [clip1, clip2],
            ([c1, c2]) => `polygon(${c1}% ${c1}%, ${c2}% ${c1}%, ${c2}% ${c2}%, ${c1}% ${c2}%)`
          )
        }}
      >
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          src="/test-vid.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          style={{ scale }}
        />
      </motion.div>
    </motion.div>
  )
}

export default CenterImage