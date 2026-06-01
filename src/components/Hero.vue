<template>
  <section id="home" class="relative min-h-svh overflow-hidden section-sm pt-0 md:pt-0">

    <!-- BACKGROUND -->
    <div class="absolute inset-0">
      <img
        src="../assets/branding/hero/firefly.jpg"
        class="w-full h-full object-cover object-center"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-black/10"></div>
    </div>

    <!-- CONTENT -->
    <div class="relative container">

      <div class="grid grid-cols-12 gap-6 min-h-[85svh] items-start md:items-center hero-center">

        <div class="col-span-12 lg:col-span-7 space-y-10 hero-top md:pt-0">

          <!-- TOP LABEL -->
          <div class="font-condensed flex items-center gap-3 text-[#E5D8C3] tracking-[1px] md:tracking-[4px] text-[11px] md:text-sm">

            <span class="w-10 md:w-16 h-px bg-[#E5D8C3]/80 shrink-0"></span>

            <span class="[text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
              NUO 2022 M. • ĮKURTA KLAIPĖDOJE
            </span>

          </div>

          <!-- HEADLINE -->
          <h1
            class="font-condensed uppercase text-white leading-[0.9]"
            style="font-weight:900; font-size:clamp(3rem,8.5vw,8.5rem); letter-spacing:-0.02em;"
          >
            NUO PAMATU<br>
            <span class="text-[#38cdf5]">IKI RAKTO</span><br>
            <span class="whitespace-nowrap">STATYBOS DARBAI</span>
          </h1>

          <!-- DESCRIPTION -->
          <p class="font-condensed max-w-2xl text-[1.1rem] md:text-xl text-white/80 leading-relaxed">
            UAB „Vestar Construction“ įgyvendina tikslius, mastelio ir architektūrinio aiškumo principus,
            vykdydama komercinius, gyvenamuosius ir visuomeninius projektus Klaipėdos regione.
          </p>

          <!-- STATS -->
          <div class="pt-2">
            <StatsBar />
          </div>

          <!-- BUTTONS -->
          <div class="flex flex-wrap gap-4 pt-2">

            <button class="bg-[#38cdf5] hover:bg-[#2bb8df] px-12 py-5 font-semibold uppercase tracking-wide transition">
              View Projects
            </button>

            <button class="group relative overflow-hidden border border-white/20 px-10 py-5 font-semibold uppercase tracking-wide text-white">
              <span class="relative z-10 group-hover:text-black transition-colors duration-300">
                Start a Project
              </span>

              <span class="absolute inset-0 bg-[#38cdf5] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </button>

          </div>

        </div>

      </div>
    </div>

  </section>
  
  <AboutSection />

</template>

<script setup>
import StatsBar from './StatsBar.vue'
</script>