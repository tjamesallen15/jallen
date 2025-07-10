import type { Information } from "../common/model";
import { getServerData } from "./gateway";

export const getInformations = async (): Promise<Information[]> => {
  const data: Information[] = await getServerData("informations");
  return data;
};
