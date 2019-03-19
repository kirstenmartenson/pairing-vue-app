<template>
  <div class="pairings-index">
    <h1>Pairings</h1>
    <div v-for="pairing in pairings">
      <router-link v-bind:to="'/pairings/' + pairing.id">
        <h3>{{ pairing.name }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      pairings: {}
    };
  },
  created: function() {
    axios.get("/api/pairings").then(response => {
      console.log(response.data);
      this.pairings = response.data;
    });
  },
  methods: {}
};
</script>
