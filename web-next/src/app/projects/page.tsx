import { getApplications } from '../data/api/application';
import ProjectsImpl from '@/components/org/jallen/implementation/ProjectsImpl';
import { Application, ProcessWork } from '../data/common/types';
import { getProcessWorks } from '../data/api/work';

const Projects = async () => {
  const applications: Application[] = await getApplications();
  const works: ProcessWork[] = await getProcessWorks();
  return (
    <ProjectsImpl applications={applications} works={works} />
  )
}

export default Projects;