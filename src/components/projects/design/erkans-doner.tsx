import React from "react";
import Image from "next/image";

const ErkansDoner = () => {
  return (
    <div className="w-full">
      <p className="text-gray-500 mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
        This logo was made for a real functioning restaurant in Nürnberg
        Germany. With passion and love. After Being open fur the public for more
        than 14 years it did close up for a while and re-opened in 2026 January.
        On the first they they sold hundreds of döners with their opening
        angebot of döner menü for 4€.
      </p>

      <h2 className="text-3xl mb-3 font-bold">First drafts of the logo</h2>
      <div className="w-full">
        <Image 
          className="w-full h-auto rounded-md sm:rounded-lg" 
          width={2000}
          height={800}
          src={'/projects/design/erkans/studies1.png'} 
          alt="Erkan's Döner design studies" 
          priority
          quality={90}
        />
      </div>
    </div>
  );
};

export default ErkansDoner;