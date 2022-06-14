import * as prismicH from "@prismicio/helpers";
import { PrismicText } from "@prismicio/react";
import { Slice, Heading } from "~/components";
import { ImageCard } from "./subcomponents";
import { List } from './styles';

const ImageCards = ({ slice }) => {
  const {theme, heading, columns} = slice.primary;

  return (
    <Slice theme={theme}>
      <div>
        {prismicH.isFilled.richText(heading) && (
          <Heading>
            <PrismicText field={heading} />
          </Heading>
        )}
        <List columns={columns}>
          {slice.items.map((item) => (
            <ImageCard key={`${item.image.url}-${item.buttonLink.url}`} item={item} />
          ))}
        </List>
      </div>
    </Slice>
  );
};

export default ImageCards;
