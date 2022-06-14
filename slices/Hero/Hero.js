import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

import { Slice } from "~/components";
import { Wrapper, Title, Description } from "./styles";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Title>
      {children}
    </Title>
  ),
  paragraph: ({ children }) => (
    <Description>
      {children}
    </Description>
  ),
};

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;

  return (
    <Slice theme={slice.primary.theme} fullHeight>
      <Wrapper>
        {prismicH.isFilled.image(backgroundImage) && (
          <NextImage
            src={prismicH.asImageSrc(backgroundImage, {
              w: undefined,
              h: undefined,
            })}
            alt=""
            layout="fill"
            priority
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
      </Wrapper>
    </Slice>
  );
};

export default Hero;
