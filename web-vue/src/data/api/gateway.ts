import axios from 'axios'
import { ref } from 'vue'
import { getServerConfig, getServerPath } from './server'
import type {
  Information,
  Skills,
  About,
  Experience,
  Application,
  ProcessWork,
} from '../common/types'
import { getSkillIcon } from './common'

export const useSkills = async () => {
  const skills = ref<Skills[]>([])
  const config = getServerConfig()
  const url = getServerPath('skill')

  const fetch = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const result = await axios.request({
      url,
      ...config,
    })

    skills.value = result.data
  }

  await fetch()

  return { skills }
}

export const useSkillsWithIcons = async () => {
  const skillsWithIcon = ref<Skills[]>([])
  const config = getServerConfig()
  const url = getServerPath('skill')

  const fetch = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const result = await axios.request({
      url,
      ...config,
    })

    for (let i = 0; i < result.data.length; i++) {
      const skills: Skills = result.data[i]
      skills.icon = getSkillIcon(skills.name)
    }

    skillsWithIcon.value = result.data.filter((item: Skills) => item.icon !== undefined)
  }

  await fetch()

  return { skillsWithIcon }
}

export const useInformations = async () => {
  const informations = ref<Information[]>([])
  const config = getServerConfig()
  const url = getServerPath('information')

  const fetch = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const result = await axios.request({
      url,
      ...config,
    })

    informations.value = result.data
  }

  await fetch()

  return { informations }
}

export const useAbouts = async () => {
  const abouts = ref<About[]>([])
  const config = getServerConfig()
  const url = getServerPath('about')

  const fetch = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const result = await axios.request({
      url,
      ...config,
    })

    abouts.value = result.data
  }

  await fetch()

  return { abouts }
}

export const useExperiences = async () => {
  const experiences = ref<Experience[]>([])
  const config = getServerConfig()
  const url = getServerPath('experience')

  const fetch = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const result = await axios.request({
      url,
      ...config,
    })

    experiences.value = result.data
  }

  await fetch()

  return { experiences }
}

export const useApplications = async () => {
  const applications = ref<Application[]>([])
  const config = getServerConfig()
  const url = getServerPath('application')

  const fetch = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const result = await axios.request({
      url,
      ...config,
    })

    applications.value = result.data
  }

  await fetch()

  return { applications }
}

export const useWorks = async () => {
  const works = ref<ProcessWork[]>([])
  const config = getServerConfig()
  const url = getServerPath('work')

  const fetch = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    const result = await axios.request({
      url,
      ...config,
    })

    for (let i = 0; i < result.data.length; i++) {
      const work: ProcessWork = result.data[i]
      const descriptions = work.description.split('-')
      const filteredDescriptions = descriptions.filter((description) => description.trim() !== '')
      work.descriptions = filteredDescriptions
    }

    works.value = result.data
  }

  await fetch()

  return { works }
}
