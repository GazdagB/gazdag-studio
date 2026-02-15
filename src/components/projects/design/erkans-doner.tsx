import React from "react";
import Image from "next/image";

const ErkansDoner = () => {
  return (
    <div className="w-full">
      <p className="text-gray-500 text-pretty mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
        This logo was made for a real functioning restaurant in Nürnberg
        Germany. With passion and love. After Being open fur the public for more
        than 14 years it did close up for a while and re-opened in 2026 January.
        On the first they they sold hundreds of döners with their opening
        promotion of döner menü for 4€.
      </p>

      <h2 className="text-3xl mb-3 font-bold">Early Drafts & Explorations</h2>
      <div className="w-full mb-10">
        <Image
          className="w-full h-auto rounded-md sm:rounded-lg"
          width={2000}
          height={800}
          src={"/projects/design/erkans/studies1.png"}
          alt="Erkan's Döner design studies"
          priority
          quality={90}
        />
      </div>

      <p className="text-gray-500 text-pretty mb-10 text-xs sm:text-sm md:text-base leading-relaxed">
        Starting with a reference photo from the client, I sketched the initial
        concepts in Procreate on iPad. AI tools helped refine the rough
        sketches, but the final touch happened in Illustrator—where I manually
        adjusted the AI elements, adding imperfections and character to achieve
        that authentic, handcrafted feel.
      </p>

      <h2 className="text-3xl mb-3 font-bold">Logo Refinement Round</h2>

      <Image
        className="w-full mb-10 h-auto rounded-md sm:rounded-lg"
        width={2000}
        height={800}
        src={"/projects/design/erkans/studies2.png"}
        alt="Erkan's Döner design studies"
        priority
        quality={90}
      />
      <p className="text-gray-500 text-pretty mb-10 text-xs sm:text-sm md:text-base leading-relaxed">
        The client loved the initial concepts but wanted a closer match to the
        reference photo. I adjusted the illustration for better accuracy and
        experimented with different compositions and framing.{" "}
      </p>

      <h2 className="text-3xl mb-3 font-bold">Final Logo Versions</h2>
      <Image
        className="w-full mb-10 h-auto rounded-md sm:rounded-lg"
        width={2000}
        height={800}
        src={"/projects/design/erkans/final_logos.png"}
        alt="Erkan's Döner design studies"
        priority
        quality={90}
      />

      <div className="flex gap-4">
        <Image
          className=" flex-1 mb-10 h-auto rounded-md sm:rounded-lg"
          width={200}
          height={500}
          src={"/projects/design/erkans/erkans_insta_flyer.png"}
          alt="Erkan's Döner design studies"
          priority
          quality={90}
        />
        <Image
          className="flex-1 mb-10 h-auto rounded-md sm:rounded-lg"
          width={200}
          height={500}
          src={"/projects/design/erkans/erkans_insta_flyer2.png"}
          alt="Erkan's Döner design studies"
          priority
          quality={90}
        />
        <Image
          className="flex-1 mb-10 h-auto rounded-md sm:rounded-lg"
          width={200}
          height={500}
          src={"/projects/design/erkans/erkans_insta_flyer3.png"}
          alt="Erkan's Döner design studies"
          priority
          quality={90}
        />
      </div>
    </div>
  );
};

export default ErkansDoner;
