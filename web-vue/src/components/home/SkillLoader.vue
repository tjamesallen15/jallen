<template>
  <Skeleton></Skeleton>
  <Skeleton></Skeleton>
  <Skeleton></Skeleton>
</template>

<style scoped>
.p-skeleton {
  background-color: var(--ja-skeleton-bg);
  border-radius: 6px;

  &::after {
    background: var(--ja-skeleton-loader);
  }
}
</style>
