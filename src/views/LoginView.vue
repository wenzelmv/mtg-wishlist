<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" name="username" type="text" class="input" />
      <label for="password">Password</label>
      <input v-model="password" name="password" type="text" class="input" />
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { auth, provider } from '../firebase/firebase'
import { signInWithPopup } from 'firebase/auth'
import firebaseui from 'firebaseui'

const username = ref<string>('')
const password = ref<string>('')
const router = useRouter()
const route = useRoute()

const login = () => {
  const redirectPath = route.query.redirect || '/protected'
}

async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log(user)
    // Redirect or perform actions after login
  } catch (error) {
    console.error((error as Error).message)
  }
}
</script>
