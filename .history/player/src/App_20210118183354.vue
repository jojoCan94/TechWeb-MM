<template>
  <div id="app">
    <div class="font-avenir font-helvetica font-arial font-sans font-serif text-center text-nav text-bold text-blue-900 ">
      <router-link to="/">Home</router-link> |
      <router-link to="/archeologia">Archeologia</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  sockets: {
    connect() {
      console.log('socket connected')
    },
    userAuth(user) {
      console.log(user);
      this.username = user
    },
  },
  data: function() {
    return {
    username : "",
    }
  },
};
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/ /*Questo sta tutto nel div usando tailwind*/

/*#nav {
  padding: 30px;
}*/ 
/*#nav a {
  font-weight: bold;
  color: #2c3e50;
}*/ /*idem.. */


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
