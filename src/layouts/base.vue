<script setup lang="ts">
import type { BadgeProps } from '@varlet/ui'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { getUserAvatar } from '@/apis/index'

defineOptions({
  name: 'LayoutBase',
})

const router = useRouter()
const routIns = useRoute() as RouteLocationNormalizedLoaded & { meta: { title: string; tabPage: boolean } }
const active = ref('/home')
const avatar = ref('')
const { id, username } = window?.Telegram?.WebApp?.initDataUnsafe?.user || {}

if (id) {
  getUserAvatar(id).then((res) => {
    avatar.value = res
  })
}

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
</script>

<template>
  <article class="container">
    <var-app-bar :title="routIns.meta.title" title-position="center">
      <template #left>
        <var-space v-if="routIns.meta.tabPage" align="center">
          <var-avatar :src="avatar" size="mini" />{{ username }}
        </var-space>
        <var-button v-else color="transparent" text-color="#fff" round text @click="router.back()">
          <var-icon name="chevron-left" :size="24" />
        </var-button>
      </template>
      <template #right>
        <var-menu placement="bottom-start">
          <var-button color="transparent" text-color="#fff" round text>
            <var-icon name="menu" :size="24" />
          </var-button>
          <template #menu>
            <var-cell>
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
    <var-bottom-navigation v-show="routIns.meta.tabPage" v-model:active="active">
      <var-bottom-navigation-item label="首页" icon="home" name="/home" />
      <var-bottom-navigation-item label="关于" icon="magnify" badge name="/about" />
      <var-bottom-navigation-item
        label="消息"
        icon="heart"
        :badge="badgeProps"
        name="/message"
      />
      <var-bottom-navigation-item
        label="我的"
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
