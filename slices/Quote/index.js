import * as prismicH from "@prismicio/helpers";
import { PrismicText } from "@prismicio/react";


const Quote = ({ slice }) => {
  return (
    <>
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <figure>
          <blockquote>
            <p>
              <span>
                &ldquo;
              </span>
              <PrismicText field={slice.primary.quote} />
              <span>&rdquo;</span>
            </p>
          </blockquote>
          {prismicH.isFilled.keyText(slice.primary.source) && (
            <figcaption>
              &mdash; {slice.primary.source}
            </figcaption>
          )}
        </figure>
      )}
    </>
  );
};

export default Quote;
