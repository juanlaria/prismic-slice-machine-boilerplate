// import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `
   
import { SliceZone } from "@prismicio/react";
import { createClient } from "~/prismicio";
import { components } from "~/slices";
import { Layout } from "~/components";

const Home = ({ page, navigation, settings }) => {
  // Props
  const {
    metadataCanonical,
    metadataDescription,
    metadataIndexing,
    metadataKeywords,
    metadataTitle,
    social,
    slices
  } = page?.data || {};

  // Metadata
  const metadata = {
    canonical: metadataCanonical,
    description: metadataDescription,
    indexing: metadataIndexing,
    keywords: metadataKeywords,
    title: metadataTitle,
  };

  return (
    <Layout
      navigation={navigation}
      settings={settings}
      metadata={metadata}
      social={social}
    >
      <SliceZone slices={slices} components={components} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}