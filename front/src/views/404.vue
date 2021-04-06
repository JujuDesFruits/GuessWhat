<template>
  <div>
    <div class="background">
      <div class="blur"></div>
    </div>
    <div class="center shado ">
      <p>Oups .. </p>
      <p>Une erreur est survenue ! </p>
      <p>Cette page n'existe pas.</p>
      <a href="">
        <el-button el-button class="rounded t-violet bold" size="small">Revenir </el-button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'vue-property-decorator'

  @Component({
    name: 'Page404'
  })
  export default class extends Vue {
    private message = '404 Page Not Found'
  }

</script>

<style lang="scss" scoped>
  // Content we're putting a blur over
  .background {
    background-image: linear-gradient(180deg, rgba(244, 151, 26, 1) 0%, rgba(130, 61, 144, 1) 100%);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
  }

  // Background Blur using backdrop-filter
  .blur {
    background: rgba(255, 255, 255, 0.12); // Make sure this color has an opacity of less than 1
    backdrop-filter: blur(8px); // This be the blur
    height: 100vh;
    width: 100%;
  }

  .center {
    text-shadow: 0px 5px 10px #00000057;
    margin: 0;
    position: absolute;
    color: white;
    font-weight: bold;
    display: block;
    z-index: 700;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    text-align: -webkit-center;
  }
</style>
