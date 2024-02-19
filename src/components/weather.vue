<template>
  <div class="resultado">
    <h2>Weather from: {{ weather.name }}</h2>
    <p class="actual">{{ formatTemp(weather.main.temp) }}<span>&deg;C</span></p>
    <div class="temperaturas">
      <p>Min: {{ formatTemp(weather.main.temp_min) }}<span>&deg;C</span></p>
      <p>Max: {{ formatTemp(weather.main.temp_max) }}<span>&deg;C</span></p>
    </div>
  </div>
</template>

<script setup>
import useWeather from "../composables/useWeather";
const { formatTemp } = useWeather();
defineProps({
  weather: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
