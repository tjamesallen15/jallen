import { Skills } from "../common/types";
import { getSkillIcon } from "./common";
import { getValidateData } from "./gateway";

export async function getSkills() {
  const data: Skills[] = await getValidateData("skill");
  return data;
}

export async function getSkillsWithIcons() {
  const data: Skills[] = await getValidateData("skill");
  for (let i = 0; i < data.length; i++) {
    const skills: Skills = data[i];
    skills.icon = getSkillIcon(skills.name);
  }

  return data;
}
