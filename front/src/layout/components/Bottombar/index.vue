<template>
  <div class="bottom-bar">
    <el-row class="bar-container">
      <el-col :span="8" class="item">
        <div class="search-wrapper">
          <el-button icon="el-icon-search" circle class="search-button"></el-button>
        </div>
      </el-col>
      <el-col :span="8" class="item">
        <router-link
          to="/question/create"
        >
          <el-button type="primary" round class="play-button">PLAY</el-button>
        </router-link>
      </el-col>
      <el-col :span="8" class="item">
        <router-link
          to="/profile"
        >
          <div class="avatar-wrapper">
            <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
            <i class="el-icon-caret-bottom" />
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from './../../../store/modules/app'
import { UserModule } from '@/store/modules/UserModule'
import Breadcrumb from './../../../components/Breadcrumb/index.vue'
import Hamburger from './../../../components/Hamburger/index.vue'

@Component({
  name: 'Bottombar',
  components: {
    Breadcrumb,
    Hamburger
  }
})
export default class extends Vue {
  get avatar() {
    // return UserModule.avatar
    return "https://www.madietenligne.fr/images/man-1.png";
  }
}
</script>

<style lang="scss" scoped>
.bottom-bar {
  height: 56px;
  overflow: hidden;
  position: relative;
  background: rgb(244,151,26);
  background: linear-gradient(190deg, rgba(244,151,26,1) 0%, rgba(203,119,69,1) 14%, rgba(158,83,115,1) 54%, rgba(158,83,115,1) 61%, rgba(161,85,112,1) 71%, rgba(151,78,122,1) 100%);
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  border-radius: 15px 15px 0px 0px;
  margin-top: -10px;

  .item {
    align-content: center;
    height: 100%;
    text-align: center;

    .search-wrapper {
      position: relative;
      margin-top: 15px;

      .search-button {
        background: none;
        border: none;
        color: white;
        font-size: 21px;
        padding: 0px;
      }
    }

    .play-button {
      background: rgb(130,61,144);
      background: linear-gradient(180deg, rgba(130,61,144,1) 0%, rgba(169,92,104,1) 33%, rgba(204,120,67,1) 100%);
      height: 100%;
      border: none;
      width: 100%;
    }

    .avatar-wrapper {
      margin-top: 5px;
      position: relative;

      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }

      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }

  .bar-container {
    height: 100%;
    width: 100%;
  }
}
</style>
