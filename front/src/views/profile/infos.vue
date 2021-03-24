<template>
  <div class="informations">
    <el-container direction="vertical">
      <el-header height="" class="informations-title">
        <!-- Header content -->
        <el-row class="">
          <el-col :span="4" :offset="3" style="margin: 1.8em 0;"><svg-icon style="width: 1.4em; height: 1.4em;"  name="right_arrow" class="rotate"/></el-col>
          <el-col :span="17" ><h1>MES INFOS</h1></el-col>
        </el-row>
      </el-header>
      <el-main class="informations-content">
        <el-row class="head identite">
          <el-col :span="17" :offset="3">
            <span>
              <b>MON IDENTITÉ</b>
            </span>
            <el-divider class="divider" direction="horizontal" content-position="center"></el-divider>
          </el-col>
        </el-row>
        <el-row class="identite-content">
          <el-col class="info-item" :span="17" :offset="3">
            <span>Pseudo : </span>
            <b>{{username}}</b>
          </el-col>
          <el-col class="info-item" :span="17" :offset="3">
            <span>Né(e) le : </span>
            <b>{{dateOfBirth}}</b>
          </el-col>
          <el-col class="info-item" :span="17" :offset="3">
            <span>E-mail : </span>
            <b>{{mail}}</b>
          </el-col>
        </el-row>
        
        <el-row class="head account">
          <el-col :span="17" :offset="3">
            <span>
              <b>MES INFOS DE COMPTE</b>
            </span>
            <el-divider class="divider" direction="horizontal" content-position="center"></el-divider>
          </el-col>
        </el-row>
        <el-row class="account-content">
          <el-col class="info-item" :span="17" :offset="3">
            <span>Compte crée le </span>
            <b>{{createdAt}}</b>
          </el-col>
          <el-col class="info-item" :span="17" :offset="3">
            <span>Conditions Générales d'Utilisations validées le </span>
            <b>{{allowedAt}}</b>
          </el-col>
        </el-row>

        
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserModule } from "@/store/modules/UserModule";
// import { UserModule } from '@/store/modules/user'

@Component({
  name: "Profile"
})
export default class extends Vue {
  private imageUrl = "";

  get name() {
    return "Profile";
  }

  get username() {
    return UserModule.username;
  }
  get mail() {
    return UserModule.mail;
  }

  get createdAt() {
    return UserModule.createdAt;
  }
  get allowedAt() {
    // return UserModule.allowedAt;
    return "00/00/0000";
  }

  get dateOfBirth() {
    // return UserModule.dateOfBirth;
    return "00/00/0000";
  }
  private handleAvatarSuccess(res: any, file: any) {
    this.imageUrl = URL.createObjectURL(file.raw);
  }

  beforeAvatarUpload(file: any) {
    const isJPG = file.type === "image/jpeg";
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJPG) {
      this.$message.error("L'avatar doit être en JPG !");
    }
    if (!isLt2M) {
      this.$message.error("L'avatar ne peut pas excéder 2Mb !");
    }
    return isJPG && isLt2M;
  }
}
</script>

<style lang="scss" scoped>
.informations {
  color: white;

  .rotate {
    transform: rotate(
180deg
);
  }
  .informations-title {
    text-align: center;
    color: white;
  }

  .informations-content {
    width: 100%;
    align-self: center;
    display: contents;

    .head {
      margin-top: 30px;
    }

    .head.account {
      margin-top: 50px;
    }

    .username {
      color: white;
      margin-top: 5px;
      margin-bottom: 20px;
    }

    .info-item {
      color: white;
      margin-top: 10px;
    }

    .content {
      align-self: center;
      text-align: center;
    }
  }

  .el-divider {
    margin-top: 10px;
  }
}

.bottom-bar {
  margin-top: 0px !important;
}
</style>
