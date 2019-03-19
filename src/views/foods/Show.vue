<template>
  <div class="foods-show">
  
    <h2>{{ food.name }}</h2>
    <p>Name: {{ food.name }}</p>
    <p>Category: {{ food.category }}</p>

    <router-link v-bind:to="'/foods/' + food.id + '/edit'">Edit Eood</router-link><br>

    <h3>Pairings</h3>
    <div v-for="pairing in food.pairings"> 
      <p>Name: {{ pairing.wine.name }} <button v-on:click="favoritePairing(pairing)">
          Favorite
        </button>
      </p>
    </div>
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
      this.food = response.data;
    });
  },
  methods: {
    favoritePairing: function(pairing) {
      var params = {
        pairing_id: pairing.id
      };
      axios.post("/api/favorites/", params).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>
