<script setup lang="ts">
import { getSocials } from '@/data/api/common'
import type { Social } from '@/data/common/types'

const socials: Social[] = getSocials()

const goToGitHub = () => {
  window.location.href = socials[0].href
}

const goToLinkedIn = () => {
  window.location.href = socials[1].href
}
</script>

<template>
  <div class="socials">
    <button @click="goToGitHub">
      <font-awesome-icon v-bind:icon="socials[0].icon" />
    </button>
    <button @click="goToLinkedIn">
      <font-awesome-icon v-bind:icon="socials[1].icon" />
    </button>
  </div>
</template>

<style scoped>
.socials {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 24px;
  row-gap: 24px;

  @media (min-width: 1200px) {
    justify-content: left;
  }

  button {
    height: 36px;
    width: 36px;
    background-color: transparent;
    color: var(--ja-text-alt);
    border: 1px solid var(--ja-button-accent);
    border-radius: 3.35544e7px;
    transition: all;
    transition-duration: 0.15s;

    svg {
      height: 16px;
      width: 16px;
      color: var(--ja-button-accent);
      padding-top: 1px;
    }

    &:hover {
      background-color: var(--ja-button-accent);

      svg {
        color: var(--ja-text);
      }
    }
  }
}
</style>
