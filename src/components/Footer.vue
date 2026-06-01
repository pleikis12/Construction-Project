<template>
  <footer class="relative bg-[#0f1012] text-white overflow-hidden">

    <!-- TOP BORDER -->
    <div class="border-t border-white/10"></div>

    <div class="container py-14 md:py-20">

      <!-- MAIN GRID -->
      <div class="grid grid-cols-12 gap-10 md:gap-12">

        <!-- LEFT: BRAND -->
        <div class="col-span-12 md:col-span-5 space-y-5 md:space-y-6">

          <h3
            class="font-condensed uppercase leading-none"
            style="font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900;"
          >
            VESTAR<br />
            CONSTRUCTION
          </h3>

          <p class="text-white/50 leading-relaxed max-w-md text-sm md:text-base">
            Statybos projektai paremti tikslumu, struktūra ir architektūriniu aiškumu.
            Nuo idėjos iki pilno įgyvendinimo.
          </p>

          <p class="text-white/30 text-[10px] md:text-xs tracking-[0.3em] uppercase">
            Klaipėda, Lietuva
          </p>

        </div>

        <!-- NAV -->
        <div class="col-span-6 md:col-span-3 space-y-3 md:space-y-4">

          <p class="text-white/60 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-4">
            Navigacija
          </p>

          <a href="#home" class="block text-white/60 hover:text-[#38cdf5] transition text-sm md:text-base">
            Pradžia
          </a>

          <a href="#about" class="block text-white/60 hover:text-[#38cdf5] transition text-sm md:text-base">
            Apie mus
          </a>

          <a href="#projects" class="block text-white/60 hover:text-[#38cdf5] transition text-sm md:text-base">
            Projektai
          </a>

          <a href="#contact" class="block text-white/60 hover:text-[#38cdf5] transition text-sm md:text-base">
            Kontaktai
          </a>

        </div>

        <!-- CONTACT -->
        <div class="col-span-6 md:col-span-4 space-y-3 md:space-y-4">

          <p class="text-white/60 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3 md:mb-4">
            Kontaktai
          </p>

          <p class="text-white/50 text-sm md:text-base">info@vestar.lt</p>
          <p class="text-white/50 text-sm md:text-base">+370 XXX XXXXX</p>

          <div class="pt-4 md:pt-6 space-y-1 md:space-y-2">
            <p class="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.3em]">
              Darbo laikas
            </p>
            <p class="text-white/50 text-sm">
              I–V: 08:00 – 18:00
            </p>
          </div>

        </div>

      </div>

      <!-- BOTTOM -->
      <div class="mt-12 md:mt-16 border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between gap-3 md:gap-4">

        <p class="text-white/30 text-[10px] md:text-xs tracking-[0.2em] uppercase">
          © {{ new Date().getFullYear() }} Vestar Construction
        </p>

        <p class="text-white/30 text-[10px] md:text-xs tracking-[0.2em] uppercase">
          Nuo Pamatu iki Rakto
        </p>

      </div>

    </div>

  </footer>
</template>