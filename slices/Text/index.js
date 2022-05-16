import { PrismicRichText } from "@prismicio/react";

const Text = ({ slice }) => {
  return (
    <>
      <div>
        <PrismicRichText field={slice.primary.text} />
      </div>
    </>
  );
};

export default Text;
