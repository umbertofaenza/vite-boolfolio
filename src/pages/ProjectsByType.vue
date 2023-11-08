<script>
import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';

export default {
    data() {
        return{
            pageTitle: 'Projects by type',
            projects: [],
        }
    },

    components: {
        ProjectCard
    },

    created() {


        axios.get("http://127.0.0.1:8000/api/projects-by-type/" + this.$route.params.type_id).then((response) => {
        this.projects = response.data.projects;
      })
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