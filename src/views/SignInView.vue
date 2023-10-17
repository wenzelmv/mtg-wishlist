<template>
  <div>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref<string>('')
const password = ref<string>('')
const errorMessage = ref<string>('')

const router = useRouter()

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully registered!')
      router.push('/feed') // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errorMessage.value = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          errorMessage.value = 'Incorrect password'
          break
        default:
          errorMessage.value = 'Email or password was incorrect'
          break
      }
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user)
      router.push('/')
    })
    .catch((error) => {
      // handle error
    })
}
</script>
