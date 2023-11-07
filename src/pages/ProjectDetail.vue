<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'


export default {
    data() {
        return{
            pageTitle: 'Project Detail',
            project: {},
        }
    },

    components: {
        ProjectCard
    },

    methods: {
    fetchProjectDetails() {
      axios.get("http://127.0.0.1:8000/api/projects/" + this.$route.params.id).then((response) => {
        this.project = response.data;
      })
    }
  },

  created() {
    this.fetchProjectDetails();
  }
}
</script>

<template>
    <div class="container">
        <h2 class="mb-3">
            {{ pageTitle }}
        </h2>
        <ProjectCard v-if="project" :project="project" :isDetail="true"/>
    </div>
</template>

<style lang="scss" scoped></style>