<template>
  <div class="navbar">
    <div class="supernav-items" style="float: left">
      <div class="logo-container">
        <el-image style="width: 100; height: 45px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="contain" ></el-image>
        </div>
      <el-button-group class="btn-group-supernav" v-if="!isMobile()" >
        <router-link :to="{name: 'TopQuestionsPage'}">
          <el-button type="light" size="small">
            <svg-icon :name="'trophy'" style="margin-end: 5px" />
            Top Questions
          </el-button>
        </router-link>
        <router-link :to="{name: 'ClassementPage'}">
          <el-button type="light" size="small" style="margin-left: 5px">
            <svg-icon :name="'podium-gold'" style="margin-end: 5px" />
            Classement</el-button
          >
        </router-link>
      </el-button-group>
      <el-input v-model="data.searchText" placeholder="Rechercher" size="small" prefix-icon="el-icon-search" clearable @change="onSearch()"></el-input>
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/armour/vue-typescript-admin-template/">
            <el-dropdown-item>
              Github
            </el-dropdown-item>
          </a>
          <a target="_blank" href="https://armour.github.io/vue-typescript-admin-docs/">
            <el-dropdown-item>
              Docs
            </el-dropdown-item>
          </a>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">LogOut</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DeviceType, AppModule } from "./../../../store/modules/app";
import { UserModule } from '@/store/modules/UserModule'
import Breadcrumb from "./../../../components/Breadcrumb/index.vue";
import Hamburger from "./../../../components/Hamburger/index.vue";

@Component({
  name: "Navbar",
  components: {
    Breadcrumb,
    Hamburger
  }
})
export default class extends Vue {
  private data = {
    searchText: ''
  };

  private onSearch() {
    console.log(this.data.searchText);

  }

  get sidebar() {
    return AppModule.sidebar;
  }

  goBack() {
    console.log("go back");
  }

  private isMobile() {
    return AppModule.device === DeviceType.Mobile;
  }

  get device() {
    return this.device === DeviceType.Mobile;
  }

  get avatar() {
    // return UserModule.avatar
    return "";
  }

  private toggleSideBar() {
    AppModule.ToggleSideBar(false);
  }

  private async logout() {
    await UserModule.ResetToken()
    this.$router.push(`/login?redirect=${this.$route.fullPath}`)
  }
}
</script>

<style lang="scss" scoped>
.supernav-items {
  display: flex;

  .logo-container {
    // display: inline-block;
    width: 100px;
    margin-top: 2px;
  }
  .el-input {
    width: 200px !important;
    margin-top: 10px;
  }

  .btn-group-supernav {
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
  }
}
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: rgb(48, 65, 86);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

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
  }
}
</style>
