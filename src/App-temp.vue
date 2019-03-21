<template>
  <div id="app">
        <header id="header" class="dark">  
          <nav id="primary-menu">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar w/ text</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
        </li>
        </ul>
        <span class="navbar-text">
        Navbar text with an inline element
        </span>
        </div>
        </nav>
      </nav>
      </header>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  // created: function() {
  //   axios.get("/api/users/me").then(response => {
  //     this.user = response.data;
  //     console.log(this.user);
  //   });
  // },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    }
  }
};
</script>
