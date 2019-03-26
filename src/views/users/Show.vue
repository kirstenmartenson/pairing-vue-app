<template>
  <div class="users-show">
    <div class="container">
      <h1>{{ user.name }}</h1>
      <h4>Email: {{ user.email }}'s Profile</h4>
      <br>
      <H3>My favorites</H3>
      <div v-for="favorite in user.favorites">
        <router-link v-bind:to="'/pairings/' + favorite.pairing_id">
          <h5>favorite.pairing_id</h5>
        </router-link>
      </div>
    </div>
    <router-link v-bind:to="'/users/me/edit'">Edit my profile</router-link>
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
