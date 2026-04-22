"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/projects/design/erkans/studies1.png", alt: "Erkan's Döner — early drafts and explorations" },
  { src: "/projects/design/erkans/studies2.png", alt: "Erkan's Döner — logo refinement round" },
  { src: "/projects/design/erkans/studies3.png", alt: "Erkan's Döner — further refinements" },
  { src: "/projects/design/erkans/final_logos.png", alt: "Erkan's Döner — final logo versions" },
  { src: "/projects/design/erkans/erkans_insta_flyer.png", alt: "Erkan's Döner — Instagram flyer 1" },
  { src: "/projects/design/erkans/erkans_insta_flyer2.png", alt: "Erkan's Döner — Instagram flyer 2" },
  { src: "/projects/design/erkans/erkans_insta_flyer3.png", alt: "Erkan's Döner — Instagram flyer 3" },
  { src: "/projects/design/erkans/erkans_doner_horizontal.png", alt: "Erkan's Döner — final horizontal logo" },
];

const ClickableImage = ({
  src,
  alt,
  width,
  height,
  index,
  onOpen,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  index: number;
  onOpen: (index: number) => void;
  className?: string;
}) => (
  <button
    onClick={() => onOpen(index)}
    className="w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 rounded-md sm:rounded-lg"
    aria-label={`Open fullscreen: ${alt}`}
  >
    <Image
      className={className ?? "w-full h-auto rounded-md sm:rounded-lg"}
      width={width}
      height={height}
      src={src}
      alt={alt}
      quality={90}
    />
  </button>
);

const ErkansDoner = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <div className="w-full space-y-12">
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={images}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 4, scrollToZoom: true }}
      />

      <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
        This logo was made for a real functioning restaurant in Nürnberg,
        Germany. With passion and love. After being open to the public for more
        than 14 years it closed for a while and re-opened in January 2026. On
        the first day they sold hundreds of döners with their opening promotion
        of a döner menü for 4€.
      </p>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Early Drafts & Explorations</h2>
        <ClickableImage
          src={images[0].src}
          alt={images[0].alt}
          width={2000}
          height={800}
          index={0}
          onOpen={setLightboxIndex}
        />
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4">
          Starting with a reference photo from the client, I sketched the initial
          concepts in Procreate on iPad. AI tools helped refine the rough
          sketches, but the final touch happened in Illustrator — where I manually
          adjusted elements, adding imperfections and character to achieve that
          authentic, handcrafted feel.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Logo Refinement Round</h2>
        <ClickableImage
          src={images[1].src}
          alt={images[1].alt}
          width={2000}
          height={800}
          index={1}
          onOpen={setLightboxIndex}
        />
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4">
          The client loved the initial concepts but wanted a closer match to the
          reference photo. I adjusted the illustration for better accuracy and
          experimented with different compositions and framing. Stroke weights,
          color warmth, and typographic pairing were all stress-tested at this
          stage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Further Refinements</h2>
        <ClickableImage
          src={images[2].src}
          alt={images[2].alt}
          width={2000}
          height={800}
          index={2}
          onOpen={setLightboxIndex}
        />
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Final Logo Versions</h2>
        <ClickableImage
          src={images[3].src}
          alt={images[3].alt}
          width={2000}
          height={800}
          index={3}
          onOpen={setLightboxIndex}
        />
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4">
          The final set of logo lockups — horizontal, stacked, and icon-only —
          ready for deployment across every touchpoint. Each variant was tested
          at signage scale down to favicon size to ensure nothing was lost.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Social Media Flyers</h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
          To announce the reopening, a series of Instagram flyers were designed
          using the new brand identity. The flyers introduced the opening offer
          and set the tone for the restaurant's social media presence going forward.
        </p>
        <div className="flex gap-3 sm:gap-4">
          {[4, 5, 6].map((i) => (
            <ClickableImage
              key={i}
              src={images[i].src}
              alt={images[i].alt}
              width={500}
              height={500}
              index={i}
              onOpen={setLightboxIndex}
              className="w-full h-auto rounded-md sm:rounded-lg"
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">The Final Logo</h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
          The delivered horizontal lockup — clean, confident, and built to last.
          It carries the spirit of Erkan's 14 years while announcing a bold new
          beginning.
        </p>
        <div className="w-full bg-gray-50 rounded-md sm:rounded-lg p-8">
          <ClickableImage
            src={images[7].src}
            alt={images[7].alt}
            width={1200}
            height={400}
            index={7}
            onOpen={setLightboxIndex}
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default ErkansDoner;
