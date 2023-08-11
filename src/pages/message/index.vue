<script setup lang="ts">
defineOptions({
  name: 'Message',
})
const loading = ref(false)
const finished = ref(false)
const router = useRouter()
const list = ref([])

function load() {
  setTimeout(() => {
    for (let i = 0; i < 20; i++)
      list.value.push(list.value.length + 1)

    loading.value = false

    if (list.value.length >= 60)
      finished.value = true
  }, 1000)
}
function goDetail(item: string) {
  router.push({ path: `/message/detail/${item}` })
  console.log(item)
}
</script>

<template>
  <div>
    <var-list
      v-model:loading="loading"
      :finished="finished"
      @load="load"
    >
      <var-cell v-for="item in list" :key="item" @click="goDetail(item)">
        列表项: {{ item }}
      </var-cell>
    </var-list>
  </div>
</template>

<style scoped>

</style>
