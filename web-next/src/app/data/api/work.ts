import { ProcessWork, Work } from "../common/types";
import { getValidateData } from "./gateway";

export async function getWorks() {
  const data: Work[] = await getValidateData("work");
  return data;
}

export async function getProcessWorks() {
  const data: ProcessWork[] = await getValidateData("work");

  for (let i = 0; i < data.length; i++) {
    const work: ProcessWork = data[i];
    const descriptions = work.description.split("-");
    const filteredDescriptions = descriptions.filter(
      (description) => description.trim() !== ""
    );
    work.descriptions = filteredDescriptions;
  }

  return data;
}
