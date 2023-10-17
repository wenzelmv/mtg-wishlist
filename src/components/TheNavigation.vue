<template>
  <nav>
    <div class="nav-items">
      <div class="left-items">
        <AppLink to="/">Home</AppLink>
        <AppLink to="/about">About</AppLink>
        <AppLink to="/wishlist">Wishlist</AppLink>
        <AppLink to="/feed">Feed</AppLink>
      </div>
      <div class="right-items">
        <!-- <AppLink to="#">Login</AppLink> -->
        <AppLink to="/register">Register</AppLink>
        <AppLink to="/sign-in">Sign In</AppLink>
        <button v-if="isLoggedIn" @click="handleSignOut">Sign out</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import AppLink from '@/components/AppLink.vue'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut, type Auth } from 'firebase/auth'
import router from '@/router'

const isLoggedIn = ref<boolean>(false)

let auth: Auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}
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

.right-items {
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
