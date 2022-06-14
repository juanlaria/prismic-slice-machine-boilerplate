import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

import { Slice } from "~/components";

const TextWithImage = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <Slice theme={slice.primary.theme}>
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
    </Slice>
  );
};

export default TextWithImage;
