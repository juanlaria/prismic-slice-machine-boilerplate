import { SliceZone } from "@prismicio/react";

import { createClient } from "~/prismicio";
import { components } from "~/slices";
import { Layout } from "~/components";

const Page = ({ page, navigation, settings }) => {
  // Props
  const {
    metadataCanonical,
    metadataDescription,
    metadataIndexing,
    metadataKeywords,
    metadataTitle,
    social,
    theme,
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
      theme={theme}
    >
      <SliceZone slices={slices} components={components} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", params.uid, { lang: locale });
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

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page", { lang: "*" });

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
        locale: page.lang,
      };
    }),
    fallback: false,
  };
}