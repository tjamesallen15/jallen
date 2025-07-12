export interface Social {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface About {
  id: number;
  description: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  total: string;
  location: string;
  description: string;
}

export interface Skills {
  id: number,
  name: string,
  experience: string,
  description: string,
  type: string,
  icon: React.ReactNode
}

export interface Information {
  id: number,
  name: string,
  value: string
}

export interface Application {
  id: number,
  title: string,
  description: string,
  category: string,
  tech: string,
  repository: string,
  site: string
}

export interface Work {
  id: number,
  name: string,
  sub: string,
  technology: string,
  company: string,
  description: string
}

export interface ProcessWork extends Work {
  descriptions: string[]
}

export interface Heading {
  title: string;
  description: string;
  value: string;
}

export interface NavigationItem {
  name: string;
  path: string;
}

export interface IndexData {
  title: string,
  first: string,
  last: string,
  message: string
}

export interface SkillIcon {
  name: string,
  icon: React.ReactNode
}