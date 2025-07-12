import type { Application } from "../common/model";
import { getServerData } from "./gateway";

export const getApplications = async (): Promise<Application[]> => {
  const data: Application[] = await getServerData("application");
  return data;
};
