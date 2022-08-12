import Head from 'next/head';
import PropTypes from 'prop-types';
import * as prismicH from "@prismicio/helpers";

const GeneralCard = ({ canonical, siteTitle: siteTitleProp, title, description, image }) => {
	const siteTitle = prismicH.asText(siteTitleProp)

  return (
    <Head>
      {canonical && <meta name="og:url" content={canonical} />}
      {title && <meta name="og:title" content={title} />}
      {description && <meta name="og:description" content={description} />}
      {image && <meta name="og:image" content={image.url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
    </Head>
  );
};

GeneralCard.propTypes = {
  canonical: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({}),
};

GeneralCard.defaultProps = {
  canonical: null,
  title: null,
  description: null,
  image: null,
};

export default GeneralCard;
