import {
  FaAngular,
  FaCss3,
  FaEnvelope,
  FaFigma,
  FaGit,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaJenkins,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiApachemaven,
  SiMysql,
  SiNextdotjs,
  SiOracle,
  SiPostgresql,
  SiPuppeteer,
  SiRailway,
  SiSpring,
  SiSpringboot,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import type { Social, SkillIcon } from "./model";

export const getSocials = (): Social[] => [
  {
    name: "GitHub",
    href: "https://github.com/tjamesallen15",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tjamesallen15/",
    icon: <FaLinkedin />,
  },
];

export const getFooterSocials = (): Social[] => [
  {
    name: "React",
    href: "https://react.dev/",
    icon: <FaReact />,
  },
  {
    name: "Hire Me",
    href: "https://www.linkedin.com/in/tjamesallen15/",
    icon: <FaEnvelope />,
  },
];

export const getSkillIcon = (name: string) => {
  const skills: SkillIcon[] = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "Angular",
      icon: <FaAngular />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Java",
      icon: <FaJava />,
    },
    {
      name: "Spring MVC",
      icon: <SiSpring />,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
    },
    {
      name: "Maven",
      icon: <SiApachemaven />,
    },
    {
      name: "OAuth",
      icon: <TbBrandOauth />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Oracle",
      icon: <SiOracle />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "SQLite",
      icon: <SiSqlite />,
    },
    {
      name: "Puppeteer",
      icon: <SiPuppeteer />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
    {
      name: "Git",
      icon: <FaGit />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
    {
      name: "GitLab",
      icon: <FaGitlab />,
    },
    {
      name: "Jenkins",
      icon: <FaJenkins />,
    },
    {
      name: "Railway",
      icon: <SiRailway />,
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
    },
    {
      name: "Vue.js",
      icon: <SiVuedotjs />,
    },
  ];

  return skills.find((item) => item.name === name)?.icon;
};
