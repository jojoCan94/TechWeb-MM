<template>
  <div id="app"> 
    <div class=" bg-black font-avenir font-helvetica font-arial font-sans font-serif text-center text-xl text-bold text-blue-900 ">
      <router-link class="menuItem-active-link bg-grey-300" :to="{name: 'Home'}">Home</router-link> |
      <router-link class="menuItem-active-link dark:bg-grey-300" :to="{name: 'Archeologia'}">Archeologia</router-link>
      <router-link class="menuItem-active-link dark:bg-grey-300" :to="{name: 'About'}">About</router-link>
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


