<template>
  <div class="home">
    <SuperNavbar/>
    <NavBar/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import SuperNavbar from '@/layout/components/SuperNavbar/index.vue';
import NavBar from '@/layout/components/Navbar/index.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    NavBar,
    SuperNavbar
  },
};
</script>
