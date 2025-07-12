<script setup lang="ts">
import { useWorks } from '@/data/api/gateway'

const { works } = await useWorks()
</script>

<template>
  <ScrollPanel class="main-container">
    <div className="works">
      <div v-for="work in works" class="work">
        <div class="name text-3xl font-extrabold">{{ work.name }}</div>
        <div class="sub">{{ work.sub }}</div>
        <div class="technology">{{ work.technology }}</div>
        <div class="company">{{ work.company }}</div>
        <div v-for="desc in work.descriptions" class="description karla-font" key="{index}">
          {{ desc }}
        </div>
        <div class="separator" />
      </div>
    </div>
  </ScrollPanel>
</template>
