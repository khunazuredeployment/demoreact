<script setup>
import { onMounted, ref } from 'vue';
import Details from './components/Details.vue';

const pokemonList = ref([]);
const pokemon = ref(null);
onMounted(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(r => r.json())
      .then(d => pokemonList.value = d.results)
})

const showDetails = (url) => {
  fetch(url)
    .then(r => r.json())
    .then(d => pokemon.value = d);
}
</script>

<template>
  <div v-if="pokemonList.length !== 0">
    <ul>
      <li v-for="item in pokemonList">{{ item.name }} <button @click="showDetails(item.url)">Détails</button></li>
    </ul>
  </div>
  <div v-if="pokemon">
    <Details :model="pokemon"></Details>
  </div>
</template>

<style scoped></style>