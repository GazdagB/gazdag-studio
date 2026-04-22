"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "/projects/design/lacasa/sketches.png", alt: "La Casa — initial sketches" },
  { src: "/projects/design/lacasa/logo_alternatives.png", alt: "La Casa — logo alternatives" },
  { src: "/projects/design/lacasa/logo_variations.png", alt: "La Casa — logo variations" },
  { src: "/projects/design/lacasa/ae97_glow_icon_v4.png", alt: "La Casa — icon with glow effect" },
  { src: "/projects/design/lacasa/comb_glow_icon_orange.png", alt: "La Casa — combination mark with orange glow" },
  { src: "/projects/design/lacasa/logo_mockups.png", alt: "La Casa — logo mockups" },
  { src: "/projects/design/lacasa/lacasa_logo_blank.png", alt: "La Casa — clean final logo" },
  { src: "/projects/design/lacasa/laCasa_combination_white.svg", alt: "La Casa — final white combination mark" },
  { src: "/projects/design/lacasa/neon_sign.jpg", alt: "La Casa — neon sign in real life" },
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

const LaCasa = () => {
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
        La Casa is a Latin house music event series born in Nürnberg, created
        by AE97 — a young DJ duo with a disciplined work ethic and a clear
        vision. They dreamt of bringing a warm, Latin-infused house vibe to
        the city's nightlife scene, and they made it a reality. This is the
        brand identity built to carry that dream.
      </p>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">The Brief</h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
          AE97 needed a visual identity as bold and focused as their sound.
          The mark had to work in dark club environments, glow on a neon sign,
          and translate cleanly to social media flyers and digital promotion.
          The name "La Casa" — Spanish for "The House" — set the direction:
          warm, inviting, but with an edge. The glowing icon became the
          signature device that ties it all together.
        </p>
      </section>

      {/* TODO: gather more early stage sketch photos and add them here */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Sketches & Early Concepts</h2>
        <ClickableImage
          src={images[0].src}
          alt={images[0].alt}
          width={2000}
          height={800}
          index={0}
          onOpen={setLightboxIndex}
        />
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4">
          The process started with pencil and paper — exploring letterforms,
          monogram treatments, and motifs referencing both the Latin roots and
          the house music culture behind the event. Rough thumbnails were the
          fastest way to find the ideas worth taking further.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Logo Alternatives</h2>
        <ClickableImage
          src={images[1].src}
          alt={images[1].alt}
          width={2000}
          height={800}
          index={1}
          onOpen={setLightboxIndex}
        />
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4">
          Several distinct directions were developed digitally. Each alternative
          explored a different take on the AE97 × La Casa identity — some led
          with the wordmark, others pushed the icon front and center. This stage
          was presented to the duo for feedback before committing to a direction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Logo Variations</h2>
        <ClickableImage
          src={images[2].src}
          alt={images[2].alt}
          width={2000}
          height={800}
          index={2}
          onOpen={setLightboxIndex}
        />
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4">
          With the direction locked, variations were explored across color
          palettes and layout lockups. Dark backgrounds were central to every
          decision — the whole identity is built to live in low-light club
          environments, so contrast and luminosity were tested hard at this stage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">The Glow Icon</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <ClickableImage
            src={images[3].src}
            alt={images[3].alt}
            width={800}
            height={800}
            index={3}
            onOpen={setLightboxIndex}
          />
          <ClickableImage
            src={images[4].src}
            alt={images[4].alt}
            width={800}
            height={800}
            index={4}
            onOpen={setLightboxIndex}
          />
        </div>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4">
          The signature icon was refined across multiple glow intensities and
          color temperatures. Orange became the primary brand colour — warm and
          energetic, a nod to the Latin heat at the core of the event's identity.
          The glow is subtle enough to feel premium, bold enough to stop the scroll
          and own the dancefloor wall.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Mockups</h2>
        <ClickableImage
          src={images[5].src}
          alt={images[5].alt}
          width={2000}
          height={1200}
          index={5}
          onOpen={setLightboxIndex}
        />
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4">
          The mark was placed into real event contexts — merchandise, digital
          flyers, and venue surfaces. For an event brand, the mockup stage is
          critical: the logo needs to feel at home on a wristband, a phone
          screen at 2am, and a large-format print. It held up across all of them.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">The Sign Goes Live</h2>
        <ClickableImage
          src={images[8].src}
          alt={images[8].alt}
          width={2000}
          height={1500}
          index={8}
          onOpen={setLightboxIndex}
        />
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4">
          The moment a logo becomes real. AE97 had the icon produced as a
          physical neon sign for their events — it now lights up the venue
          every night La Casa runs. There is no better proof of a brand working
          than seeing it glow on a wall with people dancing underneath it.
        </p>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">The Final Logo</h2>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
          The delivered set includes the clean standalone mark and the full
          combination lockup — versatile enough for a poster, a social media
          story, or a neon sign. AE97 now have a brand as serious as their craft.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-gray-50 rounded-md sm:rounded-lg p-6 flex items-center justify-center">
            <ClickableImage
              src={images[6].src}
              alt={images[6].alt}
              width={800}
              height={400}
              index={6}
              onOpen={setLightboxIndex}
              className="w-full h-auto"
            />
          </div>
          <div className="bg-gray-900 rounded-md sm:rounded-lg p-6 flex items-center justify-center">
            <ClickableImage
              src={images[7].src}
              alt={images[7].alt}
              width={800}
              height={400}
              index={7}
              onOpen={setLightboxIndex}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaCasa;
