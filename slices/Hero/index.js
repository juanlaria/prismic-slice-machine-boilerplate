import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

import { Heading } from "~/components/Heading";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as="h2">
      {children}
    </Heading>
  ),
};

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <section>
      {prismicH.isFilled.image(backgroundImage) && (
        <NextImage
          src={prismicH.asImageSrc(backgroundImage, {
            w: undefined,
            h: undefined,
          })}
          alt=""
          layout="fill"
        />
      )}
      <>
        <div>
          <PrismicRichText
            field={slice.primary.text}
            components={components}
          />
        </div>
        {prismicH.isFilled.link(slice.primary.buttonLink) && (
          <PrismicLink field={slice.primary.buttonLink}>
            {slice.primary.buttonText || "Learn More"}
          </PrismicLink>
        )}
      </>
    </section>
  );
};

export default Hero;
