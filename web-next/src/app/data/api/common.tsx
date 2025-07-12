import { FaAngular, FaCss3, FaEnvelope, FaFigma, FaGit, FaGithub, FaGitlab, FaHtml5, FaJava, FaJenkins, FaJs, FaLinkedin, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { Heading, IndexData, NavigationItem, SkillIcon, Social } from '../common/types';
import { SiApachemaven, SiMysql, SiNextdotjs, SiOracle, SiPostgresql, SiPuppeteer, SiRailway, SiSpring, SiSpringboot, SiSqlite, SiTailwindcss, SiTypescript, SiVercel, SiVuedotjs } from 'react-icons/si';
import { TbBrandOauth } from 'react-icons/tb';

export function getIndexData() {
  const data: IndexData = {
    title: 'Senior Software Engineer',
    first: 'James Allen',
    last: 'Tadique',
    message: 'I am a full-stack developer with 11 years of total experience in different technical stacks. A person that finds enjoyment in learning about software development such as different languages or technology, open to new challenges in coding and can be a team player. I thrive in research and development while delivering high quality systems.'
  }
  
  return data;
}

export function getProfileHeading() {
  const profile: Heading = {
    title: 'Profile',
    description: 'Summary of what I have so far done throughout my career span.',
    value: 'profile'
  };

  return profile;
}

export function getExperienceHeading() {
  const experience: Heading = {
    title: 'Experience',
    description: 'Here I am sharing with you the summary of my work history.',
    value: 'experience'
  };

  return experience;
}

export function getSkillsHeading() {
  const skills: Heading = {
    title: 'Skills',
    description: 'List of languages, frameworks, libraries and tools that I have experienced with.',
    value: 'skills'
  };

  return skills;
}

export function getSocials() {
  const socials: Social[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/tjamesallen15',
      icon: <FaGithub />,
      
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tjamesallen15/',
      icon: <FaLinkedin />
    }
  ];

  return socials;
}

export function getFooterSocials() {
  const socials: Social[] = [
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      icon: <SiNextdotjs />,
      
    },
    {
      name: 'Hire Me',
      href: 'https://www.linkedin.com/in/tjamesallen15/',
      icon: <FaEnvelope />
    }
  ];

  return socials;
}

export function getPortfolioView(name: string) {
  switch (name) {
    case 'react':
      return 'https://jallen-react.vercel.app/'
    case 'next':
      return 'https://jallen-next.vercel.app/'
    case 'vue':
      return 'https://jallen-vue.vercel.app/'
  }
}

export function getSkillIcon(name: string) {
  const skills: SkillIcon[] = [
    {
      name: 'HTML5',
      icon: <FaHtml5 />
    },
    {
      name: 'CSS3',
      icon: <FaCss3 />
    },
    {
      name: 'JavaScript',
      icon: <FaJs />
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />
    },
    {
      name: 'Angular',
      icon: <FaAngular />
    },
    {
      name: 'React',
      icon: <FaReact />
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />
    },
    {
      name: 'Java',
      icon: <FaJava />
    },
    {
      name: 'Spring MVC',
      icon: <SiSpring />
    },
    {
      name: 'Spring Boot',
      icon: <SiSpringboot />
    },
    {
      name: 'Maven',
      icon: <SiApachemaven />
    },
    {
      name: 'OAuth',
      icon: <TbBrandOauth />
    },
    {
      name: 'Python',
      icon: <FaPython />
    },
    {
      name: 'Oracle',
      icon: <SiOracle />
    },
    {
      name: 'MySQL',
      icon: <SiMysql />
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql />
    },
    {
      name: 'SQLite',
      icon: <SiSqlite />
    },
    {
      name: 'Puppeteer',
      icon: <SiPuppeteer />
    },
    {
      name: 'Figma',
      icon: <FaFigma />
    },
    {
      name: 'Git',
      icon: <FaGit />
    },
    {
      name: 'GitHub',
      icon: <FaGithub />
    },
    {
      name: 'GitLab',
      icon: <FaGitlab />
    },
    {
      name: 'Jenkins',
      icon: <FaJenkins />
    },
    {
      name: 'Railway',
      icon: <SiRailway />
    },
    {
      name: 'Vercel',
      icon: <SiVercel />
    },
    {
      name: 'Vue.js',
      icon: <SiVuedotjs />
    }
  ];

  const filteredSkillIcon: SkillIcon = skills.filter((item: SkillIcon) => item.name === name)[0];
  return filteredSkillIcon?.icon;
}

export function getNavigationItems() {
  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Resume',
      path: '/resume'
    },
    {
      name: 'Projects',
      path: '/projects'
    }
  ];

  return navigationItems;
}
