<script>
import axios from 'axios'

import ProjectCard from './components/ProjectCard.vue'
import Navbar from './ui/Navbar.vue'

export default {
  data() {
    return {
      projects: [],
    }
  },

  components: { Navbar, ProjectCard },

  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects = response.data;
      })
    }
  },

  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  
  <Navbar/>
  <router-view></router-view>

</template>

<style lang="scss">
@use './scss/style.scss';
</style>
