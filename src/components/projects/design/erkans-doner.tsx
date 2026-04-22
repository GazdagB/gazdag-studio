"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "/projects/design/erkans/studies1.png",
    alt: "Erkan's Döner — first logo drafts",
  },
  {
    src: "/projects/design/erkans/studies2.png",
    alt: "Erkan's Döner — refined logo concepts",
  },
  {
    src: "/projects/design/erkans/studies3.png",
    alt: "Erkan's Döner — final logo iterations",
  },
  {
    src: "/projects/design/erkans/erkans_doner_horizontal.png",
    alt: "Erkan's Döner — final horizontal logo",
  },
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
        the first day they sold hundreds of döners with their opening special of
        a döner menü for 4€.
      </p>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">The Brief</h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
          Erkan's Döner needed a brand identity that could carry the weight of
          14 years of history while feeling fresh for a new chapter. The goal
          was a mark that felt warm, confident, and unmistakably Turkish — built
          to work on packaging, signage, and social media alike. The owner
          wanted something bold enough to stand out on a busy Nürnberg street
          but simple enough to be stamped on napkins and wrapping paper.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">First Drafts</h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
          The process started with broad exploration — hand-lettered sketches,
          geometric cuts, and crescent motifs. The early rounds pushed the
          boundaries of legibility to find where the personality lived before
          pulling back to something ownable and practical.
        </p>
        <ClickableImage
          src={images[0].src}
          alt={images[0].alt}
          width={2000}
          height={800}
          index={0}
          onOpen={setLightboxIndex}
        />
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Refining the Direction
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
          After the first client review three directions were narrowed down. The
          focus shifted to typography — finding a wordmark that balanced the
          strength of the name "Erkan" with the playful promise of döner. Color
          palettes were introduced at this stage: deep reds and warm creams
          inspired by the colours of the food itself.
        </p>
        <ClickableImage
          src={images[1].src}
          alt={images[1].alt}
          width={2000}
          height={800}
          index={1}
          onOpen={setLightboxIndex}
        />
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Final Iterations
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
          The final round locked in the chosen direction and stress-tested it
          across real contexts — embossed on packaging, reversed on dark
          backgrounds, scaled down to a favicon. Small adjustments to kerning
          and stroke weight were made to ensure the mark held up at every size.
        </p>
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
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">The Final Logo</h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
          The delivered mark is clean, confident, and versatile. The horizontal
          lockup works across storefront signage, social media headers, and
          printed wrapping — everything a modern döner restaurant needs. It
          carries the spirit of Erkan's 14 years while announcing a bold new
          beginning.
        </p>
        <div className="w-full bg-gray-50 rounded-md sm:rounded-lg p-8">
          <ClickableImage
            src={images[3].src}
            alt={images[3].alt}
            width={1200}
            height={400}
            index={3}
            onOpen={setLightboxIndex}
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default ErkansDoner;
