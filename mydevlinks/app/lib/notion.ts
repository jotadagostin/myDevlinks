import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export type LinkItem = {
  label: string;
  url: string;
};

export async function getLinks(): Promise<LinkItem[]> {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: "Ativo",
      checkbox: {
        equals: true,
      },
    },
  });

  return response.results
    .map((page: any) => {
      const label = page.properties?.Label?.title?.[0]?.plain_text ?? "";
      const url = page.properties?.URL?.url ?? "#";
      return { label, url };
    })
    .filter((link) => link.label !== "");
}
