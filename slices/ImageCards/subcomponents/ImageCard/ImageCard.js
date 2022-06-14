import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { ConditionalWrap } from "~/components";
import { Item } from './styles';

const ImageCard = ({ item }) => {
	const { image, buttonLink } = item || {};
  
	return (
	  <Item>
		{prismicH.isFilled.image(image) && (
		  <div>
			<ConditionalWrap
			  condition={prismicH.isFilled.link(buttonLink)}
			  wrap={({ children }) => (
				<PrismicLink field={buttonLink} tabIndex="-1">
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
		{prismicH.isFilled.link(buttonLink) && (
		  <div>
			<PrismicLink field={buttonLink}>
			  {item.buttonText || "More Info"}
			</PrismicLink>
		  </div>
		)}
	  </Item>
	);
  };

  export default ImageCard;
