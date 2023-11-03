<script>
import axios from 'axios'

import ProjectCard from './components/ProjectCard.vue'

export default {
  data() {
    return {
      projects: [],
    }
  },

  components: { ProjectCard },

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
  <div class="container">
    <h1 class="mb-3">Laravel API</h1>

    <h2 class="mb-3">Projects</h2>
    <div class="row g-3">
        <ProjectCard v-for="project in this.projects" :project="project"/>
    </div>
  </div>
</template>

<style lang="scss">
@use './scss/style.scss';
</style>
