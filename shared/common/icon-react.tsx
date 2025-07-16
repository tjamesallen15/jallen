import { setIconProvider } from "../../shared/common/core-base";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaAngular,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaFigma,
  FaGit,
  FaGithub,
  FaGitlab,
  FaJenkins,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpring,
  SiSpringboot,
  SiApachemaven,
  SiOracle,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiPuppeteer,
  SiRailway,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";

const skillIcons: Record<string, React.ReactNode> = {
  html5: <FaHtml5 />,
  css3: <FaCss3 />,
  javascript: <FaJs />,
  typescript: <SiTypescript />,
  angular: <FaAngular />,
  react: <FaReact />,
  "next.js": <SiNextdotjs />,
  "tailwind css": <SiTailwindcss />,
  "node.js": <FaNodeJs />,
  java: <FaJava />,
  "spring mvc": <SiSpring />,
  "spring boot": <SiSpringboot />,
  maven: <SiApachemaven />,
  oauth: <TbBrandOauth />,
  python: <FaPython />,
  oracle: <SiOracle />,
  mysql: <SiMysql />,
  postgresql: <SiPostgresql />,
  sqlite: <SiSqlite />,
  puppeteer: <SiPuppeteer />,
  figma: <FaFigma />,
  git: <FaGit />,
  github: <FaGithub />,
  gitlab: <FaGitlab />,
  jenkins: <FaJenkins />,
  railway: <SiRailway />,
  vercel: <SiVercel />,
  "vue.js": <SiVuedotjs />,
};

export const initializeIconProvider = () => {
  setIconProvider({
    getSkillIcon: (name: string) => skillIcons[name.toLowerCase()] || null,
  });
};
