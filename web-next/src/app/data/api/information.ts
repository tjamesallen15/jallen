import { Information } from "../common/types";
import { getValidateData } from "./gateway";

export async function getInformations() {
  const data: Information[] = await getValidateData("information");
  return data;
}
