<script>
import axios from 'axios'

export default {
  data() {
    return {
      $projects: [],
    }
  },

  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        console.log(response.data)
      })
    }
  },

  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <h1>Hello Vite</h1>
</template>

<style lang="scss">
@use './scss/style.scss';
</style>
