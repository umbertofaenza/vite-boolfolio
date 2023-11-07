<script>
export default {}
</script>

<template>


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <!-- navbar brand -->
    <a class="navbar-brand" href="#">Laravel-Vue API</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- nav item link -->
        <li class="nav-item">
          <router-link :to="{ name: 'home'}" class="nav-link" aria-current="page">Home</router-link>
        </li>
        <!-- nav item link -->
        <li class="nav-item">
          <router-link :to="{ name: 'portfolio'}" class="nav-link" aria-current="page">Portfolio</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<style lang="scss" scoped></style>