<script setup lang="ts">
import { useApplications } from '@/data/api/gateway'

const { applications } = await useApplications()
</script>

<template>
  <ScrollPanel class="main-container">
    <div className="personals">
      <div v-for="application in applications" class="personal" key="{index}">
        <div className="header">
          <div class="title text-3xl font-extrabold">{{ application.title }}</div>
          <div class="logo-container">
            <a v-if="application.site !== null" :href="application.site" class="site-link">
              <font-awesome-icon icon="fa-solid fa-globe" />
            </a>
            <a
              v-if="application.repository !== 'N/A'"
              :href="application.repository"
              class="repo-link"
            >
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <h2 class="tech">{{ application.tech }}</h2>
        <h2 class="category font-semibold leading-none">{{ application.category }}</h2>
        <p class="description karla-font">
          {{ application.description }}
        </p>
        <div class="separator" />
      </div>
    </div>
  </ScrollPanel>
</template>

<style scoped>
.logo-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-inline-end: 16px;

  .site-link,
  .repo-link {
    width: 32px;
    height: 32px;
    border-radius: 3.40282e38px;
    background-color: var(--ja-badge-bg);
    transition: all;
    transition-duration: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--ja-black);

    svg {
      font-size: 20px;
      width: 28px;
      height: 28px;
    }

    &:hover {
      color: white;
      background-color: var(--ja-button-accent);
      rotate: -360deg;
    }
  }
}
</style>
