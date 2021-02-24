<template>
  <div class="page-container">
    <el-container direction="vertical">
      <el-header height="" class="point-number">
        <h3>Vous avez {{points}} points.</h3>
      </el-header>
      <el-main class="page-main">
        <slot/>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { UserModule } from "@/store/modules/UserModule";

  @Component({
    name: 'PageContainer'
  })
  export default class extends Vue {
    get points() {
      return UserModule.points;
    }
  }
</script>

<style lang="scss" scoped>
  .page-container {
    height: 100%;
    .point-number {
      text-align: center;
      color: white;
    }

    .page-main {
      background: rgba(255, 255, 255, 0.4);
      height: calc(100vh - 154px);
      border-radius: 33px 33px 0px 0px;
      -webkit-box-shadow: 0px -5px 20px -7px rgba(0,0,0,0.34);
      -moz-box-shadow: 0px -5px 20px -7px rgba(0,0,0,0.34);
      box-shadow: 0px -5px 20px -7px rgba(0,0,0,0.34);
      padding-bottom: 10px;
    }
  }
</style>
