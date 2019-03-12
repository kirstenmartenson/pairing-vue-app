<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/users/signup">Signup</router-link> |
      <router-link to="/users/login">Login</router-link> |
      <router-link to="/users/logout">Logout</router-link> |
      <router-link to="/wines">Wines</router-link> |
      <router-link to="/foods">Foods</router-link>
    </div>
    <router-view/>
  </div>
</template>
