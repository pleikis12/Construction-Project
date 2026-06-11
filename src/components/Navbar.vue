<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

import logo from '../assets/branding/construction-logo/PNG-01.svg'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// lock body scroll when mobile menu is open
watch(mobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 h-[var(--navbar-h)] transition-all duration-500 border-b"
    :class="scrolled
      ? 'bg-[#0F0F0F]/80 backdrop-blur-md border-white/5 shadow-lg'
      : 'bg-transparent border-transparent'
    "
  >
    <div class="container h-full">

      <div class="flex items-center justify-between h-full">

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

          <RouterLink to="/" class="text-white hover:text-[#00A8E8]">
            NAMO
          </RouterLink>

          <RouterLink to="/#projects" class="text-white hover:text-[#00A8E8]">
            PROJEKTAI
          </RouterLink>

          <RouterLink to="/#about" class="text-white hover:text-[#00A8E8]">
            APIE MUS
          </RouterLink>

          <RouterLink to="/#contact" class="text-white hover:text-[#00A8E8]">
            KONTAKTAI
          </RouterLink>

        </div>

        <!-- RIGHT -->
        <div class="flex items-center gap-4">

          <!-- CTA -->
          <button
            class="hidden md:block text-[#00A8E8] border border-[#00A8E8]
                   px-6 py-2 text-sm hover:bg-[#00A8E8]/60 hover:text-black transition"
          >
            Gaukite pasiūlymą
          </button>

          <!-- MOBILE BUTTON -->
          <button
            class="md:hidden text-white"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Menu v-if="!mobileMenuOpen" />
            <X v-else />
          </button>

        </div>

      </div>
    </div>

    <!-- MOBILE MENU -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden fixed left-0 top-full w-full bg-[#0F0F0F]
             shadow-2xl border-t border-white/10 z-[60]"
    >
      <div class="flex flex-col px-6 pt-6 pb-6 gap-3">

        <div class="text-white/40 text-xs tracking-[0.3em] uppercase mb-2">
          Navigation
        </div>

        <!-- LINKS -->
        <RouterLink
          to="/"
          @click="mobileMenuOpen = false"
          class="group flex items-center justify-between py-4 px-5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00A8E8]/40 transition"
        >
          <span class="font-condensed tracking-[0.2em] uppercase text-white/90">
            NAMO
          </span>
          <span class="text-[#00A8E8] opacity-0 group-hover:opacity-100 transition -translate-x-1 group-hover:translate-x-0">
            →
          </span>
        </RouterLink>

        <RouterLink
          to="/#projects"
          @click="mobileMenuOpen = false"
          class="group flex items-center justify-between py-4 px-5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00A8E8]/40 transition"
        >
          <span class="font-condensed tracking-[0.2em] uppercase text-white/90">
            PROJEKTAI
          </span>
          <span class="text-[#00A8E8] opacity-0 group-hover:opacity-100 transition -translate-x-1 group-hover:translate-x-0">
            →
          </span>
        </RouterLink>

        <RouterLink
          to="/#about"
          @click="mobileMenuOpen = false"
          class="group flex items-center justify-between py-4 px-5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00A8E8]/40 transition"
        >
          <span class="font-condensed tracking-[0.2em] uppercase text-white/90">
            APIE MUS
          </span>
          <span class="text-[#00A8E8] opacity-0 group-hover:opacity-100 transition -translate-x-1 group-hover:translate-x-0">
            →
          </span>
        </RouterLink>

        <RouterLink
          to="/#contact"
          @click="mobileMenuOpen = false"
          class="group flex items-center justify-between py-4 px-5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00A8E8]/40 transition"
        >
          <span class="font-condensed tracking-[0.2em] uppercase text-white/90">
            KONTAKTAI
          </span>
          <span class="text-[#00A8E8] opacity-0 group-hover:opacity-100 transition -translate-x-1 group-hover:translate-x-0">
            →
          </span>
        </RouterLink>

        <!-- CTA -->
        <button
          class="mt-4 border border-[#00A8E8] text-[#00A8E8]
                 py-3 px-5 font-condensed tracking-[0.2em] uppercase
                 hover:bg-[#00A8E8]/10 transition"
        >
          Gaukite pasiūlymą
        </button>

      </div>
    </div>

  </nav>
</template>