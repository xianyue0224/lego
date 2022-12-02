<script setup lang="ts">
import MyHeader from "./components/MyHeader.vue"
import MyFooter from "./components/MyFooter.vue"
</script>

<script setup lang="ts">

</script>

<template>
  <MyHeader v-if="$route.meta.withHeaderFooter" />
  <RouterView />
  <MyFooter v-if="$route.meta.withHeaderFooter" />
</template>

<style scoped lang="scss">

</style>
