<script>
import ProjectCard from '../components/ProjectCard.vue'

export default {
    data() {
        return{
            pageTitle: 'Portfolio'
        }
    },

    components: {
        ProjectCard
    }
}
</script>

<template>
    <div class="container">
        <h2 class="mb-3">
            {{ pageTitle }}
        </h2>
    </div>

    <!-- <div class="row g-3">
        <ProjectCard v-for="project in this.projects" :project="project"/>
    </div> -->
</template>

<style lang="scss" scoped></style>