<script setup>
const {model} = defineProps(['model']);
</script>
<template>
<h1>{{model.name}}</h1>
<img :src="model.sprites.front_default" />
<p>Poids: {{model.weight / 10}} kg</p>
<p>Taille: {{model.height * 10}} cm</p>
</template>