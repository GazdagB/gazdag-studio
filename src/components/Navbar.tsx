'use client' 

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fira_Code } from 'next/font/google'
import Hamburger from 'hamburger-react'
import { usePathname } from 'next/navigation'

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        console.log("Current page:", pathname);
    }, [pathname]);

    const isActive = (path: string) => pathname === path;

  return (
    <div className='py-5 px-5 flex items-center justify-between max-w-[1200px] w-full'>
        <Link href={"/"}>
            <Image src="/gs_logo_white.svg" alt="Logo" width={100} height={100}></Image>
        </Link>

        <ul className={`${firaCode.className} flex ms-10`}>
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

        <div className='flex gap-5 items-center'>
            <button className='bg-[#e85d06] cursor-pointer text-black h-8 px-6 rounded-lg'>Webshop</button>
            <div className='w-5'>
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
            </div>
        </div>
    </div>
  )
}

export default Navbar