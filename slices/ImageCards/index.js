import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import { Heading, ConditionalWrap } from "~/components";

const ImageCard = ({ item }) => {
  const image = item.image;

  return (
    <li>
      {prismicH.isFilled.image(image) && (
        <div>
          <ConditionalWrap
            condition={prismicH.isFilled.link(item.buttonLink)}
            wrap={({ children }) => (
              <PrismicLink field={item.buttonLink} tabIndex="-1">
                {children}
              </PrismicLink>
            )}
          >
            <NextImage
              src={prismicH.asImageSrc(image, {
                w: undefined,
                h: undefined,
              })}
              alt={image.alt}
              width={image.dimensions.width}
              height={image.dimensions.height}
              layout="responsive"
            />
          </ConditionalWrap>
        </div>
      )}
      <div>
        <PrismicRichText field={item.text} />
      </div>
      {prismicH.isFilled.link(item.buttonLink) && (
        <div>
          <PrismicLink field={item.buttonLink}>
            {item.buttonText || "More Info"}
          </PrismicLink>
        </div>
      )}
    </li>
  );
};

const ImageCards = ({ slice }) => {
  return (
    <>
      <div>
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading>
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul>
          {slice.items.map((item) => (
            <ImageCard key={item.image.url} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ImageCards;
