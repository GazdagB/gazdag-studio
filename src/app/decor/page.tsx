import Navbar from "@/components/Navbar"
import CenterImage from "../components/CenterImage";
import { ReactLenis } from 'lenis/react'

const SECTION_HEIGHT = 2500;

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white">
   
     <Navbar></Navbar>
    <div className="text-white flex items-center justify-center w-full">
       

    <div className="relative w-full" 
    
    style={{height: `calc(${SECTION_HEIGHT}px + 100vh)`}}
    >

      <ReactLenis root
      options={{
        lerp: 0.10
      }}
      >

      </ReactLenis>
      <CenterImage sectionHeight={SECTION_HEIGHT}/>
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950"></div>

      <div className="h-1000"></div>
    </div>
    </div>
     </div>
  )
}

export default page