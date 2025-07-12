<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { getPortfolioView } from '@/data/api/common'
import Navigation from '../navigation/Navigation.vue'
import MobileNavigation from '../navigation/MobileNavigation.vue'

const onChange = (e: Event) => {
  const el = e.target as HTMLSelectElement

  if (el.value !== 'vue') {
    const url = getPortfolioView(el.value) || 'https://jallen-vue.vercel.app/'
    window.location.href = url
  }
}
</script>

<template>
  <header class="rubik-font">
    <div class="container">
      <div class="site">
        <RouterLink to="/"> <h1 class="text-4xl font-semibold">James Allen</h1> </RouterLink>

        <div class="viewer-container">
          <select id="viewer" class="viewer karla-font text-sm" @change="onChange">
            <option value="vue">Vue.js</option>
            <option value="react">React</option>
            <option value="next">Next.js</option>
          </select>
        </div>
      </div>

      <Navigation />
      <MobileNavigation />
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--ja-blue-100);
  color: var(--ja-text);
  padding-top: 32px;
  padding-bottom: 32px;
  padding-block-start: 32px;
  padding-block-end: 32px;

  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .site {
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
        color: var(--ja-text);

        h1 {
          line-height: 40px;
        }
      }

      .viewer-container {
        height: 32px;
        align-content: center;

        .viewer {
          background-color: var(--ja-blue-100);
          color: var(--ja-text);
          border: 0;
        }
      }
    }
  }
}
</style>
