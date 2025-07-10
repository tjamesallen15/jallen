import type { About } from "../common/model";
import { getServerData } from "./gateway";

export const getAbouts = async (): Promise<About[]> => {
  const data: About[] = await getServerData("abouts");
  return data;
};
