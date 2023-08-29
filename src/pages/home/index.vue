<script setup lang="ts">
defineOptions({
  name: 'Home',
})
const He = defineAsyncComponent(() => import('@/components/HelloWorld.vue'))
// const user = useUserStore()
</script>

<template>
  <div>
    首页
    <He msg="123" />
  </div>
</template>

<style scoped>

</style>
