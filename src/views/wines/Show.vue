<template>
  <div class="wines-show">
  
    <h2>{{ wine.name }}</h2>
    <img :src="wine.image_url" :alt="wine.name">
    <p>Name: {{ wine.name }}</p>
    <p>Category: {{ wine.category }}</p>
    <p>Description: {{ wine.description }}</p>

    <router-link v-bind:to="'/wines/' + wine.id + '/edit'">Edit Wine</router-link><br>

    <router-link to="/">Back to all wines</router-link><br>
  </div>
</template>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      wine: {}
    };
  },
  created: function() {
    axios.get("/api/wines/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.wine = response.data;
    });
  },
  methods: {}
};
</script>
