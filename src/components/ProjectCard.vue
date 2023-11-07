<script>
export default {
    props: {
        project: Object,
        isDetail: Boolean
    }
}
</script>

<template>
    <div :class="isDetail ? 'col-12' : 'col-12 col-sm-6 col-md-4 col-lg-3'">
        <!-- card -->
        <div class="card h-100">
            <!-- card header -->
            <div class="card-header">
                <!-- project type -->
                <div class="project-type mb-2">
                    <div v-if="project.type">
                        <span class="badge text-dark bg-primary-subtle p-2">{{ project.type.name }}</span>
                    </div>
                    <div v-else>
                        <span class="badge text-dark bg-warning-subtle p-2">No type</span>
                    </div>
                </div>
                <!-- project technologies -->
                <div class="project-technologies d-flex">
                        <span v-for="technology in project.technologies" class="me-1">
                            <div v-if="technology.name">
                                <span  class="badge rounded-pill text-dark bg-success-subtle p-2">{{ technology.name }}</span>
                            </div>
                        </span>
                </div>
            </div>
            <!-- card body -->
            <div class="card-body d-flex flex-column">
                <h4 class="mb-3">{{ project.name }}</h4>
                <div class="mb-3">{{ project.description }}</div>

                <!-- project detail btn -->
                <router-link v-if="!isDetail" :to="{name: 'project-detail', params: {id: project.id}}" class="btn btn-outline-primary mt-auto p-1 align-self-start">More details</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>