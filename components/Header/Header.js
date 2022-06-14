import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { Container } from '~/shared/styles';
import { Wrapper, Nav, List, Item } from './styles';

const Header = ({ navigation, settings }) => {
  return (
      <Wrapper>
        <Container>
          <PrismicLink href="/">
            <PrismicText field={settings.data.siteTitle} />
          </PrismicLink>
          <Nav>
            <List>
              {navigation.data?.links.map((item) => (
                <Item key={prismicH.asText(item.label)}>
                  <PrismicLink field={item.link}>
                    <PrismicText field={item.label} />
                  </PrismicLink>
                </Item>
              ))}
            </List>
          </Nav>
        </Container>
      </Wrapper>
  );
};

export default Header;