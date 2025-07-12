<template>
  <div class="skeletion-container">
    <Skeleton></Skeleton>
    <Skeleton></Skeleton>
    <Skeleton></Skeleton>
    <Skeleton></Skeleton>
    <Skeleton></Skeleton>
  </div>
</template>

<style scoped>
.skeletion-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 24px;
  padding-inline-start: 20px;
}

.p-skeleton {
  background-color: var(--ja-skeleton-bg);
  border-radius: 6px;

  &::after {
    background: var(--ja-skeleton-loader);
  }
}
</style>
