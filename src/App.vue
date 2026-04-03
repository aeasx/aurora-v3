<script setup lang="ts">
</script>
<template>
  <nav class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView />
</template>
<style lang="css" scoped>
.nav {
  display: grid;
  grid-template-columns: 300px 1fr;
  padding: 20px;

  &>a {
      font-size: 20px;
      color: #888888;
      text-decoration: none;
      transition: all 0.3s;
  
      &:hover {
        color: #000000;
      }
    }
  }
</style>
