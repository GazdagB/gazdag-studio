'use client' 

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fira_Code } from 'next/font/google'
import Hamburger from 'hamburger-react'
import { usePathname } from 'next/navigation'
import { Palette, Code2, Sparkles, ShoppingBag } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const pathname = usePathname()

    const { scrollY } = useScroll();

    useEffect(() => {
        console.log("Current page:", pathname);
    }, [pathname]);

    const isActive = (path: string) => pathname === path;
    
    if(pathname === "/") return null;

  const menuItems = ['About', 'Services', 'Projects', 'Contact'];

  return (
    <>

    <motion.div
    style={{
     
    }}
    className='py-5 mt-4. bg-black/90 backdrop:blur-2xl mt-4  text-white rounded-lg px-10 fixed top-0 z-30 flex items-center justify-between max-w-[1200px] w-full'>
        <Link href={"/"}>
            <Image src="/gs_logo_white.svg" alt="Logo" width={100} height={100}></Image>
        </Link>

        <ul className={`${firaCode.className} ms-10 hidden md:flex`}>
            <li className={`flex flex-col mx-3 items-center justify-center ${isActive('/design') ? 'text-[#06ace8]' : ''}`}>
                <Link href={"/design"}>Design</Link> 
                {isActive('/design') && <div className='h-[5px] rounded-full w-[80%] bg-[#06ace8]'></div>}
            </li>
            <li className={`flex flex-col mx-3 items-center justify-center ${isActive('/development') ? 'text-[#06ace8]' : ''}`}>
                <Link href={"/development"}>Development</Link>
                {isActive('/development') && <div className='h-[5px] rounded-full w-[80%] bg-[#06ace8]'></div>}
            </li>
            <li className={`flex flex-col mx-3 items-center justify-center ${isActive('/decor') ? 'text-[#06ace8]' : ''}`}>
                <Link href={"/decor"}>Decor</Link>
                {isActive('/decor') && <div className='h-[5px] rounded-full w-[80%] bg-[#06ace8]'></div>}
            </li>
        </ul>

        <div className='gap-5 items-center flex '>
            <button className='bg-[#e85d06] hidden sm:block cursor-pointer text-black h-8 px-6 rounded-lg'>Webshop</button>
            <div className='w-5'>
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
    </motion.div>


 <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-xl flex items-center justify-center h-screen bg-gray-600/50 md:w-[35%] backdrop-blur-lg fixed top-0 right-0 w-full z-10"
    >
      <ul className="flex gap-6 flex-col justify-center items-center w-full px-8">
        {menuItems.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: isOpen ? index * 0.08 + 0.15 : 0 }}
            className="group relative"
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-light text-white transition-all duration-300 hover:translate-x-2 hover:font-normal relative inline-block py-2"
            >
              {/* Orange accent line */}
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-3 transition-all duration-300" />
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>


<div className='flex items-center justify-center md:hidden h-24 w-full fixed bottom-0 z-10 px-10 pb-4'>
    <div className='bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl flex items-center justify-center w-full max-w-md h-16 border border-gray-200 px-4'>
        <ul className='flex justify-between items-center w-full'>
            <li className={`relative group cursor-pointer flex flex-col items-center gap-0.5 ${isActive('/design') ? 'text-black' : ''}`}>
                <Link href={"/design"} className='flex flex-col items-center gap-0.5 p-2'>
                    <Palette className={`w-6 h-6 transition-colors ${isActive('/design') ? 'text-black' : 'text-gray-600 group-hover:text-black'}`} strokeWidth={2} />
                    <span className={`font-semibold text-[10px] transition-colors ${isActive('/design') ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
                        Design
                    </span>
                </Link>
                {isActive('/design') && <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full'></span>}
            </li>
            <li className={`relative group cursor-pointer flex flex-col items-center gap-0.5 ${isActive('/development') ? 'text-black' : ''}`}>
                <Link href={"/development"} className='flex flex-col items-center gap-0.5 p-2'>
                    <Code2 className={`w-6 h-6 transition-colors ${isActive('/development') ? 'text-black' : 'text-gray-600 group-hover:text-black'}`} strokeWidth={2} />
                    <span className={`font-semibold text-[10px] transition-colors ${isActive('/development') ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
                        Development
                    </span>
                </Link>
                {isActive('/development') && <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full'></span>}
            </li>
            <li className={`relative group cursor-pointer flex flex-col items-center gap-0.5 ${isActive('/decor') ? 'text-black' : ''}`}>
                <Link href={"/decor"} className='flex flex-col items-center gap-0.5 p-2'>
                    <Sparkles className={`w-6 h-6 transition-colors ${isActive('/decor') ? 'text-black' : 'text-gray-600 group-hover:text-black'}`} strokeWidth={2} />
                    <span className={`font-semibold text-[10px] transition-colors ${isActive('/decor') ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>
                        Decor
                    </span>
                </Link>
                {isActive('/decor') && <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full'></span>}
            </li>
            
            {/* Webshop button - csak mobilon jelenik meg */}
            <li className='sm:hidden'>
                <button className='bg-[#e85d06] hover:bg-[#d95505] transition-colors text-white h-10 w-10 rounded-xl flex items-center justify-center shadow-lg'>
                    <ShoppingBag className='w-5 h-5' strokeWidth={2} />
                </button>
            </li>
        </ul>
    </div>
</div>
    </>
  )
}

export default Navbar