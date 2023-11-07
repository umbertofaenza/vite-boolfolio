<script>

import Navbar from './ui/Navbar.vue'

export default {

  components: { Navbar },

}
</script>

<template>
  
  <Navbar/>
  <router-view></router-view>

</template>

<style lang="scss">
@use './scss/style.scss';
</style>
