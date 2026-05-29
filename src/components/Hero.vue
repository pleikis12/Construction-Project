<template>
  <section class="relative min-h-svh pt-28 pb-20 overflow-hidden">

    <!-- Background -->
    <div class="absolute inset-0">
      <img
        src="../assets/branding/hero/firefly.jpg"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-black/60"></div>
    </div>

    <!-- CONTENT GRID LAYER -->
    <div class="relative container">

      <div class="grid grid-cols-12 gap-6 min-h-screen items-center">

        <!-- HERO COLUMN -->
        <div class="col-span-12 lg:col-span-7">

          <!-- Since 2022 -->
          <div class="font-condensed flex items-center gap-3 text-[#E5D8C3] tracking-[1px] md:tracking-[4px] text-[11px] md:text-sm mb-(--space-2)">

            <span class="w-10 md:w-16 h-px bg-[#E5D8C3]/80 shrink-0"></span>

            <span class="[text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
              SINCE 2022 • EST. KLAIPĖDA
            </span>

          </div>

          <!-- HEADLINE -->
          <h1
            class="font-condensed uppercase text-white leading-[0.9]"
            style="font-weight: 900; font-size: clamp(3rem, 8.5vw, 8.5rem); letter-spacing: -0.02em;"
          >
            IMAGINED<br>
            <span class="text-[#38cdf5]">BY OTHERS</span><br>
            BUILT BY US
          </h1>

          <!-- DESCRIPTION -->
          <p class="font-condensed max-w-2xl text-[1.1rem] md:text-xl text-[#E5E5E5] mt-8 mb-(--space-5) leading-relaxed">
            UAB Vestar Construction delivers landmark commercial, residential, and civic 
            projects across Lithuania with precision, scale, and architectural clarity.
          </p>

          <!-- STATS -->
          <StatsBar class="mb-(--space-3)" />

          <!-- BUTTONS -->
          <div class="flex flex-wrap gap-4">

            <button class="bg-[#38cdf5] hover:bg-[#2bb8df] px-12 py-5 font-semibold uppercase tracking-wide transition">
              View Projects
            </button>

            <button
              class="group relative overflow-hidden border border-white/20 px-10 py-5 font-semibold uppercase tracking-wide text-white transition-colors duration-300"
            >
              <span class="relative z-10 group-hover:text-black transition-colors duration-300">
                Start a Project
              </span>

              <span
                class="absolute inset-0 bg-[#38cdf5] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              ></span>
            </button>

          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import StatsBar from './StatsBar.vue'
</script>