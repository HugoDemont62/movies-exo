<script setup>
import moviesFilm from '../assets/films.json';
import {useRoute} from 'vue-router';

const {params} = useRoute();
const movie = moviesFilm.find((movie) => movie.id == params.id);
</script>

<template>
  <h2>{{ movie?.title }}</h2>
  <p>{{ movie?.lang }}</p>
  <p>{{ movie?.releaseDate }}</p>
  <p>{{ movie?.actors }}</p>

  <img :src="movie?.imageUrl" alt="img"/>
</template>

<style scoped>
</style>