<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'

export default {
    data() {
        return{
            pageTitle: 'Portfolio',
            projects: [],
        }
    },

    components: {
        ProjectCard
    },

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
        <h2 class="mb-3">
            {{ pageTitle }}
        </h2>

        <div class="row g-3">
            <ProjectCard v-for="project in this.projects" :project="project" :isDetail="false"/>
        </div>
    </div>

</template>

<style lang="scss" scoped></style>