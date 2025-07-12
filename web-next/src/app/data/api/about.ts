import { About } from "../common/types";
import { getValidateData } from "./gateway";

export async function getAbouts() {
  const data: About[] = await getValidateData("about");
  return data;
}
