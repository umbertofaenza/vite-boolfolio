<script>
export default {
    props: {
        project: Object
    }
}
</script>

<template>
    <div class="col-3">
        <div class="card h-100">
            <div class="card-header">

                <div class="project-type mb-2">
                    <div v-if="project.type">
                        <span class="badge text-dark bg-primary-subtle p-2">{{ project.type.name }}</span>
                    </div>
                    <div v-else>
                        <span class="badge text-dark bg-warning-subtle p-2">No type</span>
                    </div>
                </div>

                <div class="project-technologies d-flex">
                        <span v-for="technology in project.technologies" class="me-1">
                            <div v-if="technology.name">
                                <span  class="badge rounded-pill text-dark bg-success-subtle p-2">{{ technology.name }}</span>
                            </div>
                        </span>
                </div>

            </div>
            <div class="card-body">
                <h4 class="mb-3">{{ project.name }}</h4>
                <div>{{ project.description }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>