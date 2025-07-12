import type { Work, ProcessWork } from "../common/model";
import { getServerData } from "./gateway";

export const getWorks = async (): Promise<Work[]> => {
  const data: Work[] = await getServerData("work");
  return data;
};

export const getProcessWorks = async (): Promise<ProcessWork[]> => {
  const works: Work[] = await getWorks();
  const processWorks: ProcessWork[] = works.map((work) => ({
    ...work,
    descriptions: work.description
      .split("\n")
      .filter((desc) => desc.trim() !== ""),
  }));
  return processWorks;
};
