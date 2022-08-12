import PropTypes from 'prop-types';
import { objectNotEmpty } from '~/utils/helpers';
import Metadata from './Metadata';
import Favicon from './Favicon';
import GeneralCard from './GeneralCard';
import TwitterCard from './TwitterCard';

const Meta = ({ metadata, social, settings}) => {
  return (
    <>
      {objectNotEmpty(metadata) && <Metadata {...metadata} settings={settings} />}
      {objectNotEmpty(settings) && <Favicon settings={settings} />}

      {!!social?.length &&
        social.map((card, index) => {
          switch (card.slice_type) {
            case 'general_card':
              return (
                <GeneralCard
                  canonical={metadata.canonical}
                  siteTitle={settings?.data?.siteTitle}
                  {...card.primary}
                  key={`social-${index}`}
                />
              );
            case 'twitter_card':
              return <TwitterCard {...card.primary} key={`social-${index}`} />;
            default:
              return false;
          }
        })}
    </>
  );
};

Meta.propTypes = {
  metadata: PropTypes.shape({}),
  social: PropTypes.arrayOf(PropTypes.shape({})),
};

Meta.defaultProps = {
  metadata: null,
  social: null,
};

export default Meta;
