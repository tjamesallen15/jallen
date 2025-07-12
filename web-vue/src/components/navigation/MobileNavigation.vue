<script setup lang="ts">
import { ref } from 'vue'
import MobileSocials from '../socials/MobileSocials.vue'
let visibleRight = ref(false)

const goToLinkedIn = () => {
  window.location.href = 'https://www.linkedin.com/in/tjamesallen15'
}
</script>

<template>
  <div class="menu-button-container">
    <button class="menu-button rubik-font text-md font-normal" @click="visibleRight = true">
      <font-awesome-icon icon="fa-solid fa-bars" />
      <span>Menu</span>
    </button>
    <button @click="goToLinkedIn" class="hire-me text-sm font-medium rubik-font">
      <span>Hire me</span>
      <font-awesome-icon icon="fa-solid fa-right-long" />
    </button>
  </div>

  <Drawer v-model:visible="visibleRight" position="right">
    <div className="nav-title rubik-font text-2xl">James Allen</div>
    <div class="mobile-navigation-container">
      <nav class="karla-font text-md font-medium">
        <RouterLink v-bind:class="{ current: $route.path == '/' }" to="/">Home</RouterLink>
        <RouterLink v-bind:class="{ current: $route.path == '/resume' }" to="/resume"
          >Resume</RouterLink
        >
        <RouterLink v-bind:class="{ current: $route.path == '/projects' }" to="/projects"
          >Projects</RouterLink
        >
      </nav>
    </div>
    <MobileSocials />
  </Drawer>
</template>

<style>
.menu-button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 16px;
  row-gap: 16px;

  @media (min-width: 960px) {
    display: none;
  }

  .menu-button {
    background-color: var(--ja-blue-100);
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    row-gap: 8px;

    span {
      display: none;

      @media (min-width: 640px) {
        display: block;
      }
    }

    &:hover {
      color: var(--ja-text-link-alt);
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

.p-drawer {
  background-color: var(--ja-blue-100) !important;

  @media (min-width: 640px) {
    max-width: 384px;
    min-width: 384px;
  }

  .p-drawer-header {
    flex-direction: row-reverse;

    .p-button {
      color: var(--ja-text);

      svg {
        width: 20px;
        height: 20px;
      }

      &:hover {
        color: var(--ja-text-link-alt) !important;
        background-color: var(--ja-blue-100) !important;
      }
    }
  }

  .p-drawer-content {
    .nav-title {
      color: var(--ja-text);
      margin-top: 30px;
      margin-bottom: 160px;
      text-align: center;
    }

    .mobile-navigation-container nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 32px;

      a {
        text-decoration: none;
        color: var(--ja-text);
        transition: all;
        transition-duration: 0.15s;
        line-height: 2;

        &.current {
          color: var(--ja-text-link-alt);
          border-bottom: 2px solid var(--ja-text-link-alt);
        }

        &:hover {
          color: var(--ja-text-link-alt);
        }
      }
    }

    /* .socials {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      column-gap: 24px;
      row-gap: 24px;
      margin-top: 24px;

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
          color: var(--ja-text);
          padding-top: 1px;
        }

        &:hover {
          background-color: var(--ja-button-accent);

          svg {
            color: var(--ja-text);
          }
        }
      }
    } */
  }
}
</style>
