'use client'
import ButtonSt from "./button-standard-3";
import { cn } from "@/lib/utils";
import {Download} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface About15Props {
  className?: string;
}

const About15 = ({ className }: About15Props) => {
  return (
    <section
      className={cn("dark bg-background py-32 text-foreground", className)}
    >
      <div className="container flex flex-col items-center justify-center gap-25 lg:flex-row lg:gap-[10vw]">
        {/* Image and Text Content */}
        <motion.div 
        initial={{ opacity: 0, x: 200 }}
        viewport={{ once: true, amount: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        
        className="text-white px-20">
          <Link href={"/about"}>
            <Image
            width={400}
            height={400}
              src="/branding/gs_hero_image_blue_1.png"
              alt=""
              className="  object-contain"
            />
          </Link>

          <div className="pt-2 pb-1">
            <p className="text-lg font-medium tracking-tight text-white">
              Gazdag Balázs
            </p>
            <p className="text-sm text-white/50">@gazdag_b</p>
          </div>
        </motion.div>
        {/* Text Content */}
        <motion.div className="w-md space-y-6"
        initial='hidden'
        viewport={{ once: false, amount: 1 }}
        whileInView='visible'
        transition={{
          staggerChildren: 0.3,
          delayChildren: 0.1,
          type: "spring",
          stiffness: 50,
        }}
        >
          <motion.h2
          transition={{
            duration: 0.3,
        
          }}
          variants={{
      hidden: { opacity: 0, x: 300 },
      visible: { opacity: 1, x: 0 }
    }}  className="mb-10 text-5xl font-medium tracking-tight">
            Design that shapes how your business is seen — online and in the real world.
            
          </motion.h2>
          <motion.p 
          variants={{
            hidden: { opacity: 0, x: 300 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{
            duration: 0.3,
          
          }}
          className="text-sm lg:text-base">
            I help businesses build cohesive brand experiences across digital and physical touchpoints — from brand identity and websites to print and environmental design. Every detail works together to create recognition, trust, and lasting impact.
          </motion.p>
       
          <motion.div
         variants={{
      hidden: { opacity: 0, x: 300 },
      visible: { opacity: 1, x: 0 }
    }}
    transition={{
      duration: 0.3, 
     
    }}
          className="flex gap-5">
            <ButtonSt cursorP={true} title={"More about me"}></ButtonSt>
            <ButtonSt icon={<Download/>} bgColor={"#0000"} cursorP={true} title={"Download Resume"}></ButtonSt>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { About15 };
