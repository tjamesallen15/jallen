<script setup lang="ts">
import { getFooterSocials } from '@/data/api/common'
import type { Social } from '@/data/common/types'

const footerSocials: Social[] = getFooterSocials()
</script>

<template>
  <footer>
    <span class="text-xs rubik-font"
      >Created using Vue.js © Copyright 2020 of James Allen All Rights Reserved.</span
    >
    <div class="footer-socials rubik-font">
      <a v-for="social in footerSocials" :key="social.name" :href="social.href">
        <font-awesome-icon :icon="social.icon" />
        <span class="text-xs">{{ social.name }}</span>
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--ja-blue-100);
  color: var(--ja-text-link);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  bottom: 0;
  position: fixed;

  .footer-socials {
    display: flex;
    flex-direction: row;
    column-gap: 24px;
    row-gap: 24px;
    align-items: center;

    a {
      display: inline-flex;
      column-gap: 8px;
      text-decoration: none;
      color: var(--ja-text-link);

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
