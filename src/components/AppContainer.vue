<script setup lang="ts">
defineOptions({
  name: 'AppContainer',
})
const isWebApps = !!window?.Telegram?.WebApp?.initData
const isMobile = ref(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
</script>

<template>
  <slot v-if="isMobile || isWebApps" />
  <div v-else class="result-container">
    <var-result class="result" type="warning" title="提醒" description="清使用移动端查看" />
  </div>
</template>

<style scoped>
.result-container {
  width: 100%;
  min-height: var(--app-height);
  display: flex;
  justify-content: center;
  align-items: center;
}

.result {
  width: 40%;
  min-width: 375px;
}
</style>
