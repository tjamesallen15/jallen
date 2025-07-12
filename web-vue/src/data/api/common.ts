import type { Heading, IndexData, SkillIcon, Social } from '../common/types'

export function getIndexData() {
  const data: IndexData = {
    title: 'Senior Software Engineer',
    first: 'James Allen',
    last: 'Tadique',
    message:
      'I am a full-stack developer with 11 years of total experience in different technical stacks. A person that finds enjoyment in learning about software development such as different languages or technology, open to new challenges in coding and can be a team player. I thrive in research and development while delivering high quality systems.',
  }

  return data
}

export function getProfileHeading() {
  const profile: Heading = {
    title: 'Profile',
    description: 'Summary of what I have so far done throughout my career span.',
    value: 'profile',
  }

  return profile
}

export function getExperienceHeading() {
  const experience: Heading = {
    title: 'Experience',
    description: 'Here I am sharing with you the summary of my work history.',
    value: 'experience',
  }

  return experience
}

export function getSkillsHeading() {
  const skills: Heading = {
    title: 'Skills',
    description: 'List of languages, frameworks, libraries and tools that I have experienced with.',
    value: 'skills',
  }

  return skills
}

export function getSocials() {
  const socials: Social[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/tjamesallen15',
      icon: 'fa-brands fa-github',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tjamesallen15/',
      icon: 'fa-brands fa-linkedin',
    },
  ]

  return socials
}

export function getFooterSocials() {
  const socials: Social[] = [
    {
      name: 'Vue.js',
      href: 'https://vuejs.org/',
      icon: 'fa-brands fa-vuejs',
    },
    {
      name: 'Hire Me',
      href: 'https://www.linkedin.com/in/tjamesallen15/',
      icon: 'fa-solid fa-envelope',
    },
  ]

  return socials
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
      icon: 'fa-html5',
    },
    {
      name: 'CSS3',
      icon: 'fa-css3',
    },
    {
      name: 'JavaScript',
      icon: 'fa-js',
    },
    {
      name: 'TypeScript',
      icon: 'si-typescript',
    },
    {
      name: 'Angular',
      icon: 'fa-angular',
    },
    {
      name: 'React',
      icon: 'fa-react',
    },
    {
      name: 'Next.js',
      icon: 'si-nextdotjs',
    },
    {
      name: 'Tailwind CSS',
      icon: 'si-tailwindcss',
    },
    {
      name: 'Node.js',
      icon: 'fa-node-js',
    },
    {
      name: 'Java',
      icon: 'fa-java',
    },
    {
      name: 'Spring MVC',
      icon: 'si-spring',
    },
    {
      name: 'Spring Boot',
      icon: 'si-springboot',
    },
    {
      name: 'Maven',
      icon: 'si-apachemaven',
    },
    {
      name: 'Python',
      icon: 'fa-python',
    },
    {
      name: 'Oracle',
      icon: 'si-oracle',
    },
    {
      name: 'MySQL',
      icon: 'si-mysql',
    },
    {
      name: 'PostgreSQL',
      icon: 'si-postgresql',
    },
    {
      name: 'SQLite',
      icon: 'si-sqlite',
    },
    {
      name: 'Puppeteer',
      icon: 'si-puppeteer',
    },
    {
      name: 'Figma',
      icon: 'fa-figma',
    },
    {
      name: 'Git',
      icon: 'fa-git',
    },
    {
      name: 'GitHub',
      icon: 'fa-github',
    },
    {
      name: 'GitLab',
      icon: 'fa-gitlab',
    },
    {
      name: 'Jenkins',
      icon: 'fa-jenkins',
    },
    {
      name: 'Railway',
      icon: 'si-railway',
    },
    {
      name: 'Vercel',
      icon: 'si-vercel',
    },
    {
      name: 'Vue.js',
      icon: 'si-vuedotjs',
    },
  ]

  const filteredSkillIcon: SkillIcon = skills.filter((item: SkillIcon) => item.name === name)[0]
  return filteredSkillIcon?.icon
}
