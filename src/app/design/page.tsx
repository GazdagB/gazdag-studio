import Navbar from "@/components/common/Navbar"
import CenterImage from "../../components/common/CenterImage";
import { ReactLenis } from 'lenis/react'
import ServiceCards from "../../components/common/ServiceCards";
import { Projects5 } from "@/components/projects5";

const HERO_SECTION_HEIGHT = 2500;
const SERVICES_SECTION_HEIGHT = 2500;

const page = () => {
  return (
    <ReactLenis root options={{ lerp: 0.10 }}>
      <div className="bg-zinc-950 flex flex-col items-center justify-center text-white">
        <Navbar />
        
        {/* Hero Section */}
        <div 
          className="relative w-full" 
          style={{ height: `calc(${HERO_SECTION_HEIGHT}px + 100vh)` }}
        >
          <CenterImage sectionHeight={HERO_SECTION_HEIGHT} />
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
        </div>

        {/* Service Cards Section */}
        <ServiceCards sectionHeight={SERVICES_SECTION_HEIGHT} />
        
        {/* Extra space alul */}
        <div className="h-50" />
      <Projects5></Projects5>
      </div>


    </ReactLenis>
  )
}

export default page