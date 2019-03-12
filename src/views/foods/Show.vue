<template>
  <div class="foods-show">
  
    <h2>{{ food.name }}</h2>
    <img :src="food.image_url" :alt="food.name">
    <p>Name: {{ food.name }}</p>
    <p>Category: {{ food.category }}</p>
    <p>Description: {{ food.description }}</p>

    <router-link v-bind:to="'/foods/' + food.id + '/edit'">Edit Eood</router-link><br>

    <router-link to="/">Back to all foods</router-link><br>
  </div>
</template>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      food: {}
    };
  },
  created: function() {
    axios.get("/api/foods/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.wine = response.data;
    });
  },
  methods: {}
};
</script>
