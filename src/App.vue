<script setup>
</script>

<template>
  <div class="centerDiv">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/movies">Movies</router-link>
  </div>

<router-view></router-view>
</template>

<style scoped>
  .centerDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5rem;
  }
</style>
