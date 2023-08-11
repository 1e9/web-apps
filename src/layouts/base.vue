<script setup lang="ts">
import type { BadgeProps } from '@varlet/ui'

defineOptions({
  name: 'LayoutBase',
})

const router = useRouter()
const routIns = useRoute()
const active = ref('/home')

const badgeProps: BadgeProps = reactive({
  type: 'primary',
  value: '66',
  max: 99,
})

watch(() => active.value, router.replace)
watch(
  () => routIns.path,
  (newValue) => {
    active.value = newValue
  },
  { immediate: true },
)
console.log('base', router.getRoutes(), routIns)
</script>

<template>
  <article class="container">
    <var-app-bar title="标题">
      <template #left>
        <var-button color="transparent" text-color="#fff" round text>
          <var-icon name="chevron-left" :size="24" />
        </var-button>
      </template>
      <template #right>
        <var-menu>
          <var-button color="transparent" text-color="#fff" round text>
            <var-icon name="menu" :size="24" />
          </var-button>
          <template #menu>
            <var-cell ripple>
              选项卡
            </var-cell>
            <var-cell ripple>
              选项卡
            </var-cell>
            <var-cell ripple>
              选项卡
            </var-cell>
          </template>
        </var-menu>
      </template>
    </var-app-bar>
    <section class="content">
      <router-view v-slot="{ Component, route }">
        <transition name="zoom-fade" mode="out-in" appear>
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </section>
    <var-bottom-navigation v-model:active="active">
      <var-bottom-navigation-item label="标签" icon="home" name="/home" />
      <var-bottom-navigation-item label="标签" icon="magnify" badge />
      <var-bottom-navigation-item
        label="标签"
        icon="heart"
        :badge="badgeProps"
      />
      <var-bottom-navigation-item
        label="标签"
        icon="account-circle"
        name="about"
      />
    </var-bottom-navigation>
  </article>
</template>

<style scoped>
  .container {
    display: flex;
    height: 100vh;
    max-height: 100vh;
    flex-direction: column;
  }
  .content {
    flex: 1;
    overflow: auto;
  }
</style>
