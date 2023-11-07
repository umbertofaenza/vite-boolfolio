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
    <h2 class="mb-3">
        {{ pageTitle }}
    </h2>
    <ProjectCard/>
    <!-- <div class="row g-3">
        <ProjectCard v-for="project in this.projects" :project="project"/>
    </div> -->
</template>

<style lang="scss" scoped></style>