import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

const Header = ({ navigation, settings }) => {
  return (
      <div>
        <PrismicLink href="/">
          <PrismicText field={settings.data.siteTitle} />
        </PrismicLink>
        <nav>
          <ul>
            {navigation.data?.links.map((item) => (
              <li key={prismicH.asText(item.label)}>
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
  );
};

export default Header;