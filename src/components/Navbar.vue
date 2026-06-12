<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router' 
import { Menu, X } from 'lucide-vue-next'

import logo from '../assets/branding/construction-logo/PNG-01.svg'

const route = useRoute() // 
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const isSolid = computed(() => scrolled.value || route.path !== '/')

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    mobileMenuOpen.value = false
  }
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(mobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 h-[var(--navbar-h)] transition-all duration-500 border-b overflow-hidden"
    :class="isSolid
      ? 'bg-charcoal border-white/10 shadow-lg' 
      : 'bg-gradient-to-b from-charcoal/80 to-transparent backdrop-blur-sm border-transparent'"
  >
    <div class="absolute inset-0 pointer-events-none opacity-[0.08]">
      <div class="absolute -top-[150%] -left-[20%] w-[150%] h-[300%] bg-[radial-gradient(circle,white,transparent_60%)]"></div>
    </div>

    <div class="container h-full">
      <div class="flex items-center justify-between h-full">
        
        <RouterLink to="/" class="flex items-center gap-4">
          <img :src="logo" class="h-12 w-auto" />

          <div class="hidden sm:flex items-baseline gap-2.5">
            <span class="font-condensed font-extrabold text-xl text-white">
              UAB Vestar
            </span>
            <span class="font-condensed text-xl text-brand tracking-[0.35em]">
              CONSTRUCTION
            </span>
          </div>
        </RouterLink>

        <div class="hidden md:flex items-center gap-10 text-sm font-semibold">
          <RouterLink to="/" class="text-white hover:text-brand-hover transition">NAMO</RouterLink>
          <RouterLink to="/#projects" class="text-white hover:text-brand-hover transition">PROJEKTAI</RouterLink>
          <RouterLink to="/#about" class="text-white hover:text-brand-hover transition">APIE MUS</RouterLink>
          <RouterLink to="/#contact" class="text-white hover:text-brand-hover transition">KONTAKTAI</RouterLink>
        </div>

        <div class="flex items-center gap-4">
          <button
            @click="scrollToContact"
            class="hidden md:block text-brand border border-brand px-6 py-2 text-sm 
                   hover:bg-brand hover:text-black transition"
          >
            Gaukite pasiūlymą
          </button>

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
  </nav>

  <div
    v-if="mobileMenuOpen"
    class="md:hidden fixed left-0 top-[var(--navbar-h)] w-full bg-dark shadow-2xl border-t border-white/10 z-[60]"
  >
    <div class="flex flex-col px-6 pt-6 pb-6 gap-3">
      <div class="text-white/40 text-xs tracking-[0.3em] uppercase mb-2">Navigation</div>

      <RouterLink to="/" @click="mobileMenuOpen = false" class="group flex items-center justify-between py-4 px-5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand/40 transition">
        <span class="font-condensed tracking-[0.2em] uppercase text-white/90">NAMO</span>
        <span class="text-brand opacity-0 group-hover:opacity-100 transition -translate-x-1 group-hover:translate-x-0">→</span>
      </RouterLink>

      <RouterLink to="/#projects" @click="mobileMenuOpen = false" class="group flex items-center justify-between py-4 px-5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand/40 transition">
        <span class="font-condensed tracking-[0.2em] uppercase text-white/90">PROJEKTAI</span>
        <span class="text-brand opacity-0 group-hover:opacity-100 transition -translate-x-1 group-hover:translate-x-0">→</span>
      </RouterLink>

      <RouterLink to="/#about" @click="mobileMenuOpen = false" class="group flex items-center justify-between py-4 px-5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand/40 transition">
        <span class="font-condensed tracking-[0.2em] uppercase text-white/90">APIE MUS</span>
        <span class="text-brand opacity-0 group-hover:opacity-100 transition -translate-x-1 group-hover:translate-x-0">→</span>
      </RouterLink>

      <RouterLink to="/#contact" @click="mobileMenuOpen = false" class="group flex items-center justify-between py-4 px-5 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand/40 transition">
        <span class="font-condensed tracking-[0.2em] uppercase text-white/90">KONTAKTAI</span>
        <span class="text-brand opacity-0 group-hover:opacity-100 transition -translate-x-1 group-hover:translate-x-0">→</span>
      </RouterLink>

      <button 
        @click="scrollToContact"
        class="mt-4 border border-brand text-brand py-3 px-5 font-condensed tracking-[0.2em] uppercase hover:bg-brand hover:text-black transition"
      >
        Gaukite pasiūlymą
      </button>
    </div>
  </div>
</template>