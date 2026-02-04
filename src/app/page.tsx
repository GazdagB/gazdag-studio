import Image from "next/image";
import { Fira_Code } from 'next/font/google'
import Link from "next/link";


const firaCode = Fira_Code({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function Home() {
  return (
    <div className="flex py-10 lg:py-0 flex-col items-center gap-10 justify-center min-h-screen p-4">
      <Image className="ms-5 my-10 lg:my-0 w-[200px] lg:w-[300px]" src="/gs_logo_vertical_white.svg" alt="Gazdag Studio Logo" width={300} height={150}></Image>
      
      {/* Container - flex-col on mobile, flex-row on lg */}
      <div className="flex flex-col px-5 lg:flex-row gap-4 w-full max-w-6xl group">
        
        {/* Image 1 - Graphic Design */}
        <div className="flex-1 lg:hover:flex-[3] lg:group-hover:flex-[0.8] transition-all duration-500">
          <Link href={"/design"} className="block h-full">
            <div className="relative cursor-pointer h-[180px] md:h-[250px] lg:h-[400px] transition-all duration-500 ease-in-out 
                  overflow-hidden rounded-lg">
              <Image 
                src="/graphic-design.gif" 
                alt="Graphic Design" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 lg:hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h2 className={`${firaCode.className} text-white text-lg font-bold`}>Graphic Design</h2>
              </div>
            </div>
            {/* Mobile label - only shows on mobile */}
            <p className={`${firaCode.className} text-white text-center mt-2 lg:hidden`}>Graphic Design</p>
          </Link>
        </div>

        {/* Image 2 - Web Development */}
        <div className="flex-1 lg:hover:flex-[3] lg:group-hover:flex-[0.8] transition-all duration-500">
          <Link href={"/development"} className="block h-full">
            <div className="relative cursor-pointer h-[180px] md:h-[250px] lg:h-[400px] transition-all duration-500 ease-in-out 
                  overflow-hidden rounded-lg">
              <Image 
                src="/graphic-design.gif" 
                alt="Web Development" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 lg:hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h2 className={`${firaCode.className} text-white text-lg font-bold`}>Web Development</h2>
              </div>
            </div>
            {/* Mobile label - only shows on mobile */}
            <p className={`${firaCode.className} text-white text-center mt-2 lg:hidden`}>Web Development</p>
          </Link>
        </div>

        {/* Image 3 - Custom Creations */}
        <div className="flex-1 lg:hover:flex-[3] lg:group-hover:flex-[0.8] transition-all duration-500">
          <Link href={"/decor"} className="block h-full">
            <div className="relative cursor-pointer h-[180px] md:h-[250px] lg:h-[400px] transition-all duration-500 ease-in-out 
                  overflow-hidden rounded-lg">
              <Image 
                src="/graphic-design.gif" 
                alt="Custom Creations" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 lg:hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h2 className={`${firaCode.className} text-white text-lg font-bold`}>Custom Creations</h2>
              </div>
            </div>
            {/* Mobile label - only shows on mobile */}
            <p className={`${firaCode.className} text-white text-center mt-2 lg:hidden`}>Custom Creations</p>
          </Link>
        </div>

      </div>

      <p className={`${firaCode.className} mt-10 text-sm lg:text-md text-white/50`}>Where creativity meets craft.</p>
    </div>
  );
}