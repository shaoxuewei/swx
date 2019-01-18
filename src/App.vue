<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/memactive">About</router-link>
    </div> -->
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name:'#app'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
  color: #2c3e50;
  height:100%;
  margin:0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
mysvg{
  background-color: #ffffff;
}
</style>
