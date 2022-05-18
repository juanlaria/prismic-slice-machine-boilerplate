import Head from 'next/head';
import PropTypes from 'prop-types';
import * as prismicH from "@prismicio/helpers";

const Metadata = ({ title, canonical, description, keywords, indexing, settings }) => {
  const connector = "|"
  const siteTitle = prismicH.asText(settings.data.siteTitle)
  const pageTitle = prismicH.asText(title)
  let metaTitle =
    (siteTitle && pageTitle) ?
    `${pageTitle} ${connector} ${siteTitle}` : pageTitle || siteTitle

  return (
    <Head>
      <title>{metaTitle}</title>
      {canonical && <link rel="canonical" href={canonical} />}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {indexing && <meta name="robots" content={indexing} />}
    </Head>
  );
};

Metadata.propTypes = {
  title: PropTypes.string,
  canonical: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  indexing: PropTypes.string,
};

Metadata.defaultProps = {
  title: null,
  canonical: null,
  description: null,
  keywords: null,
  indexing: null,
};

export default Metadata;
