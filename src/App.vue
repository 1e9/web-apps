<script setup lang="ts">
import AppContainer from '@/components/AppContainer.vue'
</script>

<template>
  <AppContainer>
    <router-view />
  </AppContainer>
</template>

<style scoped>
/* 添加这段样式后，Primary Button 会变成红色 */
.fo {
  color: red;
  font-size: 16px;
}
</style>
