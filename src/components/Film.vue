<script setup>
defineProps({
  key: Number,
  title: String,
  lang: String,
  releaseDate: String,
  actors: Array,
});
</script>

<template>
    <h2>{{ title }}</h2>
    <p>{{ lang }}</p>
    <p>{{ releaseDate }}</p>
    <p>{{ actors }}</p>
</template>

<style scoped>
h2:hover {
  color: red;
}
</style>