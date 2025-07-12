<script setup lang="ts">
import { useAbouts } from '@/data/api/gateway'

const { abouts } = await useAbouts()
</script>

<template>
  <ScrollPanel class="details-container">
    <div class="abouts">
      <p class="about karla-font" v-for="about in abouts">
        {{ about.description }}
      </p>
    </div>
  </ScrollPanel>
</template>
