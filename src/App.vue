<script setup>
import HelloWorld from './components/HelloWorld.vue'
import XcartMain from './components/XcartHome.vue'
import Apptobar from './components/AppTopBar.vue'
import Footer from './components/AppFooterbar.vue'
import Login from './components/Login.vue'
</script>

<template>
  <section class="topBar">
    <Apptobar></Apptobar>

  </section>
  <section class="mainview">
    <Login></Login>

  </section>
  <section class="footer">

    <Footer></Footer>
  </section>
</template>

<style scoped>
.logo {
  height: 1rem;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b8838a);
}

.topBar {
  height: 0vh;
}

.mainview {
  height: 100vh;
}

.footer {
  height: 10vh
}
</style>
