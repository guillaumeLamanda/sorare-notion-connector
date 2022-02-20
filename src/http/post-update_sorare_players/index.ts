import { updateSorarePlayersInNotion } from "@architect/shared/update-sorare-players-in-notion";

export const handler = async () => {
  await updateSorarePlayersInNotion();
};
