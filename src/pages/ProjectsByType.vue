<script>
import axios from 'axios';

export default {
    data() {
        return{
            pageTitle: 'Projects by type',
            projects: [],
        }
    },

    created() {
        axios.get("http://127.0.0.1:8000/api/projects-by-type/" + this.$route.params.type_id).then((response) => {
        this.projects = response.data.data;
      })
    }
}
</script>

<template>
    <div class="container">
        <h2 class="mb-3">
            {{ pageTitle }}
        </h2>
    </div>
</template>

<style lang="scss" scoped></style>