import { Header, Meta } from "~/components";

const Layout = ({ navigation, settings, children, metadata, social }) => {
  return (
    <>
      <Meta metadata={metadata} social={social} settings={settings} />
      {navigation && <Header navigation={navigation} settings={settings} />}
      <main>{children}</main>
    </>
  );
};

export default Layout