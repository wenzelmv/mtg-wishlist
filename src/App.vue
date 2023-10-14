<template>
  <TheNavigation />
  <header>
    <div class="wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1200px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
