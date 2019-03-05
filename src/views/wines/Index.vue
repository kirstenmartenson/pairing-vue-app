<template>
  <div class="wines-index">
    <div v-for="wine in wines">
      <router-link v-bind:to="'/wines/' + wine.id">
        <h3>{{ wine.name }}</h3>
      </router-link>
      <img :src="wine.image_url" :alt="wine.name">
      <p>{{ wine.body }}</p>
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
      wines: []
    };
  },
  created: function() {
    axios.get("/api/wines").then(response => {
      console.log(response.data);
      this.wines = response.data;
    });
  },
  methods: {}
};
</script>
