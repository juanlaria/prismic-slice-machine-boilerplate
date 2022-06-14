import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";

import { Slice } from "~/components";

const Image = ({ slice }) => {
  const { image, contained, theme } = slice.primary;

  return (
    <Slice contained={contained} theme={theme}>
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
    </Slice>
  );
};

export default Image;
