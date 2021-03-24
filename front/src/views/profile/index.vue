<template>
  <div class="profile">
    <el-container direction="vertical">
      <el-header height="" class="profile-title">
        <!-- Header content -->
        <h1>MON COMPTE</h1>
      </el-header>
      <el-main class="profile-menu">
        <el-row class="content">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-row>
        <el-row class="username">
          <span>
            <center><b>{{username}}</b></center>
          </span>
        </el-row>
        <!-- <router-link
          to="/question/create"
        > -->
        <el-row class="menu-item">
          <el-col :span="17" :offset="3">Mes statistiques</el-col>
          <el-col :span="4"><svg-icon name="right_arrow"/></el-col>
        </el-row>
        <!-- </router-link> -->
        <router-link
          to="/profile/me"
        >
        <el-row class="menu-item">
          <el-col :span="17" :offset="3">Mes infos personnelles</el-col>
          <el-col :span="4"><svg-icon name="right_arrow"/></el-col>
        </el-row>
        </router-link>
        <el-row class="menu-item">
          <el-col :span="17" :offset="3">Paramètres</el-col>
          <el-col :span="4"><svg-icon name="right_arrow"/></el-col>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {UserModule} from "@/store/modules/UserModule";
// import { UserModule } from '@/store/modules/user'

@Component({
  name: 'Profile'
})
export default class extends Vue {

  private imageUrl = ""

  get name() {
    return 'Profile';
  }

  get username() {
    return UserModule.username;
  }
  private handleAvatarSuccess(res: any, file: any) {
    this.imageUrl = URL.createObjectURL(file.raw);
  }

  beforeAvatarUpload(file: any) {
    const isJPG = file.type === 'image/jpeg';
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJPG) {
      this.$message.error('L\'avatar doit être en JPG !');
    }
    if (!isLt2M) {
      this.$message.error('L\'avatar ne peut pas excéder 2Mb !');
    }
    return isJPG && isLt2M;
  }
}
</script>

<style lang="scss" scoped>
.profile {
  .profile-title {
    text-align: center;
    color: white;
  }

  .profile-menu {
    width: 100%;
    align-self: center;
    display: contents;

    .username {
      color: white;
      margin-top: 5px;
      margin-bottom: 20px;
    }

    .menu-item {
      color: white;
      margin-top: 50px;
    }

    .content {
      align-self: center;
      text-align: center;
    }
  }
}
.avatar-uploader {
   border: 1px dashed #d9d9d9 !important;
   border-radius: 6px;
   cursor: pointer;
   position: relative;
   overflow: hidden;
   width: 178px;
   height: 178px;
 }
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #ffffff;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
