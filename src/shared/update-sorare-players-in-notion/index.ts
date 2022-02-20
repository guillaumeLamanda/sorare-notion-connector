import { sorare } from "./sorare";
import { Client } from "@notionhq/client";
import slugify from "slugify";

slugify.extend({
  ó: "o",
  ò: "o",
  ú: "u",
  ù: "u",
  í: "i",
  ì: "i",
  á: "a",
  à: "a",
  é: "e",
  è: "e",
  ñ: "n",
  ç: "c",
  ü: "u",
  ö: "o",
  ä: "a",
  ß: "ss",
  Þ: "th",
});

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function updateSorarePlayersInNotion() {
  const { results } = await notionClient.databases.query({
    database_id: process.env.NOTION_DB_ID,
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

  const res = await Promise.allSettled(
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
      const slugInPage = await page.properties["Slug"];
      const playerSlug =
        (slugInPage.type === "rich_text" &&
          slugInPage.rich_text.map((e) => e.plain_text).join("")) ||
        slugify(playerName, {
          lower: true,
        });

      const playerInfo = await sorare().sdk.getPlayerInformations({
        slug: playerSlug,
      });
      console.debug(`♻️ updating ${playerName}`);
      await notionClient.pages.update({
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
          "Sorare Data Link": {
            type: "url",
            url: `https://www.soraredata.com/player/${playerInfo.player.id}`,
          },
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
            number: playerInfo.player.status.lastFifteenSo5AverageScore || null,
          },
          "Last 50 appearances": {
            type: "number",
            number: playerInfo.player.status.lastFifteenSo5Appearances || null,
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
      });
    })
  );
  const rejectedPromises = res.filter(
    ({ status }) => status === "rejected"
  ) as PromiseRejectedResult[];
  rejectedPromises.forEach(({ reason }) => console.error(reason));

  console.log("🎉 done");
}
