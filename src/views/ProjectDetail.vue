<template>
  <section
    v-if="project"
    class="min-h-screen bg-[#0a0a0a] text-white"
  >

    <section class="relative h-[65vh] overflow-hidden">

      <img
        :src="project.gallery[0]"
        class="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
        @click="openImage(0)"
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

    <section class="container pb-20">

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        <div
          v-for="(img, index) in images.slice(1)"
          :key="img"
          class="overflow-hidden bg-black group cursor-zoom-in"
          @click="openImage(index + 1)"
        >

          <img
            :src="img"
            class="w-full aspect-[4/3] block object-cover
                   transition-transform duration-700
                   group-hover:scale-105"
            loading="lazy"
          />

        </div>

      </div>

        

      <div
        v-if="activeIndex !== null"
        class="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        @click="closeImage"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >

        <div class="relative flex items-center justify-center">

          <img
            :src="activeImage"
            class="max-w-[85vw] max-h-[85vh] object-contain select-none transition-all duration-300"
          />

          <div class="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.2em] uppercase">
            {{ activeIndex + 1 }} / {{ images.length }}
          </div>

          <button
            class="absolute top-5 right-5 text-white text-2xl hover:text-[#00A8E8]"
            @click.stop="closeImage"
          >
            ✕
          </button>

          <button
            class="absolute left-[-50px] top-1/2 -translate-y-1/2
                   text-white text-6xl hover:text-[#00A8E8]
                   transition"
            @click.stop="prevImage"
          >
            ‹
          </button>

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
import { ref, computed, onMounted, onBeforeUnmount, watchEffect } from 'vue'
import { projects } from '../data/projects'

const route = useRoute()

const activeIndex = ref<number | null>(null)

const project = computed(() => {
  const slug = String(route.params.slug)
  return projects.find(p => p.slug === slug)
})

const images = computed(() => {
  return project.value ? project.value.gallery : []
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


const handleKey = (e: KeyboardEvent) => {
  if (activeIndex.value === null) return

  if (e.key === 'Escape') closeImage()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}


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

watchEffect(() => {
  if (project.value) {
    document.title = `${project.value.title} | Vestar Construction`
  } else {
    document.title = 'Vestar Construction'
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey)
}) 
  
</script>