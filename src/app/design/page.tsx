import Navbar from "@/components/Navbar"
import CenterImage from "../components/CenterImage";
import { ReactLenis } from 'lenis/react'
import ServiceCards from "../components/ServiceCards";

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
        <div className="h-screen" />
      </div>
    </ReactLenis>
  )
}

export default page