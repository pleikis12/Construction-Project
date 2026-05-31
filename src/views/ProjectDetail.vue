<template>
  <section class="min-h-screen bg-[#0a0a0a] text-white py-32">
    
    <div class="container">

      <!-- HEADER -->
      <div class="mb-12">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-px bg-[#00A8E8]" />
          <span class="font-condensed text-xs tracking-[0.25em] uppercase text-[#00A8E8]">
            Projektu Archivas
          </span>
        </div>

        <h1 class="font-condensed uppercase text-white"
            style="font-weight:800; font-size:clamp(2rem,5vw,3.5rem);">
          {{ project?.title }}
        </h1>

        <p class="text-white/50 text-sm mt-2 uppercase tracking-widest">
          {{ project?.city }}
        </p>
        <p class="text-[#00A8E8] text-lg font-bold mt-2 uppercase tracking-widest">
          {{ project?.status }}
        </p>
        <p class="text-white/50 text-sm mt-2 uppercase tracking-widest">
          {{ project?.year }}
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
            class="w-full h-full object-cover aspect-4/3 transition-transform duration-500 hover:scale-105"
          />

          <!-- INSPECTION OVERLAY -->
          <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20"></div>
        </div>

      </div>

      <!-- BACK BUTTON -->
      <div class="mt-12">
        <button
          @click="$router.push('/')"
          class="text-[#00A8E8] font-mono text-xs tracking-[0.25em] uppercase hover:text-white transition"
        >
          ← Atgal į Visus Projektus
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
import Kepykla1 from '../assets/projects/Klaipeda/kepykla/Kepykla1.jpg'
import Kepykla2 from '../assets/projects/Klaipeda/kepykla/Kepykla2.jpg'
import Kepykla3 from '../assets/projects/Klaipeda/kepykla/Kepykla3.jpg'
import Kepykla4 from '../assets/projects/Klaipeda/kepykla/Kepykla4.jpg'
import Kepykla5 from '../assets/projects/Klaipeda/kepykla/Kepykla5.jpg'
import Kepykla6 from '../assets/projects/Klaipeda/kepykla/Kepykla6.jpg'
import Kepykla7 from '../assets/projects/Klaipeda/kepykla/Kepykla7.jpg'
import Kepykla8 from '../assets/projects/Klaipeda/kepykla/Kepykla8.jpg'
import Kepykla9 from '../assets/projects/Klaipeda/kepykla/Kepykla9.jpg'
import Kepykla10 from '../assets/projects/Klaipeda/kepykla/Kepykla10.jpg'
import Kepykla11 from '../assets/projects/Klaipeda/kepykla/Kepykla11.jpg' 
import Kepykla12 from '../assets/projects/Klaipeda/kepykla/Kepykla12.jpg'
import Kepykla13 from '../assets/projects/Klaipeda/kepykla/Kepykla13.jpg'
import Kepykla14 from '../assets/projects/Klaipeda/kepykla/Kepykla14.jpg'
import Kepykla15 from '../assets/projects/Klaipeda/kepykla/Kepykla15.jpg'

import saules1 from '../assets/projects/Klaipeda/saules-butai/1.jpg'
import saules2 from '../assets/projects/Klaipeda/saules-butai/2.jpg'
import saules3 from '../assets/projects/Klaipeda/saules-butai/3.jpg'
import saules4 from '../assets/projects/Klaipeda/saules-butai/4.jpg'
import saules5 from '../assets/projects/Klaipeda/saules-butai/5.jpg'
import saules6 from '../assets/projects/Klaipeda/saules-butai/6.jpg'
import saules7 from '../assets/projects/Klaipeda/saules-butai/7.jpg'
import saules8 from '../assets/projects/Klaipeda/saules-butai/8.jpg'

import Kunigiskes1 from '../assets/projects/Palanga/kunigiskes-renovacija/Kunigiskes1.jpg'
import Kunigiskes2 from '../assets/projects/Palanga/kunigiskes-renovacija/Kunigiskes2.jpg'
import Kunigiskes3 from '../assets/projects/Palanga/kunigiskes-renovacija/Kunigiskes3.jpg'
import Kunigiskes4 from '../assets/projects/Palanga/kunigiskes-renovacija/Kunigiskes4.jpg'
import Kunigiskes5 from '../assets/projects/Palanga/kunigiskes-renovacija/Kunigiskes5.jpg'
import Kunigiskes6 from '../assets/projects/Palanga/kunigiskes-renovacija/Kunigiskes6.jpg'
import Kunigiskes7 from '../assets/projects/Palanga/kunigiskes-renovacija/Kunigiskes7.jpg'
import Kunigiskes8 from '../assets/projects/Palanga/kunigiskes-renovacija/Kunigiskes8.jpg'

import Vaivorikstes1 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes1.jpg'
import Vaivorikstes2 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes2.jpg'
import Vaivorikstes3 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes3.jpg'
import Vaivorikstes4 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes4.jpg'
import Vaivorikstes5 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes5.jpg'
import Vaivorikstes6 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes6.jpg'
import Vaivorikstes7 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes7.jpg'
import Vaivorikstes8 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes8.jpg'
import Vaivorikstes9 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes9.jpg'
import Vaivorikstes10 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes10.jpg'
import Vaivorikstes11 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes11.jpg'
import Vaivorikstes12 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes12.jpg'
import Vaivorikstes13 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes13.jpg'
import Vaivorikstes14 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes14.jpg'
import Vaivorikstes15 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes15.jpg'
import Vaivorikstes16 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes16.jpg'
import Vaivorikstes17 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes17.jpg'
import Vaivorikstes18 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes18.jpg'
import Vaivorikstes19 from '../assets/projects/Palanga/kunigiskes-vaivorikstes/Vaivorikstes19.jpg'

import Vilmiskes1 from '../assets/projects/Palanga/vilmiskes/Vilmiskes1.jpg'
import Vilmiskes2 from '../assets/projects/Palanga/vilmiskes/Vilmiskes2.jpg'
import Vilmiskes3 from '../assets/projects/Palanga/vilmiskes/Vilmiskes3.jpg'
import Vilmiskes4 from '../assets/projects/Palanga/vilmiskes/Vilmiskes4.jpg'
import Vilmiskes5 from '../assets/projects/Palanga/vilmiskes/Vilmiskes5.jpg'
import Vilmiskes6 from '../assets/projects/Palanga/vilmiskes/Vilmiskes6.jpg'
import Vilmiskes7 from '../assets/projects/Palanga/vilmiskes/Vilmiskes7.jpg'
import Vilmiskes8 from '../assets/projects/Palanga/vilmiskes/Vilmiskes8.jpg'
import Vilmiskes9 from '../assets/projects/Palanga/vilmiskes/Vilmiskes9.jpg'
import Vilmiskes10 from '../assets/projects/Palanga/vilmiskes/Vilmiskes10.jpg'
import Vilmiskes11 from '../assets/projects/Palanga/vilmiskes/Vilmiskes11.jpg'
import Vilmiskes12 from '../assets/projects/Palanga/vilmiskes/Vilmiskes12.jpg'
import Vilmiskes13 from '../assets/projects/Palanga/vilmiskes/Vilmiskes13.jpg'
import Vilmiskes14 from '../assets/projects/Palanga/vilmiskes/Vilmiskes14.jpg'  

import Darzelis1 from '../assets/projects/Gargzdai/pasakele/Darzelis1.jpg'
import Darzelis2 from '../assets/projects/Gargzdai/pasakele/Darzelis2.jpg'
import Darzelis3 from '../assets/projects/Gargzdai/pasakele/Darzelis3.jpg'
import Darzelis4 from '../assets/projects/Gargzdai/pasakele/Darzelis4.jpg'
import Darzelis5 from '../assets/projects/Gargzdai/pasakele/Darzelis5.jpg'
import Darzelis6 from '../assets/projects/Gargzdai/pasakele/Darzelis6.jpg'
import Darzelis7 from '../assets/projects/Gargzdai/pasakele/Darzelis7.jpg'
import Darzelis8 from '../assets/projects/Gargzdai/pasakele/Darzelis8.jpg'
import Darzelis9 from '../assets/projects/Gargzdai/pasakele/Darzelis9.jpg'
import Darzelis10 from '../assets/projects/Gargzdai/pasakele/Darzelis10.jpg'

import English1 from '../assets/projects/England/english-housing/English1.jpg'
import English2 from '../assets/projects/England/english-housing/English2.jpg'

import Nightclub1 from '../assets/projects/England/epping-nightclub/Nightclub1.jpg'
import Nightclub2 from '../assets/projects/England/epping-nightclub/Nightclub2.jpg'
import Nightclub3 from '../assets/projects/England/epping-nightclub/Nightclub3.jpg'
import Nightclub4 from '../assets/projects/England/epping-nightclub/Nightclub4.jpg'
import Nightclub5 from '../assets/projects/England/epping-nightclub/Nightclub5.jpg'
import Nightclub6 from '../assets/projects/England/epping-nightclub/Nightclub6.jpg'
import Nightclub7 from '../assets/projects/England/epping-nightclub/Nightclub7.jpg'
import Nightclub8 from '../assets/projects/England/epping-nightclub/Nightclub8.jpg'
import Nightclub9 from '../assets/projects/England/epping-nightclub/Nightclub9.jpg'

import Slough1 from '../assets/projects/England/slough-penthouse/Slough1.jpg'
import Slough2 from '../assets/projects/England/slough-penthouse/Slough2.jpg'
import Slough3 from '../assets/projects/England/slough-penthouse/Slough3.jpg'
import Slough4 from '../assets/projects/England/slough-penthouse/Slough4.jpg'

import Village1 from '../assets/projects/England/village-house/Village1.jpg'
import Village2 from '../assets/projects/England/village-house/Village2.jpg'
import Village3 from '../assets/projects/England/village-house/Village3.jpg'

import Darbenai1 from '../assets/projects/Darbenai/palangos-gatve/Darbenai1.jpg'
import Darbenai2 from '../assets/projects/Darbenai/palangos-gatve/Darbenai2.jpg'
import Darbenai3 from '../assets/projects/Darbenai/palangos-gatve/Darbenai3.jpg'
import Darbenai4 from '../assets/projects/Darbenai/palangos-gatve/Darbenai4.jpg'
import Darbenai5 from '../assets/projects/Darbenai/palangos-gatve/Darbenai5.jpg'
import Darbenai6 from '../assets/projects/Darbenai/palangos-gatve/Darbenai6.jpg'
import Darbenai7 from '../assets/projects/Darbenai/palangos-gatve/Darbenai7.jpg'
import Darbenai8 from '../assets/projects/Darbenai/palangos-gatve/Darbenai8.jpg'
import Darbenai9 from '../assets/projects/Darbenai/palangos-gatve/Darbenai9.jpg'
import Darbenai10 from '../assets/projects/Darbenai/palangos-gatve/Darbenai10.jpg'

const route = useRoute()  

const projects = [
  {
    slug: 'melnerage-housing-block',
    title: 'Melnerage Housing Block',
    status: 'Baigtas',
    city: 'Klaipeda, Lietuva',
    year: 2023,
    gallery: [melnerage1, melnerage2, melnerage3, melnerage4]
  },
  {
    slug: 'kepykla-facility',
    title: 'Kepykla Facility',
    status: 'Baigtas',
    city: 'Klaipeda, Lietuva',
    year: 2022,
    gallery: [Kepykla1, Kepykla2, Kepykla3, Kepykla4, Kepykla5, Kepykla6, Kepykla7, Kepykla8, Kepykla9, Kepykla10, Kepykla11, Kepykla12, Kepykla13, Kepykla14, Kepykla15]
  },
  {
    slug: 'saulės-butai-complex',
    title: 'Saules Butai Complex',
    status: 'Vykdomas',
    city: 'Klaipeda, Lietuva',
    year: 2023,
    gallery: [saules1, saules2, saules3, saules4, saules5, saules6, saules7, saules8]
  },
  {
    slug: 'kunigiskes-renovation',
    title: 'Kunigiskes Renovacija',
    status: 'Baigtas',
    city: 'Palanga, Lietuva',
    year: 2022,
    gallery: [Kunigiskes1, Kunigiskes2, Kunigiskes3, Kunigiskes4, Kunigiskes5, Kunigiskes6, Kunigiskes7, Kunigiskes8]
  },
  {
    slug: 'kunigiskes-vaivorikstes-g',
    title: 'Kunigiskes Vaivorikstes g, Namo Statyba',
    status: 'Baigtas',
    city: 'Palanga, Lietuva',
    year: 2023,
    gallery: [Vaivorikstes1, Vaivorikstes2, Vaivorikstes3, Vaivorikstes4, Vaivorikstes5, Vaivorikstes6, Vaivorikstes7, Vaivorikstes8, Vaivorikstes9, Vaivorikstes10, Vaivorikstes11, Vaivorikstes12, Vaivorikstes13, Vaivorikstes14, Vaivorikstes15, Vaivorikstes16, Vaivorikstes17, Vaivorikstes18, Vaivorikstes19]
  },
  {
    slug: 'vilmiskes',
    title: 'Vilmiskes, Namo Statyba',
    status: 'Baigtas',
    city: 'Palanga, Lietuva',
    year: 2023,
    gallery: [Vilmiskes1, Vilmiskes2, Vilmiskes3, Vilmiskes4, Vilmiskes5, Vilmiskes7, Vilmiskes8, Vilmiskes9, Vilmiskes10, Vilmiskes11, Vilmiskes12, Vilmiskes13, Vilmiskes14]
  },
  {
    slug: 'pasakele-darzelis',
    title: 'Pasakele Darzelis, Statyba',
    status: 'Baigtas',
    city: 'Gargždai, Lietuva',
    year: 2022,
    gallery: [Darzelis1, Darzelis2, Darzelis3, Darzelis4, Darzelis5, Darzelis6, Darzelis7, Darzelis8, Darzelis9, Darzelis10] 
  },
  {
    slug: 'english-housing',
    title: 'Anglija English Housing, Namo Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    gallery: [English1, English2]
  },
  {
    slug: 'epping-nightclub',
    title: 'Anglija Epping Nightclub, Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    gallery: [Nightclub1, Nightclub2, Nightclub3, Nightclub4, Nightclub5, Nightclub6, Nightclub7, Nightclub8, Nightclub9] 
  },
  {
    slug: 'slough-penthouse',
    title: 'Angliija Slough Penthouse, Butų Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    gallery: [Slough1, Slough2, Slough3, Slough4] 
  },
  {
    slug: 'village-house',
    title: 'Village House, Namo Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    gallery: [Village1, Village2, Village3] 
  },
  {
    slug: 'palangos-gatve',
    title: 'Darbėnai Palangos g, Namo Statyba',
    status: 'Baigtas',
    city: 'Darbenai, Lietuva',
    year: 2023,
    gallery: [Darbenai1, Darbenai2, Darbenai3, Darbenai4, Darbenai5, Darbenai6, Darbenai7, Darbenai8, Darbenai9, Darbenai10]
  }
  
]

const project = computed(() => {
  const slug = String(route.params.slug)
  return projects.find(p => p.slug === slug)
})
</script>