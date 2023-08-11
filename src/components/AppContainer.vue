<script setup lang="ts">
defineOptions({
  name: 'app-container',
})
const isMobile = ref(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
</script>

<template>
  <slot v-if="isMobile" />
  <div class="result-container" v-else>
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