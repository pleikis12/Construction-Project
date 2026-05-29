<script setup>
import logo from '../assets/branding/construction-logo/PNG-01.svg'
</script>

<template>
  <nav class="fixed top-0 w-full bg-[#0F0F0F] backdrop-blur-md z-50 drop-shadow-md/50">

    <!-- GLOBAL ALIGNMENT CONTAINER -->
    <div class="container">
      
      <!-- SIMPLE SPINE LAYOUT -->
      <div class="flex items-center justify-between py-5">

        <!-- LEFT -->
        <div class="flex items-center gap-4 min-w-0">

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

        <!-- CENTER NAV -->
        <div class="hidden md:flex items-center gap-10 text-sm tracking-wide text-white/80">

          <a href="#home" class="font-condensed hover:text-[#00A8E8] transition-colors duration-300">HOME</a>
          <a href="#projects" class="font-condensed hover:text-[#00A8E8] transition-colors duration-300">PROJECTS</a>
          <a href="#about" class="font-condensed hover:text-[#00A8E8] transition-colors duration-300">ABOUT</a>
          <a href="#contact" class="font-condensed hover:text-[#00A8E8] transition-colors duration-300">CONTACT</a>

        </div>

        <!-- RIGHT -->
        <div class="flex justify-end">

          <button 
            type="button"
            class="text-[#00A8E8] border border-[#00A8E8] hover:bg-[#00A8E8]/65 hover:text-black
                   font-condensed font-medium text-sm px-8 py-3 rounded-md transition-all duration-300"
          >
            Get A Quote
          </button>

        </div>

      </div>
    </div>

  </nav>
</template>