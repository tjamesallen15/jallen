<script setup lang="ts">
import { getProfileHeading, getExperienceHeading, getSkillsHeading } from '@/data/api/common'
import type { Heading } from '@/data/common/types'
import InformationLoader from './resume/InformationLoader.vue'
import Information from './resume/Information.vue'
import Abouts from './resume/Abouts.vue'
import AboutsLoader from './resume/AboutsLoader.vue'
import Experiences from './resume/Experiences.vue'
import ExperienceLoader from './resume/ExperienceLoader.vue'
import Skills from './resume/Skills.vue'
import SkillsLoader from './resume/SkillsLoader.vue'
const profileHeading: Heading = getProfileHeading()
const experienceHeading: Heading = getExperienceHeading()
const skillsHeading: Heading = getSkillsHeading()
</script>

<template>
  <section class="rubik-font">
    <div class="container">
      <Tabs class="resume-tabs" v-bind:value="profileHeading.value">
        <TabList>
          <Tab v-bind:value="profileHeading.value">{{ profileHeading.title }}</Tab>
          <Tab v-bind:value="experienceHeading.value">{{ experienceHeading.title }}</Tab>
          <Tab v-bind:value="skillsHeading.value">{{ skillsHeading.title }}</Tab>

          <Suspense>
            <template #default>
              <Information />
            </template>
            <template #fallback>
              <InformationLoader />
            </template>
          </Suspense>
        </TabList>
        <TabPanels>
          <TabPanel class="profile-panel" v-bind:value="profileHeading.value">
            <div class="main-container">
              <div class="header">
                <h3 class="text-4xl font-bold">{{ profileHeading.title }}</h3>
                <p>{{ profileHeading.description }}</p>
              </div>

              <Suspense>
                <template #default>
                  <Abouts />
                </template>
                <template #fallback>
                  <AboutsLoader />
                </template>
              </Suspense>
            </div>
          </TabPanel>
          <TabPanel class="experience-panel" v-bind:value="experienceHeading.value">
            <div class="main-container">
              <div class="header">
                <h3 class="text-4xl font-bold">{{ experienceHeading.title }}</h3>
                <p>{{ experienceHeading.description }}</p>
              </div>

              <Suspense>
                <template #default>
                  <Experiences />
                </template>
                <template #fallback>
                  <ExperienceLoader />
                </template>
              </Suspense>
            </div>
          </TabPanel>
          <TabPanel class="skills-panel" v-bind:value="skillsHeading.value">
            <div class="main-container">
              <div class="header">
                <h3 class="text-4xl font-bold">Skills</h3>
                <p>
                  List of languages, frameworks, libraries and tools that I have experienced with.
                </p>
              </div>

              <Suspense>
                <template #default>
                  <Skills />
                </template>
                <template #fallback>
                  <SkillsLoader />
                </template>
              </Suspense>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 48px;

  @media (min-width: 1200px) {
    padding-block: 0;
  }

  .container {
    height: 100%;
    width: 100%;
  }
}
</style>
