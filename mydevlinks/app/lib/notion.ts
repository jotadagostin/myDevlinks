import { Client, isFullPage } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type LinkItem = {
  label: string;
  url: string;
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getLinks(): Promise<LinkItem[]> {
  const dataSourceId =
    process.env.NOTION_DATA_SOURCE_ID ?? process.env.NOTION_DATABASE_ID;

  if (!dataSourceId) {
    throw new Error(
      "Missing NOTION_DATA_SOURCE_ID or NOTION_DATABASE_ID environment variable.",
    );
  }

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "Ativo",
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results
    .filter(isFullPage)
    .map((page: PageObjectResponse) => {
      const labelProp = page.properties?.Label;
      const urlProp = page.properties?.URL;

      const label =
        labelProp?.type === "title"
          ? labelProp.title.map((part) => part.plain_text).join("")
          : "";

      const url = urlProp?.type === "url" ? (urlProp.url ?? "#") : "#";

      return { label, url };
    })
    .filter((link): link is LinkItem => link.label.trim().length > 0);
}
