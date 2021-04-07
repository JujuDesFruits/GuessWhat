<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view :key="$route.fullPath"/>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppMain'
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  overflow: hidden;
  position: relative;
  min-height: calc(100vh - 96px);
}
</style>
