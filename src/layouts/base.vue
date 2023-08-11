<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; 
import type { BadgeProps } from '@varlet/ui';

defineOptions({
    name: 'layout-base',
  })

  const active = ref('/home')
  const badgeProps: BadgeProps = reactive({
  type: 'primary',
  value: '66'
  })
  const router = useRouter()
  const route = useRoute()
  
  watch(() => active.value, router.replace)
  watch(
  () => route.path,
  (newValue) => {
    active.value = newValue
  },
  { immediate: true }
)
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
  <router-view v-slot="{ Component, route }">
      <transition name="zoom-fade" mode="out-in" appear>
        <component :is="Component" :key="route.fullPath" />
      </transition>
  </router-view>
  <HelloWorld msg="你好啊" />
  <var-button type="primary">主要按钮</var-button>
  <var-bottom-navigation v-model:active="active">
    <var-bottom-navigation-item label="标签" icon="home" name="/home" />
    <var-bottom-navigation-item label="标签" icon="magnify" badge />
    <var-bottom-navigation-item label="标签" icon="heart" :badge="badgeProps" />
    <var-bottom-navigation-item label="标签" icon="account-circle" name="about"/>
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
