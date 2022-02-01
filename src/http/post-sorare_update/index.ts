import { sorare } from "./sorare";

export async function handler(request: Request) {
  console.log("ici", process.env);
  // await sorare().authenticate();
  const player = await sorare().sdk.getPlayerInformations({
    slug: "pedro-chirivella-burgos",
  });
  const response = {
    statusCode: 200,
    body: JSON.stringify(player.player),
  };

  return response;
}
