<template>
  <div class="settings">
    <el-container direction="vertical">
      <el-header height="" class="settings-title">
        <!-- Header content -->
        <el-row class="">
          <router-link to="/profile/settings">
            <el-col :span="4" :offset="3" style="margin: 1.8em 0;"><svg-icon style="width: 1.4em; height: 1.4em;"  name="right_arrow" class="rotate"/></el-col>
          </router-link>
          <el-col :span="17" ><h2>CHANGER DE MOT DE PASSE</h2></el-col>
        </el-row>
      </el-header>
      <el-main class="settings-content">
        <el-form :model="form" class="" ref="form" size="small">
          <el-row :gutter="20">
            <el-col :span="20" :offset="2">
              <el-form-item class="question">
                <label>Mot de passe actuel</label>
                <!--<VuePassword
                  v-model="password1"
                  id="password1"
                  classes="force-rounded"
                  :disableStrength="true"
                  :strengthMessages="strengthMessagesFR"
                />-->
              </el-form-item>
            </el-col>
            <el-col :span="20" :offset="2">
              <el-form-item>
                <label>Nouveau mot de passe</label>
                <!--<VuePassword
                  v-model="password2"
                  id="password2"
                  classes="force-rounded"
                  :strength="strength"
                  :strengthMessages="strengthMessagesFR"
                />
                <password-meter style="display:none" :password="password2" @score="onScore"/>-->

              </el-form-item>
            </el-col>
            <el-col :span="20" :offset="2">
              <el-form-item>
                <label>Confirmer le mot de passe</label>
                <!--
                <VuePassword
                  v-model="password3"
                  id="password3"
                  classes="force-rounded"
                  :disableStrength="true"
                  :strengthMessages="strengthMessagesFR"
                />-->
              </el-form-item>
            </el-col>
          </el-row>

          <center>
            <el-form-item class="btns">
              <router-link to="/profile/settings">
                <el-button size="default" class="bold rounded btn-no" >Annuler</el-button>
              </router-link>
              <el-button size="default" class="bold shadow-btn t-violet rounded" @click="onSubmit">CHANGER</el-button>
            </el-form-item>
          </center>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import VuePassword from 'vue-password';
//import passwordMeter from "vue-simple-password-meter";

@Component({
  name: "Profile",
  components: {
  //  VuePassword,
  //  passwordMeter
  },
})
export default class extends Vue {
  private form = {};
  // private password1 = "tot";
  // private password2 = "totoo";
  // private password3 = "totoo";
  private strength = 1;
  // private strengthMessagesFR = ["Mot de passe très faible", "Mot de passe faible", "Mot de passe moyen", "Mot de passe fort", "Mot de passe très fort"];
  //private strengthMessagesEN = ['Very Weak Password', 'Weak Password', 'Medium Password', 'Strong Password','Very Strong Password'];

  onSubmit() {
    // TODO
  }
  onScore(data: any) {
    this.strength = data.score;
  }
}
</script>

<style lang="scss" scoped>
.settings {
  color: white;

 input.el-input__inner {
  border-radius: 100px !important;
  text-align: center;
}



  .rotate {
    transform: rotate(180deg);
  }

  .settings-title {
    text-align: center;
    color: white;
  }

  .settings-content {
    width: 90%;
    align-self: center;
    display: contents;
    margin: 10px;

  }

  .el-divider {
    margin-top: 10px;
  }

  label {
    line-height: 32px;
    color: white !important;
    font-weight: bold !important;
  }

  input.el-input__inner {
    border-radius: 100px !important;
    text-align: center !important;
  }

  .btns {
    margin-top: 20px;
  }
}


.btn-no {
  background: transparent;
  border-color: transparent;
  color: white;
}
</style>
