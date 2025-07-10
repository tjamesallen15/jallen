import { useEffect, useState } from "react";
import { getSkills } from "../../../shared/api/skills";
import type { Skills } from "../../../shared/common/model";
import { getHomeDashboard } from "../../../shared/common/core-base";
import type { Dashboard as DashboardType } from "../../../shared/common/page";

export const useDashboard = () => {
  const [skills, setSkills] = useState<Skills[]>();
  const [isLoading, setLoading] = useState(true);
  const dashboard: DashboardType = getHomeDashboard();

  useEffect(() => {
    const getSkillData = async () => {
      try {
        const data: Skills[] = await getSkills();
        setSkills(data);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      } finally {
        setLoading(false);
      }
    };

    getSkillData();
  }, []);

  return { skills, isLoading, dashboard };
};
