import { About, Experience, Information, Skills } from '../data/common/types';
import { getAbouts } from '../data/api/about';
import { getExperiences } from '../data/api/experience';
import { getSkillsWithIcons } from '../data/api/skills';
import ResumeImpl from '@/components/org/jallen/implementation/ResumeImpl';
import { getInformations } from '../data/api/information';

const Resume = async () => {
  const abouts: About[] = await getAbouts();
  const experiences: Experience[] = await getExperiences();
  const skills: Skills[] = await getSkillsWithIcons();
  const informations: Information[] = await getInformations();
  return (
    <ResumeImpl abouts={abouts} experiences={experiences} skills={skills} informations={informations} />
  )
}

export default Resume;