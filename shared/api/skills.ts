import type { Skills } from "../common/model";
import { getServerData } from "./gateway";
import { getSkillIcon } from "../common/core-base";

export const getSkills = async (): Promise<Skills[]> => {
  const data: Skills[] = await getServerData("skills");
  return data;
};

export const getSkillsWithIcons = async (): Promise<Skills[]> => {
  const skills: Skills[] = await getSkills();
  const skillsWithIcons: Skills[] = skills.map((skill) => ({
    ...skill,
    icon: getSkillIcon(skill.name),
  }));
  return skillsWithIcons;
};
