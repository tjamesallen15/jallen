<script setup lang="ts">
import { useSkills } from '@/data/api/gateway'
const { skills } = await useSkills()
</script>

<template>
  <span class="badge rubik-font font-medium text-xs" v-for="skill in skills">{{ skill.name }}</span>
</template>

<style scoped>
.badge {
  background-color: var(--ja-badge-bg);
  border-radius: 8px;
  padding: 2px 8px;
  height: 22px;
  border: 1px solid rgba(0, 0, 0, 0);
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  color: black;
  justify-content: center;
  flex-shrink: 0;
  width: fit-content;
}
</style>
