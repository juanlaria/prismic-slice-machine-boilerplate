import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";

const Image = ({ slice, index }) => {
  const image = slice.primary.image;

  return (
    <>
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
    </>
  );
};

export default Image;
