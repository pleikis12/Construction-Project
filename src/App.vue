<script setup>
import { Analytics } from '@vercel/analytics/vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-dark text-white">
    <Navbar />
    <RouterView />
    <Analytics />
  </div>
</template>

