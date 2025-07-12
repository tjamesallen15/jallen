<script setup lang="ts">
import Personal from './projects/Personal.vue'
import PersonalLoader from './projects/PersonalLoader.vue'
import Works from './projects/Works.vue'
import WorksLoader from './projects/WorksLoader.vue'
</script>

<template>
  <section class="rubik-font">
    <div class="container">
      <Tabs class="projects-tabs" value="0">
        <TabList>
          <Tab value="0">Personal</Tab>
          <Tab value="1">Work</Tab>
        </TabList>
        <TabPanels>
          <TabPanel class="personal-panel" value="0">
            <Suspense>
              <template #default>
                <Personal />
              </template>
              <template #fallback>
                <PersonalLoader />
              </template>
            </Suspense>
          </TabPanel>
          <TabPanel class="work-panel" value="1">
            <Suspense>
              <template #default>
                <Works />
              </template>
              <template #fallback>
                <WorksLoader />
              </template>
            </Suspense>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 48px;

  @media (min-width: 1200px) {
    padding-block: 0;
  }

  .container {
    height: 100%;
    width: 100%;
  }
}
</style>
