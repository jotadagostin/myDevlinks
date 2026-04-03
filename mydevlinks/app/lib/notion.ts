import { Client, isFullPage } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type LinkItem = {
  label: string;
  url: string;
};

export async function getLinks(): Promise<LinkItem[]> {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const response = await notion.dataSources.query({
    database_id: process.env.NOTION_DATABASE_ID!,
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
          ? (labelProp.title[0]?.plain_text ?? "")
          : "";

      const url = urlProp?.type === "url" ? (urlProp.url ?? "#") : "#";

      return { label, url };
    })
    .filter((link: LinkItem) => link.label !== "");
}
