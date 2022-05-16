import Head from 'next/head';
import PropTypes from 'prop-types';

const TwitterCard = ({
  card_type,
  image,
  title,
  description,
  twitter_handle,
}) => {
  return (
    <Head>
      {card_type === 'Summary Card with Large Image' ? (
        <meta name="twitter:card" content="summary_large_image" />
      ) : (
        <meta name="twitter:card" content="summary" />
      )}
      {card_type === 'Summary Card with Large Image' ? (
        <meta name="twitter:image" content={image.large_image.url} />
      ) : (
        <meta name="twitter:image" content={image.url} />
      )}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {twitter_handle && <meta name="twitter:site" content={twitter_handle} />}
      {twitter_handle && (
        <meta name="twitter:creator" content={twitter_handle} />
      )}
    </Head>
  );
};

TwitterCard.propTypes = {
  card_type: PropTypes.string,
  image: PropTypes.shape({}),
  title: PropTypes.string,
  description: PropTypes.string,
  twitter_handle: PropTypes.string,
};

TwitterCard.defaultProps = {
  card_type: null,
  image: null,
  title: null,
  description: null,
  twitter_handle: null,
};

export default TwitterCard;
