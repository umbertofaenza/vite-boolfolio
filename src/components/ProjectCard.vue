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

                <div v-if="project.type">
                    Type: {{ project.type.name }}
                </div>
                <div v-else>
                    Type: No type.
                </div>

                <div v-if="project.technologies">
                    Technologies: 
                    <span v-for="technology in project.technologies" class="me-1">
                        {{ technology.name }}
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