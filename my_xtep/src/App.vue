<template>
  <div id="app">
    <GoodList></GoodList>
    <router-view/>
  </div>
</template>

<script>
  import GoodList from "./components/GoodList";



  export default {
    name: 'app',
    components:{
      GoodList
    }
  }

</script>

<style>

  h1, h2, h3, h4, h5, h6, strong, b {
    font-weight: normal;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }

</style>
