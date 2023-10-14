<template>
  <nav>
    <div class="nav-items">
      <div class="left-items">
        <AppLink to="/">Home</AppLink>
        <AppLink to="/about">About</AppLink>
        <AppLink to="/wishlist">Wishlist</AppLink>
      </div>
      <div class="right-items">
        <AppLink to="#">Login</AppLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'
</script>

<style scoped>
nav {
  border-bottom: 1px solid grey;
  padding: 10px;
}

.left-items {
  display: flex;
  gap: 24px;
}
.nav-items {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1.8rem;
}
.nav-items a:hover {
  color: orange;
}
a.router-link-active {
  color: orange;
  font-weight: bold;
}
</style>
