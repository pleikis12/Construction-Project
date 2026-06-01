<template>
  <section
    v-if="project"
    class="min-h-screen bg-[#0a0a0a] text-white"
  >

    <!-- HERO -->
    <section class="relative h-[65vh] overflow-hidden">

      <img
        :src="project.gallery[0]"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/20"></div>

      <div class="relative z-10 container h-full flex flex-col justify-end pb-16">

        <div
          class="inline-flex items-center gap-2 mb-4 text-xs tracking-[0.25em] uppercase"
          :class="project.status === 'Baigtas' ? 'text-green-400' : 'text-yellow-300'"
        >
          <span
            class="w-2 h-2 rounded-full"
            :class="project.status === 'Baigtas' ? 'bg-green-400' : 'bg-yellow-300'"
          ></span>

          {{ project.status }}
        </div>

        <h1
          class="font-condensed uppercase leading-none"
          style="font-weight: 800; font-size: clamp(3rem, 7vw, 6rem);"
        >
          {{ project.title }}
        </h1>

        <p class="mt-4 text-white/70 uppercase tracking-[0.25em]">
          {{ project.city }}
        </p>

      </div>
    </section>

    <!-- INFO -->
    <section class="container py-16">

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div class="border border-white/10 bg-white/[0.03] p-5">
          <p class="text-white/40 text-xs uppercase tracking-widest">Status</p>
          <p class="mt-2 font-semibold">{{ project.status }}</p>
        </div>

        <div class="border border-white/10 bg-white/[0.03] p-5">
          <p class="text-white/40 text-xs uppercase tracking-widest">Miestas</p>
          <p class="mt-2 font-semibold">{{ project.city }}</p>
        </div>

        <div class="border border-white/10 bg-white/[0.03] p-5">
          <p class="text-white/40 text-xs uppercase tracking-widest">Metai</p>
          <p class="mt-2 font-semibold">{{ project.year }}</p>
        </div>

        <div class="border border-white/10 bg-white/[0.03] p-5">
          <p class="text-white/40 text-xs uppercase tracking-widest">Nuotraukos</p>
          <p class="mt-2 font-semibold">{{ project.gallery.length }}</p>
        </div>

      </div>

    </section>

    <!-- DESCRIPTION -->
    <section v-if="project.description" class="container pb-16">

      <div class="max-w-4xl">

        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-px bg-[#00A8E8]" />
          <span class="text-[#00A8E8] uppercase tracking-[0.25em] text-xs">
            Projekto Aprašymas
          </span>
        </div>

        <p class="text-white/70 leading-relaxed text-lg">
          {{ project.description }}
        </p>

      </div>

    </section>

    <!-- GALLERY -->
    <section class="container pb-20">

      <div class="columns-1 md:columns-2 xl:columns-3 gap-4">

        <div
          v-for="(img, index) in images"
          :key="img"
          class="mb-4 break-inside-avoid overflow-hidden bg-black group cursor-zoom-in"
          @click="openImage(index)"
        >

          <img
            :src="img"
            class="w-full h-auto block object-cover
                  transition-transform duration-700
                  group-hover:scale-105"
            loading="lazy"
          />

        </div>

      </div>

        

      <!-- LIGHTBOX -->
      <div
        v-if="activeIndex !== null"
        class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        @click="closeImage"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >

        <!-- WRAPPER -->
        <div class="relative flex items-center justify-center">

          <!-- IMAGE -->
          <img
            :src="activeImage"
            class="max-w-[85vw] max-h-[85vh] object-contain select-none transition-all duration-300"
          />

          <!-- COUNTER -->
          <div class="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.2em] uppercase">
            {{ activeIndex + 1 }} / {{ images.length }}
          </div>

          <!-- CLOSE -->
          <button
            class="absolute top-5 right-5 text-white text-2xl hover:text-[#00A8E8]"
            @click.stop="closeImage"
          >
            ✕
          </button>

          <!-- PREV -->
          <button
            class="absolute left-[-50px] top-1/2 -translate-y-1/2
                   text-white text-6xl hover:text-[#00A8E8]
                   transition"
            @click.stop="prevImage"
          >
            ‹
          </button>

          <!-- NEXT -->
          <button
            class="absolute right-[-50px] top-1/2 -translate-y-1/2
                   text-white text-6xl hover:text-[#00A8E8]
                   transition"
            @click.stop="nextImage"
          >
            ›
          </button>

        </div>
      </div>

    </section>

    <!-- BACK -->
    <section class="container pb-24">

      <button
        @click="$router.push('/#projects')"
        class="border border-[#00A8E8] px-6 py-3 uppercase tracking-[0.25em] text-xs text-[#00A8E8]
               hover:bg-[#00A8E8] hover:text-black transition"
      >
        ← Atgal į projektus
      </button>

    </section>

  </section>

  <section
    v-else
    class="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white"
  >
    Projektas nerastas
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'


const route = useRoute()

const activeIndex = ref<number | null>(null)

const project = computed(() => {
  const slug = String(route.params.slug)
  return projects.find(p => p.slug === slug)
})

const images = computed(() => {
  return project.value ? project.value.gallery.slice(1) : []
})

const activeImage = computed(() => {
  if (activeIndex.value === null) return undefined
  return images.value[activeIndex.value]
})

const openImage = (index: number) => {
  activeIndex.value = index
}

const closeImage = () => {
  activeIndex.value = null
}

const nextImage = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % images.value.length
}

const prevImage = () => {
  if (activeIndex.value === null) return
  activeIndex.value =
    (activeIndex.value - 1 + images.value.length) % images.value.length
}

// keyboard
const handleKey = (e: KeyboardEvent) => {
  if (activeIndex.value === null) return

  if (e.key === 'Escape') closeImage()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

// swipe
let touchStartX = 0

const onTouchStart = (e: TouchEvent) => {
  const touch = e.changedTouches?.[0]
  if (!touch) return
  touchStartX = touch.screenX
}

const onTouchEnd = (e: TouchEvent) => {
  const touch = e.changedTouches?.[0]
  if (!touch) return

  const diff = touch.screenX - touchStartX

  if (Math.abs(diff) < 50) return

  if (diff > 0) prevImage()
  else nextImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey)
})


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

const projects = [
  {
    slug: 'melnerage-housing-block',
    title: 'Melnerage Housing Block',
    status: 'Baigtas',
    city: 'Klaipeda, Lietuva',
    year: 2023,
    duration: '8 Months',
    scope: 'Residential Renovation',
    area: '1,200 m²',
    description:
    'The Melnerage Housing Block project included structural repairs, façade upgrades, interior fit-out works, and infrastructure improvements.',
    heroImage: melnerage1,
    gallery: [melnerage1, melnerage2, melnerage3, melnerage4]
  },
  {
    slug: 'kepykla-facility',
    title: 'Kepykla Facility',
    status: 'Baigtas',
    city: 'Klaipeda, Lietuva',
    year: 2022,
    duration: '12 Months',
    scope: 'Commercial Development',
    area: '2,500 m²',
    description:
    'The Kepykla Facility project encompassed the construction of a new commercial building, including foundation work, structural framing, exterior cladding, and interior finishes.',
    heroImage: Kepykla1,
    gallery: [Kepykla1, Kepykla2, Kepykla3, Kepykla4, Kepykla5, Kepykla6, Kepykla7, Kepykla8, Kepykla9, Kepykla10, Kepykla11, Kepykla12, Kepykla13, Kepykla14, Kepykla15]
  },
  {
    slug: 'saulės-butai-complex',
    title: 'Saules Butai Complex',
    status: 'Vykdomas',
    city: 'Klaipeda, Lietuva',
    year: 2023,
    description:
    'The Saules Butai Complex project involved the construction of a multi-unit residential building with modern amenities and sustainable design features.',
    heroImage: saules1,
    gallery: [saules1, saules2, saules3, saules4, saules5, saules6, saules7, saules8]
  },
  {
    slug: 'kunigiskes-renovation',
    title: 'Kunigiskes Renovacija',
    status: 'Baigtas',
    city: 'Palanga, Lietuva',
    year: 2022,
    description:
    'The Kunigiskes Renovacija project included the restoration and modernization of an existing residential building, with updates to the façade, interior finishes, and infrastructure.',
    heroImage: Kunigiskes1,
    gallery: [Kunigiskes1, Kunigiskes2, Kunigiskes3, Kunigiskes4, Kunigiskes5, Kunigiskes6, Kunigiskes7, Kunigiskes8]
  },
  {
    slug: 'kunigiskes-vaivorikstes-g',
    title: 'Kunigiskes Vaivorikstes g, Namo Statyba',
    status: 'Baigtas',
    city: 'Palanga, Lietuva',
    year: 2023,
    description:
    'The Kunigiskes Vaivorikstes g project involved the construction of a new residential building with modern amenities and sustainable design features.',
    heroImage: Vaivorikstes1,
    gallery: [Vaivorikstes1, Vaivorikstes2, Vaivorikstes3, Vaivorikstes4, Vaivorikstes5, Vaivorikstes6, Vaivorikstes7, Vaivorikstes8, Vaivorikstes9, Vaivorikstes10, Vaivorikstes11, Vaivorikstes12, Vaivorikstes13, Vaivorikstes14, Vaivorikstes15, Vaivorikstes16, Vaivorikstes17, Vaivorikstes18, Vaivorikstes19]
  },
  {
    slug: 'vilmiskes',
    title: 'Vilmiskes, Namo Statyba',
    status: 'Baigtas',
    city: 'Palanga, Lietuva',
    year: 2023,
    description:
    'The Vilmiskes project involved the construction of a new residential building with modern amenities and sustainable design features.',
    heroImage: Vilmiskes1,
    gallery: [Vilmiskes1, Vilmiskes2, Vilmiskes3, Vilmiskes4, Vilmiskes5, Vilmiskes7, Vilmiskes8, Vilmiskes9, Vilmiskes10, Vilmiskes11, Vilmiskes12, Vilmiskes13, Vilmiskes14]
  },
  {
    slug: 'pasakele-darzelis',
    title: 'Pasakele Darzelis, Statyba',
    status: 'Baigtas',
    city: 'Gargždai, Lietuva',
    year: 2022,
    description:
    'The Pasakele Darzelis project involved the construction of a new childcare facility with modern amenities and sustainable design features.',
    heroImage: Darzelis1,
    gallery: [Darzelis1, Darzelis2, Darzelis3, Darzelis4, Darzelis5, Darzelis6, Darzelis7, Darzelis8, Darzelis9, Darzelis10] 
  },
  {
    slug: 'english-housing',
    title: 'Anglija English Housing, Namo Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    description:
    'The English Housing project involved the construction of a new residential building with modern amenities and sustainable design features.',
    heroImage: English1,
    gallery: [English1, English2]
  },
  {
    slug: 'epping-nightclub',
    title: 'Anglija Epping Nightclub, Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    description:
    'The Epping Nightclub project involved the construction of a new entertainment venue with modern amenities and sustainable design features.',
    heroImage: Nightclub1,
    gallery: [Nightclub1, Nightclub2, Nightclub3, Nightclub4, Nightclub5, Nightclub6, Nightclub7, Nightclub8, Nightclub9] 
  },
  {
    slug: 'slough-penthouse',
    title: 'Angliija Slough Penthouse, Butų Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    description:
    'The Slough Penthouse project involved the construction of a new luxury residential building with modern amenities and sustainable design features.',
    heroImage: Slough1,
    gallery: [Slough1, Slough2, Slough3, Slough4] 
  },
  {
    slug: 'village-house',
    title: 'Village House, Namo Statyba',
    status: 'Baigtas',
    city: 'Anglija, UK',
    year: 2023,
    description:
    'The Village House project involved the construction of a new residential building with modern amenities and sustainable design features.',
    heroImage: Village1,
    gallery: [Village1, Village2, Village3] 
  },
  {
    slug: 'palangos-gatve',
    title: 'Darbėnai Palangos g, Namo Statyba',
    status: 'Baigtas',
    city: 'Darbenai, Lietuva',
    year: 2023,
    description:
    'The Palangos g project involved the construction of a new residential building with modern amenities and sustainable design features.',
    heroImage: Darbenai1,
    gallery: [Darbenai1, Darbenai2, Darbenai3, Darbenai4, Darbenai5, Darbenai6, Darbenai7, Darbenai8, Darbenai9, Darbenai10]
  }
  
]
</script>