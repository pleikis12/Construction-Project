<template>
  <section id="contact" class="py-24 bg-dark text-white">
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      <div class="space-y-8 opacity-0 animate-fade-in-up">
        <div class="flex items-center gap-4">
          <div class="w-12 h-px bg-brand"></div>
          <span class="text-brand text-xs tracking-[0.25em] uppercase font-bold">Susisiekite</span>
        </div>
        
        <h2 class="text-6xl font-condensed uppercase font-extrabold leading-[0.9]">Pradėkite savo<br/>projektą šiandien</h2>
        
        <p class="text-white/60 max-w-md">Nesvarbu, ar turite visą brėžinių rinkinį, ar tik idėją, mūsų parengiamųjų darbų komanda gali padėti nustatyti projekto apimtį, biudžetą ir suplanuoti jį nuo pat pradžių.</p>

        <div class="space-y-8 pt-4">
          <div class="flex items-center gap-4">
            <span class="text-[#00A8E8]">📞</span>
            <div class="flex flex-col">
              <span class="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-0.5">Numeris</span>
              <span class="text-white">+370 (674) 23 383</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-[#00A8E8]">✉</span>
            <div class="flex flex-col">
              <span class="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-0.5">Elektroninis paštas</span>
              <span class="text-white">SAULIUSPLEIKYS@UABVESTAR.COM</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-[#00A8E8]">📍</span>
            <div class="flex flex-col">
              <span class="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-0.5">Adresas</span>
              <span class="text-white">Vėjo g. 12-2, Gindulių k., Klaipėdos r.</span>
            </div>
          </div>
        </div>

        <div class="w-full h-px bg-white/10 my-8"></div>

        <div class="grid grid-cols-2 gap-4">
          <div v-for="office in offices" :key="office" class="text-white/60 text-sm flex items-center gap-2">
            <span class="text-[#00A8E8]">📍</span> {{ office }}
          </div>
        </div>
      </div>

      <div class="bg-charcoal/65 border border-white/10 p-8 md:p-10 opacity-0 animate-fade-in-up [animation-delay:0.2s]">
        <h3 class="text-xl font-bold uppercase mb-8">Projekto užklausos forma</h3>

        <div v-if="status === 'success'" class="h-[400px] flex flex-col justify-center items-center text-center">
          <h3 class="text-green-400 uppercase tracking-widest mb-2">Žinutė išsiųsta</h3>
          <p class="text-white/70">Ačiū, kad susisiekėte. Atsakysime artimiausiu metu.</p>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-[10px] text-white/40 uppercase tracking-[0.1em]">Pilnas Vardas *</label>
              <input v-model="form.name" name="name" required class="w-full bg-charcoal border border-white/10 p-3 text-sm focus:border-brand outline-none transition" />
            </div>
            <div class="space-y-2">
              <label class="text-[10px] text-white/40 uppercase tracking-[0.1em]">El. pašto adresas *</label>
              <input v-model="form.email" name="email" type="email" required class="w-full bg-charcoal border border-white/10 p-3 text-sm focus:border-brand outline-none transition" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-[10px] text-white/40 uppercase tracking-[0.1em]">Telefono nr.</label>
              <input v-model="form.phone" name="phone" class="w-full bg-charcoal border border-white/10 p-3 text-sm focus:border-brand outline-none transition" />
            </div>
            <div class="space-y-2">
              <label class="text-[10px] text-white/40 uppercase tracking-[0.1em]">Projecto Tipas</label>
              <select v-model="form.type" name="type" class="w-full bg-charcoal border border-white/10 p-3 text-sm focus:border-brand outline-none transition text-white">
                <option value="" disabled selected>Pasirinkite...</option>
                <option>Komercinis</option>
                <option>Rekreacinis</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2 md:col-span-2">
              <label class="text-[10px] text-white/40 uppercase tracking-[0.1em]">Miestas / Vietove</label>
              <input v-model="form.location" name="location" class="w-full bg-charcoal border border-white/10 p-3 text-sm focus:border-brand outline-none transition" />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-[10px] text-white/40 uppercase tracking-[0.1em]">Projekto Aprašymas *</label>
            <textarea v-model="form.message" name="message" required rows="4" class="w-full bg-charcoal border border-white/10 p-3 text-sm focus:border-brand outline-none transition resize-none"></textarea>
          </div>

          <button 
            type="submit"
            :disabled="status === 'sending'"
            class="w-full bg-brand text-black font-bold py-4 uppercase tracking-widest hover:bg-brand-hover transition active:scale-95"
          >
            {{ status === 'sending' ? 'Siunčiama...' : 'Siųsti užklausą' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const status = ref<'idle' | 'sending' | 'success'>('idle')
const form = reactive({ name: '', email: '', phone: '', type: '', location: '', message: '' })
const offices = ['Palanga', 'Kretinga', 'Klaipeda', 'Gargzdai']

//Formspree Setup
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT
const handleSubmit = async () => {
  status.value = 'sending'

  
  const payload = {
    ...form,
    _subject: `New Project Inquiry: ${form.name}`, 
    _replyto: form.email 
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload) 
    })

    if (response.ok) {
      status.value = 'success'
    } else {
      const data = await response.json()
      alert(data.error || 'Oops! Įvyko klaida siunčiant žinutę.')
      status.value = 'idle'
    }
  } catch (error) {
    alert('Nepavyko susisiekti su serveriu. Patikrinkite interneto ryšį.')
    status.value = 'idle'
  }
}
</script>