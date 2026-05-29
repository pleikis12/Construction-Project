<template>
  <section id="projects" class="py-20 container">

    <!-- HEADER -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">

      <div>
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-px bg-[#00A8E8]" />
          <span class="font-condensed text-xs tracking-widest uppercase text-[#00A8E8]">
            Our Work
          </span>
        </div>

        <h2
          class="uppercase leading-none text-white"
          style="font-family:'Barlow Condensed', sans-serif; font-weight:800; font-size:clamp(2rem,5vw,3.2rem);"
        >
          Featured Projects
        </h2>
      </div>

      <p class="text-white/60 max-w-sm text-sm leading-relaxed">
        Select a project to explore its full timeline — from site planning through to completion.
      </p>

    </div>

    <!-- FILTERS -->
    <div class="flex flex-wrap gap-3 mb-8">

      <!-- CITY FILTER -->
      <div class="flex flex-wrap gap-1 border border-white/10 p-1">

        <button
          v-for="city in CITIES"
          :key="city"
          @click="activeCity = city"
          class="px-2 py-1 font-mono text-xs tracking-[0.15em] uppercase flex items-center gap-1.5 transition-colors"
          :class="activeCity === city
            ? 'bg-[#00A8E8] text-black'
            : 'text-white/60 hover:text-white'"
        >
          <MapPin v-if="city !== 'All Cities'" :size="12" class="shrink-0" />
          {{ city === 'All Cities' ? 'All' : city }}
        </button>

      </div>

      <!-- STATUS FILTER -->
      <div class="flex gap-1 border border-white/10 p-1">

        <button
          v-for="s in STATUSES"
          :key="s"
          @click="activeStatus = s"
          class="px-3 py-1.5 font-mono text-xs tracking-[0.15em] uppercase transition-colors"
          :class="activeStatus === s
            ? 'bg-[#00A8E8] text-black'
            : 'text-white/60 hover:text-white'"
        >
          {{ s }}
        </button>

      </div>

    </div>

    <!-- EMPTY STATE -->
    <div
      v-if="filtered.length === 0"
      class="py-20 text-center text-white/50 font-mono text-sm tracking-widest"
    >
      NO PROJECTS MATCH THIS FILTER
    </div>

    <!-- GRID -->
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/10"
    >

      <div
        v-for="project in filtered"
        :key="project.id"
        class="group bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#00A8E8]/30"
      >

        <!-- IMAGE -->
        <div class="relative aspect-4/3 overflow-hidden">

          <img
            :src="project.image"
            class="w-full h-full object-cover brightness-90 contrast-105 transition-transform duration-500 group-hover:scale-105"
          />

          <!-- DARK READABILITY LAYER -->
          <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

          <!-- VIGNETTE -->
          <div class="absolute inset-0 [box-shadow:inset_0_0_80px_rgba(0,0,0,0.55)]"></div>

          <!-- STATUS BADGE (INSPECTION STYLE) -->
          <div
            class="absolute top-3 right-3 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em]
                   border backdrop-blur-md shadow-md flex items-center gap-2"
            :class="project.status === 'Completed'
              ? 'bg-green-500/15 text-green-300 border-green-400/30 shadow-green-500/20'
              : 'bg-yellow-500/15 text-yellow-200 border-yellow-300/30 shadow-yellow-500/20'"
          >
            <span
              class="w-1.5 h-1.5 rounded-full"
              :class="project.status === 'Completed'
                ? 'bg-green-400'
                : 'bg-yellow-300'"
            ></span>

            {{ project.status }}
          </div>

        </div>

        <!-- CONTENT -->
        <div class="p-5">

          <h3 class="font-condensed text-lg text-white">
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

const CITIES = ['All Cities', 'Klaipeda', 'Palanga', 'Darbėnai', 'Gargždai']
const STATUSES = ['All', 'Completed', 'In Progress']

const activeCity = ref('All Cities')
const activeStatus = ref('All')

const projects = ref([
  {
    id: 1,
    title: 'Melnerage Housing Block',
    city: 'Klaipeda',
    status: 'Completed',
    image: '/src/assets/projects/Klaipeda/melnerage/Melnarage1.jpg'
  },
  {
    id: 2,
    title: 'Kepykla Facility',
    city: 'Klaipeda',
    status: 'Completed',
    image: '/src/assets/projects/Klaipeda/kepykla/Kepykla1.jpg'
  },
  {
    id: 3,
    title: 'Saulės Butai Complex',
    city: 'Klaipeda',
    status: 'In Progress',
    image: '/src/assets/projects/Klaipeda/saules-butai/2.jpg'
  },
  {
    id: 4,
    title: 'Kunigiskes Renovation',
    city: 'Palanga',
    status: 'Completed',
    image: '/src/assets/projects/Palanga/kunigiskes-renovacija/Kunigiskes11.jpg'
  },
  {
    id: 5,
    title: 'Kunigiskes Vaivorikstes g',
    city: 'Palanga',
    status: 'Completed',
    image: '/src/assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes19.jpg'
  },
  {
    id: 6,
    title: 'Gargždai Civic Center',
    city: 'Gargždai',
    status: 'In Progress',
    image: '/src/assets/projects/Gardzdai/gardzdai1.jpg'
  },
])

const filtered = computed(() => {
  return projects.value.filter(p => {
    const cityMatch =
      activeCity.value === 'All Cities' || p.city === activeCity.value

    const statusMatch =
      activeStatus.value === 'All' || p.status === activeStatus.value

    return cityMatch && statusMatch
  })
})
</script>