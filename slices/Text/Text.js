import { PrismicRichText } from "@prismicio/react";

import { Slice } from "~/components";

const Text = ({ slice }) => {
  return (
    <Slice theme={slice.primary.theme}>
      <div>
        <PrismicRichText field={slice.primary.text} />
      </div>
    </Slice>
  );
};

export default Text;
