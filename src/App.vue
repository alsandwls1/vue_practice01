<template>
  <div id="app">
    <Header msg="HEADER AREA"></Header>
    <div class="container">
      <Leftbar msg="-LEFTBAR TITLE-"></Leftbar>
      <div class="content">
        <router-view/>
      </div>
    </div>
    <Footer msg="FOOTER AREA"></Footer>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Leftbar from './components/Leftbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header, Leftbar, Footer
  }
}
</script>


<style>
@import './assets/css/reset.css';
@import './assets/css/main.css';
</style>
