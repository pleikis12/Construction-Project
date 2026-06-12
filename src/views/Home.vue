<template>
  <div class="min-h-screen bg-dark text-white">
    <Hero />
    <ProjectSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import ProjectSection from '../components/ProjectSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ContactSection from '../components/ContactSection.vue'
import Footer from '@/components/Footer.vue';
</script>