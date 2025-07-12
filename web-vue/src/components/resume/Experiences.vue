<script setup lang="ts">
import { useExperiences } from '@/data/api/gateway'

const { experiences } = await useExperiences()
</script>

<template>
  <ScrollPanel class="details-container">
    <ul class="experiences">
      <li class="experience" v-for="experience in experiences">
        <h3 class="exp-header text-xl">{{ experience.company }}</h3>
        <h4 class="exp-position font-normal">{{ experience.position }}</h4>
        <span class="exp-duration text-sm">{{ experience.duration }}</span>
        <span class="exp-total text-sm">{{ experience.total }}</span>
        <span class="exp-location text-sm">{{ experience.location }}</span>
        <div className="mt-2">
          <p class="karla-font">
            {{ experience.description }}
          </p>
        </div>
      </li>
    </ul>
  </ScrollPanel>
</template>
