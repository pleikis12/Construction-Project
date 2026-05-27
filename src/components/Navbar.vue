<script setup lang="ts">
// Your navigation states or logic live here
</script>

<template>
  <!-- Tailwind classes live directly on the navbar container -->
  <nav class="fixed top-0 left-0 w-full z-50 bg-zinc-900 border-b-2 border-amber-500 py-4 px-6 shadow-md">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Navigation Links -->
      <div class="flex gap-8">
        <a href="#home" class="text-amber-500 font-semibold transition-colors">Home</a>
        <a href="#services" class="text-zinc-300 hover:text-amber-500 font-semibold transition-colors">Services</a>
        <a href="#projects" class="text-zinc-300 hover:text-amber-500 font-semibold transition-colors">Projects</a>
        <a href="#contact" class="text-zinc-300 hover:text-amber-500 font-semibold transition-colors">Contact</a>
      </div>

    </div>
  </nav>
</template>