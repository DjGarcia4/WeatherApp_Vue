import { ref, computed } from "vue";
import axios from "axios";
import { useToast } from "vue-toast-notification";
const $toast = useToast();

export default function useWeather() {
  const weather = ref({});
  const loading = ref(false);
  const getWeather = async ({ city, country }) => {
    loading.value = true;
    //Import API KEY
    const key = import.meta.env.VITE_API_KEY;
    //Get latitude and logitude
    weather.value = {};
    try {
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`;
      const { data } = await axios(url);
      const { lat, lon } = data[0];
      //Get Weather
      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const { data: dataweather } = await axios(urlWeather);
      weather.value = dataweather;
    } catch (error) {
      console.log(error);
      $toast.error("City not found");
    } finally {
      loading.value = false;
    }
  };
  const showWeather = computed(() => {
    return Object.values(weather.value).length > 0;
  });
  const formatTemp = (temp) => parseInt(temp - 273.15);
  return {
    getWeather,
    weather,
    showWeather,
    formatTemp,
    loading,
  };
}
