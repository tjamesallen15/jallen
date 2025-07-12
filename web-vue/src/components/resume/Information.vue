<script setup lang="ts">
import { useInformations } from '@/data/api/gateway'

const { informations } = await useInformations()
</script>

<template>
  <div className="info-container">
    <div class="info" v-for="info in informations">
      <div class="info-name font-semibold">{{ info.name }}:</div>
      <div class="info-value karla-font">{{ info.value }}</div>
    </div>
    <!-- <div class="info">
      <div class="info-name font-semibold">Name:</div>
      <div class="info-value karla-font">James Allen Tadique</div>
    </div>
    <div class="info">
      <div class="info-name font-semibold">Phone:</div>
      <div class="info-value karla-font">(+63) 917 844 4182</div>
    </div>
    <div class="info">
      <div class="info-name font-semibold">Email:</div>
      <div class="info-value karla-font">tjamesallen15@yahoo.com</div>
    </div>
    <div class="info">
      <div class="info-name font-semibold">Email II:</div>
      <div class="info-value karla-font">tjamesallen15@gmail.com</div>
    </div>
    <div class="info">
      <div class="info-name font-semibold">Nationality:</div>
      <div class="info-value karla-font">Filipino</div>
    </div> -->
  </div>
</template>
