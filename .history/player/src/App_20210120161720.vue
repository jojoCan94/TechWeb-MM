<template>
  <div id="app" class="dark"> 
    <div class="bg-white dark:bg-grey-800  font-avenir text-center text-xl text-bold text-blue-900 ">
      <router-link class="menuItem-active-link" :to="{name: 'Home'}">Home</router-link> |
      <router-link class="menuItem-active-link" :to="{name: 'Archeologia'}">Archeologia</router-link>
      <router-link class="menuItem-active-link" :to="{name: 'About'}">About</router-link>
      <nav class="bg-white dark:bg-gray-800 h-20 w-full flex items-center">
        <button class="text-yellow-500 fosus:outline-none h-10 w-10 flex justify-center items-center">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
      </button>
    </nav>
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

.router-link-exact-active.menuItem-active-link {
  border-bottom-color:  #42b983;
  color: #42b983;
}
</style>
