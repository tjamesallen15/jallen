<script setup lang="ts">
const goToLinkedIn = () => {
  window.location.href = 'https://www.linkedin.com/in/tjamesallen15'
}
</script>

<template>
  <div class="navigation-container">
    <nav class="karla-font text-lg font-normal">
      <RouterLink v-bind:class="{ current: $route.path == '/' }" to="/">Home</RouterLink>
      <RouterLink v-bind:class="{ current: $route.path == '/resume' }" to="/resume"
        >Resume</RouterLink
      >
      <RouterLink v-bind:class="{ current: $route.path == '/projects' }" to="/projects"
        >Projects</RouterLink
      >
    </nav>
    <button @click="goToLinkedIn" class="hire-me text-sm font-medium rubik-font">
      <span>Hire me</span>
      <font-awesome-icon icon="fa-solid fa-right-long" />
    </button>
  </div>
</template>

<style scoped>
.navigation-container {
  display: none;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    column-gap: 32px;
  }

  nav {
    display: flex;
    flex-direction: row;
    column-gap: 32px;
    row-gap: 32px;

    a {
      text-decoration: none;
      color: var(--ja-text);
      line-height: 28px;

      &.current {
        color: var(--ja-text-link-alt);
        border-bottom: 2px solid var(--ja-text-link-alt);
      }

      &:hover {
        color: var(--ja-text-link-alt);
      }
    }
  }

  .hire-me {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 8px 12px;
    border-radius: 6px;
    background-color: white;
    color: var(--ja-text-alt);
    width: 99.64px;
    height: 36px;
    border: 0;
    column-gap: 12px;
    transition: all;
    transition-duration: 0.15s;

    span {
      padding-top: 1px;
    }

    svg {
      height: 12px;
    }

    &:hover {
      background-color: var(--ja-button-accent);
      color: var(--ja-text);
    }
  }
}
</style>
