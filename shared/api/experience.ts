import type { Experience } from "../common/model";
import { getServerData } from "./gateway";

export const getExperiences = async (): Promise<Experience[]> => {
  const data: Experience[] = await getServerData("experiences");
  return data;
};
