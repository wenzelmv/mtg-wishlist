<template>
  <a v-if="isExternal" target="_blank" rel="noopener" class="external-link" :href="to"><slot /></a>
  <router-link v-else v-bind="$props" class="internal-link"><slot /></router-link>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  props: {
    // @ts-ignore
    ...RouterLink.props
  },
  computed: {
    isExternal() {
      // If it starts with 'http' it means that it is an external link
      return typeof this.to === 'string' && this.to.startsWith('http')
    }
  }
}
</script>

<style scoped>
a,
a:visited {
  color: white;
  text-decoration: none;
}
</style>
