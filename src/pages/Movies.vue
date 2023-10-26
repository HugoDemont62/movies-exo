<script setup>

import Film from '@/components/Film.vue';
import {computed, ref} from 'vue';
import jsonFilms from '@/assets/films.json';

const films = ref(jsonFilms);

const byTitle = ref('');
const byReleaseDate = ref('');
const byActors = ref('');

// filter films
const filteredFilms = computed(() => {
  return films.value.filter(film => {
    return film.title.toLowerCase().includes(byTitle.value.toLowerCase()) &&
        film.releaseDate.toLowerCase().includes(byReleaseDate.value.toLowerCase()) &&
        film.actors.some(actor => actor.includes(byActors.value.toLowerCase()));
  });
});

</script>

<template>
  <h1>Movies</h1>
  <input type="text" v-model="byTitle" placeholder="Search by title"/>
  <input type="text" v-model="byReleaseDate" placeholder="Search by releaseDate"/>

  <h1>Results</h1>
  <br>

  <RouterLink :key="film.id" v-for="film in filteredFilms" :to="'/view/' + film.id">
    <Film :title="film.title"
          :lang="film.lang"
          :releaseDate="film.releaseDate"
          :actors="film.actors"/>
  </RouterLink>
</template>

<style scoped>

</style>