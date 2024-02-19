<template>
  <h1 class="titulo">Weather Search</h1>
  <div class="contenedor buscador-clima">
    <Form @get-weather="getWeather" />
    <Spinner v-if="loading" />
    <Weather v-if="showWeather" :weather="weather" />
  </div>
</template>
<script setup>
import useWeather from "./composables/useWeather";
import Spinner from "./components/spinner.vue";
import Form from "./components/form.vue";
import Weather from "./components/weather.vue";
const { getWeather, weather, showWeather, loading } = useWeather();
</script>

<style scoped></style>
