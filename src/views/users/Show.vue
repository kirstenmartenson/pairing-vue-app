<template>
  <div class="users-show">
<!--     <h1>{{ message }}</h1> -->
  {{ user }}
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/me").then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {}
};
</script>
