<script setup lang="ts">
import { useSkillsWithIcons } from '@/data/api/gateway'

const { skillsWithIcon } = await useSkillsWithIcons()
</script>

<template>
  <ScrollPanel class="details-container">
    <ul class="skills">
      <li class="skill" v-for="skill in skillsWithIcon">
        <div v-tooltip.top="skill.name" className="skill-icon">
          <v-icon v-bind:name="skill.icon" />
        </div>
      </li>
    </ul>
  </ScrollPanel>
</template>
