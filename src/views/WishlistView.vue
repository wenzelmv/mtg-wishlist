<template>
  <div class="container">
    <div class="card-search">
      <input
        v-model="searchQuery"
        placeholder="Search for cards"
        type="text"
        @keyup.enter="searchCards"
      />
      <div class="card-grid">
        <div class="card-info" v-for="card in filteredCards" :key="card.id">
          <div class="card">
            <img
              v-if="card.image_uris && card.image_uris.normal"
              :src="card.image_uris.normal"
              alt="card.name"
              class="card-image"
            />
          </div>
          <p class="card-name-invisible">{{ card.name }}</p>
          <AppLink
            v-if="card.purchase_uris"
            :to="card.purchase_uris.tcgplayer"
            class="tcgplayer-link"
          >
            <IconLightningBolt :width="18" :height="18" />
            <p>Buy @ TCGPlayer: ${{ card.prices.usd }}</p>
          </AppLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import axios from 'axios'
import type { ScryfallMtgCard } from '../ts/scryfall-types'
import AppLink from '@/components/AppLink.vue'
import IconLightningBolt from '@/components/icons/IconLightningBolt.vue'

const searchQuery = ref<string>('')
const cards = ref<ScryfallMtgCard[]>([])
// Filter out digital cards
const filteredCards = computed(() => {
  return cards.value.filter((card) => !card.digital)
})

// Timeout function to delay 'ms' milliseconds
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
.card-search {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  height: 100vh;
  margin-top: 5vh;
  gap: 30px;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-height: 65vh;
}

.card {
  transition: 0.2s ease-out;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.card-name-invisible {
  position: absolute;
  color: transparent;
  margin-left: 19px;
  margin-top: 14px;
  font-family: 'Beleren';
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.tcgplayer-link {
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid orange;
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  padding: 4px 24px;
}

.tcgplayer-link:hover {
  color: orange;
}

.card-image {
  width: 250px;
  border-radius: 10px;
}

input[type='text'] {
  padding: 10px;
  border: 0;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  width: 525px;
  margin-bottom: 5vh;
}
</style>
