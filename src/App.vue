<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/menu'
export default {
  name: 'App',
  component:{
    Menu
  }
}
</script>

<style>
@import './css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  font-weight: bold;
  /*margin-top: 60px;*/
}
</style>
