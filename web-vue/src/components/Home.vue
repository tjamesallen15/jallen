<script setup lang="ts">
import type { IndexData } from '@/data/common/types'
import { getIndexData } from '@/data/api/common'
import Profile from './profile/Profile.vue'
import SkillLoader from './home/SkillLoader.vue'
import Skills from './home/Skills.vue'
import Socials from './socials/Socials.vue'

const data: IndexData = getIndexData()
</script>

<template>
  <section class="rubik-font">
    <div class="container">
      <div class="home">
        <div class="left">
          <span class="text-xl font-normal position">{{ data.title }}</span>
          <h1 class="h1 font-semibold">
            <span class="name">{{ data.first }}</span>
            <br />
            <span>{{ data.last }}</span>
          </h1>

          <p class="heading karla-font">
            {{ data.message }}
          </p>

          <Socials />
        </div>

        <div class="right">
          <Profile />
        </div>
      </div>

      <div class="badge-container">
        <Suspense>
          <template #default>
            <Skills />
          </template>
          <template #fallback>
            <SkillLoader />
          </template>
        </Suspense>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  height: 100vh;

  @media (min-width: 1200px) {
    height: 85vh;
  }

  .container {
    height: 100%;

    .home {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-top: 32px;
      color: var(--ja-text-alt);

      @media (min-width: 1200px) {
        flex-direction: row;
        padding-bottom: 96px;
      }

      .left {
        display: flex;
        flex-direction: column;
        text-align: center;
        order: 2;

        @media (min-width: 1200px) {
          text-align: left;
          order: 0;
        }

        .position {
          line-height: 28px;
        }

        .h1 {
          line-height: 1;
          margin-bottom: 28px;

          .name {
            color: var(--ja-text-highlight);
            line-height: 0;

            @media (min-width: 1200px) {
              line-height: 96px;
            }
          }

          .name + span {
            @media (min-width: 1200px) {
              line-height: 0;
            }
          }
        }

        .heading {
          max-width: 500px;
          margin-bottom: 36px;
          line-height: 32px;
        }
      }

      .right {
        margin-bottom: 32px;

        @media (min-width: 1200px) {
          margin-bottom: 0;
        }
      }
    }

    .badge-container {
      display: none;

      @media (min-width: 1200px) {
        display: flex;
        flex-direction: row;
        column-gap: 8px;
        row-gap: 8px;
        width: 100%;
        max-width: 1250px;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
