import CenterImage from "../../components/common/CenterImage";
import { ReactLenis } from 'lenis/react'
import ServiceCards from "../../components/common/ServiceCards";
import { Projects5 } from "@/components/projects5";
import { About15 } from "@/components/about15";
import { Contact2 } from "@/components/contact2";
import { Blog21 } from "@/components/blog21";
const HERO_SECTION_HEIGHT = 2700;

const page = () => {
  return (
    <ReactLenis root options={{ lerp: 0.10 }}>
      <div className="bg-zinc-950 flex flex-col items-center justify-center text-white w-full">
        
        {/* Hero Section */}
        <div 
          className="relative w-full" 
          style={{ height: `calc(${HERO_SECTION_HEIGHT}px + 100vh)` }}
        >
          <CenterImage sectionHeight={HERO_SECTION_HEIGHT} />
          <div className="absolute bottom-0 left-0 right-0 h-90 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>

        {/* Service Cards Section */}
        <ServiceCards/>
        
        {/* Extra space alul */}
        <About15></About15>
      <Projects5></Projects5>
      <Contact2 className="max-w-[1200px] w-full flex items-center justify-center"></Contact2>
      <Blog21></Blog21>
      </div>


    </ReactLenis>
  )
}

export default page