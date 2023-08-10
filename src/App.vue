<script setup lang="ts">
const active = ref(0)
</script>

<template>
  <div>
    <var-app-bar title="标题">
    <template #left>
      <var-button
        color="transparent"
        text-color="#fff"
        round
        text
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu>
        <var-button
          color="transparent"
          text-color="#fff"
          round
          text
        >
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <var-cell ripple>选项卡</var-cell>
          <var-cell ripple>选项卡</var-cell>
          <var-cell ripple>选项卡</var-cell>
        </template>
      </var-menu>
    </template>
  </var-app-bar>

    <div class="fo">你好啊</div>
    <var-button type="primary">主要按钮</var-button>
  <var-bottom-navigation v-model:active="active" fixed>
    <var-bottom-navigation-item label="标签" icon="home" />
    <var-bottom-navigation-item label="标签" icon="magnify" />
    <var-bottom-navigation-item label="标签" icon="heart" />
    <var-bottom-navigation-item label="标签" icon="account-circle" />
  </var-bottom-navigation>
  </div>
  
</template>

<style scoped>
/* 添加这段样式后，Primary Button 会变成红色 */
.fo {
  color: red;
  font-size: 16px;
}
</style>
