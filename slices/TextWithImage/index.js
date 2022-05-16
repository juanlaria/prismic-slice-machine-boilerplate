import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

const TextWithImage = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <>
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div>
          {prismicH.isFilled.image(image) && (
            <div>
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
            </div>
          )}
        </div>
    </>
  );
};

export default TextWithImage;
