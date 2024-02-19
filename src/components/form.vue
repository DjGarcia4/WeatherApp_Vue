<template>
  <form class="formulario" @submit.prevent="searchWeather">
    <div class="campo">
      <label for="city">City</label>
      <input type="text" id="city" placeholder="City" v-model="formData.city" />
    </div>
    <div class="campo">
      <label for="country">Country</label>
      <select id="country" v-model="formData.country">
        <option value="">--Select a country--</option>
        <option
          v-for="countrie in countries"
          :key="countrie.code"
          :value="countrie.code"
        >
          {{ countrie.name }}
        </option>
      </select>
    </div>
    <input type="submit" value="Check Weather" />
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useToast } from "vue-toast-notification";

const $toast = useToast();
const countries = [
  { code: "US", name: "United States" },
  { code: "MX", name: "Mexico" },
  { code: "AR", name: "Argentina" },
  { code: "CO", name: "Colombia" },
  { code: "CR", name: "Costa Rica" },
  { code: "ES", name: "Spain" },
  { code: "PE", name: "Peru" },
];

const formData = reactive({
  city: "",
  country: "",
});

const searchWeather = () => {
  if (Object.values(formData).includes("")) {
    $toast.error("Please fill all the fields");
    return;
  }
  emit("get-weather", formData);
};

const emit = defineEmits(["get-weather"]);
</script>

<style lang="scss" scoped></style>
