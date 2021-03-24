<template>
  <div class="settings">
    <el-container direction="vertical">
      <el-header height="" class="settings-title">
        <!-- Header content -->
        <el-row class="">
          <router-link
          to="/profile"
        >
          <el-col :span="4" :offset="3" style="margin: 1.8em 0;"><svg-icon style="width: 1.4em; height: 1.4em;"  name="right_arrow" class="rotate"/></el-col>
          </router-link>
          <el-col :span="17" ><h1>PARAMÈTRES</h1></el-col>
        </el-row>
      </el-header>
      <el-main class="settings-content">
        <el-row class="head mdp">
          <el-col :span="17" :offset="3">
            <span>
              <b>CHANGER DE MOT DE PASSE</b>
            </span>
            <el-divider class="divider" direction="horizontal" content-position="center"></el-divider>
          </el-col>
        </el-row>
        <el-row class="mdp-content">
          
        </el-row>
        
        <el-row class="head options">
          <el-col :span="17" :offset="3">
            <span>
              <b>MES OPTIONS</b>
            </span>
            <el-divider class="divider" direction="horizontal" content-position="center"></el-divider>
          </el-col>
        </el-row>
        <el-row class="options-content">
          <el-col class="options-item" :span="17" :offset="3">
            <span>J'accepte de recevoir des notifications par mail</span>
            <el-row :gutter="20" style="margin-top: 15px">
              <el-col :span="12" :offset="0">
                <center>
                  <el-button v-if="!hasNotifs" class="rounded t-violet shadow-btn bold" size="small" @click="triggerClick('notif','Non')">Non</el-button>
                  <el-button v-else class="rounded t-violet shadow-btn bold btn-no" size="small" @click="triggerClick('notif','Non')">Non</el-button>
                </center>
              </el-col>
              <el-col :span="12" :offset="0">
                <center>
                  <el-button v-if="hasNotifs" class="rounded t-violet shadow-btn bold" size="small" @click="triggerClick('notif','Oui')">Oui</el-button>
                  <el-button v-else class="rounded t-violet shadow-btn bold btn-no" size="small" @click="triggerClick('notif','Oui')">Oui</el-button>
                </center>
              </el-col>
            </el-row>
          </el-col>

          <el-col class="options-item" :span="17" :offset="3" style="margin-top: 20px">
            <span>J'accepte de recevoir des newsletters de Guess What ?</span>
            <el-row :gutter="20" style="margin-top: 15px">
              <el-col :span="12" :offset="0">
                <center>
                  <el-button v-if="!hasNewsletters" class="rounded t-violet shadow-btn bold" size="small" @click="triggerClick('newsletters','Non')">Non</el-button>
                  <el-button v-else class="rounded t-violet shadow-btn bold btn-no" size="small" @click="triggerClick('newsletters','Non')">Non</el-button>
                </center>
              </el-col>
              <el-col :span="12" :offset="0">
                <center>
                  <el-button v-if="hasNewsletters" class="rounded t-violet shadow-btn bold" size="small" @click="triggerClick('newsletters','Oui')">Oui</el-button>
                  <el-button v-else class="rounded t-violet shadow-btn bold btn-no" size="small" @click="triggerClick('newsletters','Oui')">Oui</el-button>
                </center>
              </el-col>
            </el-row>
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
  private notifications = true;
  private newsletters = true;

  get hasNotifs() {
    return this.notifications;
  }

  get hasNewsletters() {
    return this.newsletters;
  }

  get name() {
    return "Profile";
  }

  triggerClick(subjet,choice) {
    switch(subjet) {
      case 'notif':
        if(choice == "Oui") this.notifications = true 
        else this.notifications = false;
        break;
      case 'newsletters':
        if(choice == "Oui") this.newsletters = true 
        else this.newsletters = false;
        break;
    }
  }

}
</script>

<style lang="scss" scoped>
.settings {
  color: white;

  .rotate {
    transform: rotate(
180deg
);
  }
  .settings-title {
    text-align: center;
    color: white;
  }

  .settings-content {
    width: 100%;
    align-self: center;
    display: contents;

    .head {
      margin-top: 30px;
    }

    .head.options {
      margin-top: 50px;
    }

    .username {
      color: white;
      margin-top: 5px;
      margin-bottom: 20px;
    }

    .options-item {
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

.btn-no {
  background: transparent;
  border-color: transparent;
  color: white;
}
</style>
