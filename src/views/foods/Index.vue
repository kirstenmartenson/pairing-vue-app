<template>
  <div class="foods-index">
    <div v-for="food in foods">
      <router-link v-bind:to="'/foods/' + food.id">
        <h3>{{ food.title }}</h3>
      </router-link>
      <img :src="food.image" :alt="food.title">
      <p>{{ food.body }}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      foods: []
    };
  },
  created: function() {
    axios.get("/api/foods").then(response => {
      console.log(response.data);
      this.foods = response.data;
    });
  },
  methods: {}
};
</script>
