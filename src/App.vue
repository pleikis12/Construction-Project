<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from './components/Navbar.vue'

import constructionLogo from './assets/branding/construction-logo/SVG 3-01.svg'
</script>

<template>
  <!-- Full-screen container with a rich dark slate background and white text -->
  <div class="min-h-screen bg-gray-700 text-white antialiased">
    
    <!-- 1. The navbar styles itself internally -->
    <Navbar />
    
    <!-- 2. Centered header layout with responsive constraints -->
    <header class="pt-28 pb-12 leading-normal max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:justify-center">
      <img 
        alt="Construction Company Logo" 
        class="block shrink-0 mb-8 lg:mb-0 lg:mr-8 mx-auto lg:mx-0" 
        :src="constructionLogo" 
        width="400" 
        height="400" 
      />

      <div class="text-center lg:text-left lg:flex lg:items-start lg:flex-wrap">
        <HelloWorld msg="You did it!" />
      </div>
    </header>

    <!-- 3. Main section properly aligned with the header above -->
    <main class="max-w-6xl mx-auto px-6 pb-24">
      <TheWelcome />
    </main>

  </div>
</template>

