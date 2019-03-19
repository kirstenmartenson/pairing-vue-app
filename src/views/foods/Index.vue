<template> 
  <div class="foods-index"> 
    <h1>hi</h1> 
    <div v-for="food in foods">
      <router-link v-bind:to="'/foods/' + food.id"> 
        <h3>{{ food.name }}</h3>
      </router-link> 
      <p>{{ food.name }}</p> 
    </div> 
  </div> 
</template>

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
