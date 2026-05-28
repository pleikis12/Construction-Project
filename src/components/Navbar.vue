<script setup>
import logo from '../assets/branding/construction-logo/PNG-01.svg'
</script>

<template>
  <nav class="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-white/10">
    
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-12 items-center py-5">

        <div class="col-span-4 flex items-center gap-4">
          <img 
            :src="logo"
            alt="Vestar Construction Logo"
            class="h-12 w-auto"
          />

          <div class="hidden sm:flex items-baseline gap-2.5">

            <span class="font-condensed font-extrabold text-xl tracking-[0.12em] text-white">
              UAB Vestar
            </span>

            <span class="font-condensed font-normal text-xl tracking-[0.35em] text-white/60">
              CONSTRUCTION
            </span>

          </div>
        </div>

        <div class="hidden md:flex col-span-5 justify-center items-center gap-10 text-sm tracking-wide text-white/80">
          <a href="#home" class="font-condensed hover:text-orange-500 transition-colors duration-300">HOME</a>
          <a href="#projects" class="font-condensed hover:text-orange-500 transition-colors duration-300">PROJECTS</a>
          <a href="#about" class="font-condensed hover:text-orange-500 transition-colors duration-300">ABOUT</a>
          <a href="#contact" class="font-condensed hover:text-orange-500 transition-colors duration-300">CONTACT</a>
        </div>

        <div class="col-span-8 md:col-span-3 flex justify-end">
          <button 
            type="button"
            class="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-black
                   font-condensed font-medium text-sm px-8 py-3 rounded-md transition-all duration-300"
          >
            Get A Quote
          </button>
        </div>

      </div>
    </div>

  </nav>
</template>