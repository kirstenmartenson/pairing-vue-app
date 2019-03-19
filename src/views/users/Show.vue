<template>
  <div class="users-show">
    <div class="container">
      <h1>{{ user.name }}</h1>
      <h4>Email: {{ user.email }}'s Profile</h4>
      <br>
      <H3>My favorites</H3>
      <div v-for="pairing in pairings">
        <div class="card-body">
          <h4 class="card-title">Pairing: {{pairing.id }}</h4>
          <p class="card-text">Wine: {{wine.id }}</p>
          <p class="card-text">Food: {{food.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: [],
      favorites: []
    };
  },
  created: function() {
    axios.get("/api/favorites").then(response => {
      console.log(response.data);
      this.favorites = response.data;
    });

    axios.get("/api/users/me").then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  }
};
</script>
