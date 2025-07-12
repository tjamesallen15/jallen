<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from './views/main/HeaderView.vue'
import FooterView from './views/main/FooterView.vue'
</script>

<template>
  <HeaderView />
  <RouterView />
  <FooterView />
</template>

<style scoped></style>
