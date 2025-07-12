<script setup lang="ts"></script>

<template>
  <div class="profile">
    <div>
      <div>
        <div class="profile-container">
          <img src="@/assets/profile.png" alt="J" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
  position: relative;

  .profile-container {
    width: 298px;
    height: 298px;

    @media (min-width: 1200px) {
      width: 398px;
      height: 398px;
    }

    img {
      object-fit: contain;
      border-radius: 3.40282e38px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
