<template>
  <div>
    <el-container direction="vertical">
      <el-header height="">
        <!-- Header content -->
        <h1>Header {{name}} content</h1>
      </el-header>
      <el-container direction="horizontal">
        <el-aside width="200px">
          <!-- Aside content -->
        <p>Aside content</p>
        </el-aside>
        <el-container direction="vertical">
          <el-main height="">
            <!-- Main content -->
          <p>Main content</p>
          </el-main>
          <el-footer height="">
            <!-- Footer content -->
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { UserModule } from '@/store/modules/user'

@Component({
  name: 'Cinema'
})
export default class extends Vue {
  get name() {
    return 'Cinema'
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
