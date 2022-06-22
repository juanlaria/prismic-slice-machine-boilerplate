import defaultThemeColors from "~/shared/defaultThemeColors"
import { Header, Meta } from "~/components";

const Layout = ({ navigation, settings, metadata, social, theme = 'Light', children }) => {
  return (
    <div
      style={{
        '--color-text': defaultThemeColors[theme]?.text,
        '--color-background': defaultThemeColors[theme]?.background
      }}
    >
      <Meta metadata={metadata} social={social} settings={settings} />
      {navigation && <Header navigation={navigation} settings={settings} />}
      <main>{children}</main>
    </div>
  );
};

export default Layout