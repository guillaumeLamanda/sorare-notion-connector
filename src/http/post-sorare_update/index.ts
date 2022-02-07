import { sorare } from "./sorare";
import { Client } from "@notionhq/client";
import slugify from "slugify";

slugify.extend({
  o: "ó",
  O: "Ó",
  u: "ú",
  U: "Ú",
  c: "ç",
  C: "Ç",
  i: "í",
  I: "Í",
});

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

// const isNotionPage = (result: QueryDatabaseResponse["result"]): result is Page => {

export async function handler(request: Request) {
  const { results } = await notionClient.databases.query({
    database_id: "ca441f594c624eadad73677652dbb2ab",
    filter: {
      or: [
        {
          property: "Category",
          select: {
            equals: "Scouting",
          },
        },
        {
          property: "Category",
          select: {
            is_empty: true,
          },
        },
      ],
    },
  });

  // const playersInfos = await sorare().sdk.getPlayersInformations({
  //   slugs: results.filter(page => )
  // })

  await Promise.allSettled(
    results.map(async (page) => {
      if (page.object !== "page") return;
      if (!("properties" in page)) return;
      const nameProperty = await page.properties["Name"];
      if (nameProperty.type !== "title") return;
      console.debug(
        "👱",
        nameProperty.title.map((t) => t.plain_text).join(" ")
      );
      const playerName = nameProperty.title.map((e) => e.plain_text).join(" ");
      const playerSlug = slugify(playerName, {
        lower: true,
      });
      const slugInPage = await page.properties["Slug"];
      const playerInfo = await sorare().sdk.getPlayerInformations({
        slug:
          (slugInPage.type === "rich_text" &&
            slugInPage.rich_text[0]?.plain_text) ||
          playerSlug,
      });
      console.debug(`♻️ updating ${playerName}`);
      await notionClient.pages
        .update({
          page_id: page.id,
          cover: playerInfo.player.cardSampleUrl
            ? {
                type: "external",
                external: {
                  url: playerInfo.player.cardSampleUrl,
                },
              }
            : null,
          icon: {
            type: "emoji",
            emoji: "👨‍🦱",
          },
          properties: {
            // "Sorare Data Link": {
            //   type: "url",
            //   url: `https://www.soraredata.com/player/${playerInfo.player.id}`,
            // },
            Category: {
              type: "select",
              select: {
                name: "Scouting",
              },
            },
            Slug: {
              type: "rich_text",
              rich_text: [
                {
                  text: { content: playerInfo.player.slug },
                },
              ],
            },
            "Last 5 Score": {
              type: "number",
              number: playerInfo.player.status.lastFiveSo5AverageScore || null,
            },
            "Last 5 appearances": {
              type: "number",
              number: playerInfo.player.status.lastFiveSo5Appearances || null,
            },
            "Last 50 Score": {
              type: "number",
              number:
                playerInfo.player.status.lastFifteenSo5AverageScore || null,
            },
            "Last 50 appearances": {
              type: "number",
              number:
                playerInfo.player.status.lastFifteenSo5Appearances || null,
            },
            Position: {
              type: "select",
              select: {
                name: playerInfo.player.position,
              },
            },
            Status: {
              type: "select",
              select: playerInfo.player.status.playingStatus
                ? {
                    name: playerInfo.player.status.playingStatus,
                  }
                : null,
            },
            Club: {
              type: "rich_text",
              rich_text: [
                {
                  text: {
                    content:
                      playerInfo.player.activeClub?.name || "No active club",
                  },
                },
              ],
            },
            League: {
              type: "select",
              select: playerInfo.player.activeClub?.domesticLeague?.displayName
                ? {
                    name: playerInfo.player.activeClub?.domesticLeague
                      ?.displayName,
                  }
                : null,
            },
          },
        })
        .catch(console.error);
    })
  ).catch(console.error);

  const response = {
    statusCode: 200,
  };

  return response;
}
