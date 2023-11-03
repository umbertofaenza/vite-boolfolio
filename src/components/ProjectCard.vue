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
                ID: {{ project.id }}
            </div>
            <div class="card-body">
                <h4 class="mb-3">{{ project.name }}</h4>
                <div>{{ project.description }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>