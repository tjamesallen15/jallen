import type { Dashboard, Heading } from "./page";
import type { NavigationItem } from "./model";

type IconProvider = {
  getSkillIcon: (name: string) => React.ReactNode;
};

let iconProvider: IconProvider | null = null;

export const setIconProvider = (provider: IconProvider) => {
  iconProvider = provider;
};

export const getHomeDashboard = (): Dashboard => ({
  title: "Senior Software Engineer",
  first: "James Allen",
  last: "Tadique",
  message:
    "I am a full-stack developer with 11 years of total experience in different technical stacks. A person that finds enjoyment in learning about software development such as different languages or technology, open to new challenges in coding and can be a team player. I thrive in research and development while delivering high quality systems.",
});

export const getProfileHeading = (): Heading => ({
  title: "Profile",
  description: "Summary of what I have so far done throughout my career span.",
  value: "profile",
});

export const getExperienceHeading = (): Heading => ({
  title: "Experience",
  description: "Here I am sharing with you the summary of my work history.",
  value: "experience",
});

export const getSkillsHeading = (): Heading => ({
  title: "Skills",
  description:
    "List of languages, frameworks, libraries and tools that I have experienced with.",
  value: "skills",
});

export const getPortfolioView = (name: string) => {
  switch (name) {
    case "react":
      return "https://jallen-react.vercel.app/";
    case "next":
      return "https://jallen-next.vercel.app/";
    case "vue":
      return "https://jallen-vue.vercel.app/";
  }
};

export const getNavigationItems = (): NavigationItem[] => [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

export const getSkillIcon = (name: string) => {
  return iconProvider?.getSkillIcon(name) || null;
};

export const Process = {
  Application: "application",
  Work: "work",
} as const;

export const SaveDialog = {
  Title: "Save Changes",
  Description: "Your changes have been saved successfully.",
  Button: "Close",
} as const;

export const NewDialog = {
  Title: "New Changes",
  Description: "Your changes have been added successfully.",
  Button: "Close",
} as const;

export const DeleteDialog = {
  Title: "Save Changes",
  Description: "Your changes have been saved successfully.",
  Button: "Close",
} as const;

export const NewApplication = {
  Title: "New Application",
  Description: "New Description",
  Category: "New Category",
  Tech: "New Technology",
  Repository: "New Repository",
  Site: "New Site",
} as const;

export const NewWork = {
  Name: "New Work",
  Sub: "New Sub",
  Technology: "New Technology",
  Company: "New Company",
  Description: "New Description",
} as const;
