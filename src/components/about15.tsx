import ButtonSt from "./button-standard-3";
import { cn } from "@/lib/utils";
import {Download} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface About15Props {
  className?: string;
}

const About15 = ({ className }: About15Props) => {
  return (
    <section
      className={cn("dark bg-background py-32 text-foreground", className)}
    >
      <div className="container flex flex-col items-center justify-center gap-25 lg:flex-row lg:gap-[10vw]">
        <div className="text-white px-20">
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
        </div>
        <div className="w-md space-y-6">
          <h1 className="mb-15 text-5xl font-medium tracking-tight">
            Design that shapes how your business is seen — online and in the real world.
            
          </h1>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            voluptate saepe quas cum reprehenderit eligendi inventore animi
            excepturi sapiente earum.
          </p>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            voluptate saepe quas cum reprehenderit eligendi inventore animi
            excepturi sapiente earum.
          </p>
          <div className="flex gap-5">
            <ButtonSt cursorP={true} title={"More about me"}></ButtonSt>
            <ButtonSt icon={<Download/>} bgColor={"#0000"} cursorP={true} title={"Download Resume"}></ButtonSt>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About15 };
