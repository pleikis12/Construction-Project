<template>
  <section id="projects" class="py-20 container">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-px bg-brand" />
          <span class="font-condensed text-xs tracking-widest uppercase text-brand">
            MUSU DARBAI
          </span>
        </div>

        <h2 class="font-condensed font-black uppercase leading-none text-white text-[clamp(2rem,5vw,3.2rem)]">
          Visi Musu Projektai
        </h2>
      </div>

      <p class="text-white/60 max-w-sm text-sm leading-relaxed">
        Pasirinkite projektą, kad išbandytumėte jo pilną laiko juostą — nuo vietos planavimo iki užbaigimo.
      </p>
    </div>

    <div class="flex flex-wrap gap-3 mb-8">
      <div class="flex flex-wrap gap-1 border border-white/10 p-1">
        <button
          v-for="city in CITIES"
          :key="city"
          @click="activeCity = city"
          class="px-2 py-1 font-mono text-xs tracking-[0.15em] uppercase flex items-center gap-1.5 transition-colors"
          :class="activeCity === city ? 'bg-brand text-black' : 'text-white/60 hover:text-white'"
        >
          <MapPin v-if="city !== 'All Cities'" :size="12" class="shrink-0" />
          {{ city === 'All Cities' ? 'All' : city }}
        </button>
      </div>

      <div class="flex gap-1 border border-white/10 p-1">
        <button
          v-for="s in STATUSES"
          :key="s"
          @click="activeStatus = s"
          class="px-3 py-1.5 font-mono text-xs tracking-[0.15em] uppercase transition-colors"
          :class="activeStatus === s ? 'bg-brand text-black' : 'text-white/60 hover:text-white'"
        >
          {{ s }}
        </button>
      </div>
    </div>

    <div v-if="filtered.length === 0" class="py-20 text-center text-white/50 font-mono text-sm tracking-widest">
      NO PROJECTS MATCH THIS FILTER
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div
        v-for="project in filtered"
        :key="project.slug"
        @click="router.push(`/projects/${project.slug}`)"
        class="group bg-dark border border-white/10 overflow-hidden transition-all duration-300 hover:border-brand-hover/50 cursor-pointer"
      >
        <div class="relative aspect-4/3 overflow-hidden">
          <img
            :src="project.heroImage"
            class="w-full h-full object-cover brightness-90 contrast-105 transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
          
          <div
            class="absolute top-3 right-3 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em] border backdrop-blur-md shadow-md flex items-center gap-2"
            :class="project.status === 'Baigtas' 
              ? 'bg-green-500/15 text-green-300 border-green-400/30' 
              : 'bg-yellow-500/15 text-yellow-200 border-yellow-300/30'"
          >
            <span class="w-1.5 h-1.5 rounded-full" :class="project.status === 'Baigtas' ? 'bg-green-400' : 'bg-yellow-300'"></span>
            {{ project.status }}
          </div>
        </div>

        <div class="p-5">
          <h3 class="font-condensed text-lg text-white group-hover:text-brand-hover transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-white/50 text-xs mt-1 tracking-wider uppercase">
            {{ project.city }} • {{ project.status }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { MapPin } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { projects } from '../data/projects' 

const router = useRouter()

const CITIES = ['All Cities', 'Klaipeda', 'Palanga', 'Darbėnai', 'Gargždai', 'Anglija']
const STATUSES = ['All', 'Baigtas', 'Vykdomas']

const activeCity = ref('All Cities')
const activeStatus = ref('All')

const filtered = computed(() => {
  return projects.filter(p => {
    const cityMatch = activeCity.value === 'All Cities' || p.city.includes(activeCity.value)
    const statusMatch = activeStatus.value === 'All' || p.status === activeStatus.value
    return cityMatch && statusMatch
  })
})
</script>