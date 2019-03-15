<template>
  <div class="wines-show">
  
    <h2>{{ wine.name }}</h2>
    <img :src="wine.image_url" :alt="wine.name" height="75" width="75">
    <p>Name: {{ wine.name }}</p>
    <p>Category: {{ wine.category }}</p>
    <p>Description: {{ wine.description }}</p>

    <router-link v-bind:to="'/wines/' + wine.id + '/edit'">Edit Wine</router-link><br>
    <h3>Pairings</h3>
    <div v-for="pairing in wine.pairings"> 
      <p>Name: {{ pairing.food.name }}
        <button v-on:click="favoritePairing(pairing)">
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
      wine: {}
    };
  },
  created: function() {
    axios.get("/api/wines/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.wine = response.data;
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
