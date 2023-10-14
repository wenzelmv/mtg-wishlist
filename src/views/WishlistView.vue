<template>
  <div class="container">
    <input v-model="searchQuery" placeholder="Search for cards" type="text" />
    <button @click="searchCards">Search</button>
    <div class="card-grid">
      <div class="card" v-for="card in cards" :key="card.id">
        <img
          v-if="card.image_uris && card.image_uris.normal"
          :src="card.image_uris.normal"
          alt="card.name"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import type { ScryfallMtgCard } from '../ts/scryfall-types'

const searchQuery = ref<string>('')
const cards = ref<ScryfallMtgCard[]>([])

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/* Searches for cards according to scryfall documentation: https://scryfall.com/docs/syntax */
async function searchCards() {
  try {
    // Define the Scryfall API URL
    const apiUrl = `https://api.scryfall.com/cards/search?q=${searchQuery.value}`

    // A delay before making the GET request. See https://scryfall.com/docs/api for documentation
    await delay(100)

    // Make the GET request to Scryfall using Axios
    const response = await axios.get(apiUrl)

    // Update the 'cards' array with the search results
    cards.value = response.data.data
  } catch (error) {
    console.error('Error fetching cards:', error)
  }
}
</script>

<style scoped>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
