import { Header, Meta } from "~/components";

const Layout = ({ navigation, settings, metadata, social, theme, children }) => {
  let colors = {}

  switch (theme) {
    case 'Accent':
      colors = {
        text: 'var(--color-black)',
        background: 'var(--color-primary)'
      }
      break;
    case 'Dark':
      colors = {
        text: 'var(--color-primary)',
        background: 'var(--color-black)'
      }
      break;
    case 'Light':
      colors = {
        text: 'var(--color-black)',
        background: 'var(--color-white)'
      }
      break;
  }

  return (
    <div
      style={{
        '--color-text': colors.text,
        '--color-background': colors.background
      }}
    >
      <Meta metadata={metadata} social={social} settings={settings} />
      {navigation && <Header navigation={navigation} settings={settings} />}
      <main>{children}</main>
    </div>
  );
};

export default Layout