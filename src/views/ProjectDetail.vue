<template>
  <section class="min-h-screen bg-[#0a0a0a] text-white py-32">
    
    <div class="container">

      <!-- HEADER -->
      <div class="mb-12">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-px bg-[#00A8E8]" />
          <span class="font-condensed text-xs tracking-[0.25em] uppercase text-[#00A8E8]">
            Project Archive
          </span>
        </div>

        <h1 class="font-condensed uppercase text-white"
            style="font-weight:800; font-size:clamp(2rem,5vw,3.5rem);">
          {{ project?.title }}
        </h1>

        <p class="text-white/50 text-sm mt-2 uppercase tracking-widest">
          {{ project?.city }}
        </p>
      </div>

      <!-- GALLERY GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div
          v-for="img in project?.gallery"
          :key="img"
          class="relative overflow-hidden border border-white/10 bg-black"
        >
          <img
            :src="img"
            class="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 hover:scale-105"
          />

          <!-- INSPECTION OVERLAY -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>

      </div>

      <!-- BACK BUTTON -->
      <div class="mt-12">
        <button
          @click="$router.push('/')"
          class="text-[#00A8E8] font-mono text-xs tracking-[0.25em] uppercase hover:text-white transition"
        >
          ← Back to Projects
        </button>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import melnerage1 from '../assets/projects/Klaipeda/melnerage/Melnarage1.jpg'
import melnerage2 from '../assets/projects/Klaipeda/melnerage/Melnarage2.jpg'
import melnerage3 from '../assets/projects/Klaipeda/melnerage/Melnarage3.jpg'
import melnerage4 from '../assets/projects/Klaipeda/melnerage/Melnarage4.jpg'

const route = useRoute()

const projects = [
  {
    slug: 'melnerage-housing-block',
    title: 'Melnerage Housing Block',
    gallery: [melnerage1, melnerage2, melnerage3, melnerage4]
  }
]

const project = computed(() => {
  const slug = String(route.params.slug)
  return projects.find(p => p.slug === slug)
})
</script>