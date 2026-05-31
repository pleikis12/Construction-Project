<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

import logo from '../assets/branding/construction-logo/PNG-01.svg'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 80
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-500" :class="scrolled
      ? 'bg-[#0F0F0F]/95 backdrop-blur-md shadow-lg'
      : 'bg-[#0F0F0F]/55 backdrop-blur-sm'
    ">
    <div class="container">

      <div class="flex items-center justify-between py-5">

        <!-- LEFT -->
        <RouterLink to="/" class="flex items-center gap-4">
          <img :src="logo" class="h-12 w-auto" />

          <div class="hidden sm:flex items-baseline gap-2.5">
            <span class="font-condensed font-extrabold text-xl text-white">
              UAB Vestar
            </span>
            <span class="font-condensed text-xl text-white/60 tracking-[0.35em]">
              CONSTRUCTION
            </span>
          </div>
        </RouterLink>

        <!-- DESKTOP NAV -->
        <div class="hidden md:flex items-center gap-10 text-sm">

          <RouterLink to="/" class="text-white hover:text-[#00A8E8]">NAMO</RouterLink>
          <RouterLink to="/#projects" class="text-white hover:text-[#00A8E8]">PROJEKTAI</RouterLink>
          <RouterLink to="/#about" class="text-white hover:text-[#00A8E8]">APIE MUS</RouterLink>
          <RouterLink to="/#contact" class="text-white hover:text-[#00A8E8]">KONTAKTAI</RouterLink>

        </div>

        <!-- RIGHT SIDE -->
        <div class="flex items-center gap-4">

          <!-- DESKTOP QUOTE -->
          <button class="hidden md:block text-[#00A8E8] border border-[#00A8E8]
                   px-6 py-2 text-sm hover:bg-[#00A8E8]/60 hover:text-black">
            Gaukite pasiūlymą
          </button>

          <!-- MOBILE HAMBURGER -->
          <button class="md:hidden text-white" @click="mobileMenuOpen = !mobileMenuOpen">
            <Menu v-if="!mobileMenuOpen" />
            <X v-else />
          </button>

        </div>

      </div>

      <!-- MOBILE MENU -->
      <div v-if="mobileMenuOpen"
        class="md:hidden fixed left-0 top-72px w-full bg-[#0F0F0F] shadow-2xl border-t border-white/10 z-50">

        <div class="flex flex-col px-6 pt-6 pb-6 gap-3">

          <!-- SECTION LABEL -->
          <div class="text-white/40 text-xs tracking-[0.3em] uppercase mb-2">
            Navigation
          </div>

          <!-- HOME -->
          <RouterLink to="/" @click="mobileMenuOpen = false" class="group flex items-center justify-between py-4 px-5
           border border-white/10 bg-white/5
           hover:bg-white/10 hover:border-[#00A8E8]/40
           transition-all duration-300">
            <span class="font-condensed tracking-[0.2em] uppercase text-white/90 font-medium">
              NAMO
            </span>

            <span class="text-[#00A8E8] opacity-0 group-hover:opacity-100 transition
                 -translate-x-1 group-hover:translate-x-0 duration-300">
              →
            </span>
          </RouterLink>

          <!-- PROJECTS -->
          <RouterLink to="/#projects" @click="mobileMenuOpen = false" class="group flex items-center justify-between py-4 px-5
           border border-white/10 bg-white/5
           hover:bg-white/10 hover:border-[#00A8E8]/40
           transition-all duration-300">
            <span class="font-condensed tracking-[0.2em] uppercase text-white/90 font-medium">
              PROJEKTAI
            </span>

            <span class="text-[#00A8E8] opacity-0 group-hover:opacity-100 transition
                 -translate-x-1 group-hover:translate-x-0 duration-300">
              →
            </span>
          </RouterLink>

          <!-- ABOUT -->
          <RouterLink to="/#about" @click="mobileMenuOpen = false" class="group flex items-center justify-between py-4 px-5
           border border-white/10 bg-white/5
           hover:bg-white/10 hover:border-[#00A8E8]/40
           transition-all duration-300">
            <span class="font-condensed tracking-[0.2em] uppercase text-white/90 font-medium">
              APIE MUS
            </span>

            <span class="text-[#00A8E8] opacity-0 group-hover:opacity-100 transition
                 -translate-x-1 group-hover:translate-x-0 duration-300">
              →
            </span>
          </RouterLink>

          <!-- CONTACT -->
          <RouterLink to="/#contact" @click="mobileMenuOpen = false" class="group flex items-center justify-between py-4 px-5
           border border-white/10 bg-white/5
           hover:bg-white/10 hover:border-[#00A8E8]/40
           transition-all duration-300">
            <span class="font-condensed tracking-[0.2em] uppercase text-white/90 font-medium">
              KONTAKTAI
            </span>

            <span class="text-[#00A8E8] opacity-0 group-hover:opacity-100 transition
                 -translate-x-1 group-hover:translate-x-0 duration-300">
              →
            </span>
          </RouterLink>

          <!-- QUOTE BUTTON -->
          <button class="mt-4 border border-[#00A8E8] text-[#00A8E8]
           py-3 px-5 font-condensed tracking-[0.2em] uppercase
           hover:bg-[#00A8E8]/10 transition-all duration-300">
            Gaukite pasiūlymą
          </button>

        </div>

      </div>

    </div>
  </nav>
</template>