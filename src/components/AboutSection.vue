<template>
  <section
    id="about"
    ref="aboutSection"
    class="relative bg-[#111315] text-white py-20 md:py-28 overflow-hidden"
    :style="sectionStyle"
  >

    <!-- BACKGROUND -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-b from-[#141618] via-[#111315] to-[#0f1012]"></div>

      <div class="absolute inset-0 opacity-[0.04]
        bg-[radial-gradient(circle_at_20%_10%,white,transparent_60%)]">
      </div>
    </div>

    <div class="relative container">

      <!-- GRID -->
      <div class="grid grid-cols-12 gap-8 md:gap-12 items-start">

        <!-- LEFT -->
        <div class="col-span-12 lg:col-span-7">

          <!-- HEADER -->
          <div
            class="mb-10 md:mb-12 transition-all duration-700"
            :class="isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >

            <div class="flex items-center gap-3 md:gap-4 mb-4">
              <span class="w-8 md:w-12 h-px bg-[#38cdf5]"></span>

              <p class="text-[#38cdf5] uppercase tracking-[0.25em] md:tracking-[0.35em] text-[10px] md:text-xs">
                Apie mus
              </p>
            </div>

            <h2
              class="font-condensed uppercase leading-[0.95]"
              style="font-weight:900;font-size:clamp(2.2rem,5vw,4.5rem)"
            >
              Tikslumas.<br />
              Procesas.<br />
              Rezultatas.
            </h2>

          </div>

          <!-- TEXT -->
          <div
            class="space-y-5 md:space-y-6 transition-all duration-700 delay-100"
            :class="isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          >

            <p class="text-white/70 text-base md:text-lg leading-relaxed">
              UAB „Vestar Construction“ kuria statybos projektus,
              paremtus aiškia struktūra, inžineriniu tikslumu ir architektūriniu jautrumu.
            </p>

            <p class="text-white/50 text-sm md:text-base leading-relaxed">
              Dirbame su gyvenamaisiais, komerciniais ir visuomeniniais objektais Klaipėdos regione.
            </p>

            <p class="text-white/50 text-sm md:text-base leading-relaxed">
              Mūsų požiūris paprastas — mažiau triukšmo, daugiau struktūros.
            </p>

          </div>

        </div>

        <!-- RIGHT (CERTIFICATE) -->
        <div class="col-span-12 lg:col-span-5">

          <div class="w-full max-w-sm md:max-w-md mx-auto lg:mx-0">

            <div
              class="border border-white/10 bg-[#141618]/40 overflow-hidden transition-all duration-700 delay-200"
              :class="isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            >
              <img
                src="../assets/branding/Certificate.jpg"
                class="w-full h-auto object-contain block"
              />
            </div>

            <div class="mt-3 pl-1 text-center lg:text-left">

              <p class="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.3em]">
                Sertifikatas
              </p>

              <p class="text-white text-sm font-semibold mt-1">
                Strongest Company 2025
              </p>

            </div>

          </div>

        </div>

      </div>

      <!-- FEATURE IMAGE  -->
      <div
        class="mt-16 md:mt-28 transition-all duration-700 delay-300"
        :class="isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >

        <div class="relative overflow-hidden border border-white/10 h-[260px] sm:h-[320px] md:h-[520px]">

          <img
            src="../assets/branding/FeaturedImage.jfif"
            class="w-full h-full object-cover transition duration-700 md:duration-1000 hover:scale-105"
          />

          <!-- overlays (unchanged) -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
          <div class="absolute inset-0 bg-[#0a0a0a]/30"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

          <div class="absolute bottom-5 md:bottom-10 left-5 md:left-10">

            <p class="text-[#38cdf5] uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2 md:mb-3">
              VESTAR CONSTRUCTION
            </p>

            <h3 class="font-condensed uppercase text-xl sm:text-2xl md:text-6xl leading-none">
              Statome<br />
              ilgam laikui.
            </h3>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const aboutSection = ref(null)
const isActive = ref(false)

const sectionStyle = ref(`
  opacity: 0;
  transform: translateY(80px) scale(0.98);
`)

let ticking = false

const update = () => {
  if (!aboutSection.value) return

  const rect = aboutSection.value.getBoundingClientRect()
  const vh = window.innerHeight

  const progress = 1 - Math.min(Math.max(rect.top / vh, 0), 1)

  isActive.value = progress > 0.12

  const ease = Math.min(Math.max(progress, 0), 1)
  const smooth = ease * ease * (3 - 2 * ease)

  sectionStyle.value = `
    opacity: ${smooth};
    transform: translateY(${(1 - smooth) * 80}px) scale(${0.98 + smooth * 0.02});
  `

  ticking = false
}

const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(update)
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  update()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>