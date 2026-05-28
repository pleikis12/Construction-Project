<template>
  <nav class="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-orange-500 flex items-center justify-center font-bold text-2xl">I</div>
        <div class="font-bold text-2xl tracking-tighter">UAB Vestar Construction</div>
      </div>

      <div class="hidden md:flex items-center gap-10 text-sm">
        <a href="#home" class="hover:text-orange-500 transition-colors transition-delay-700 duration-700 ease-in-out">HOME</a>
        <a href="#projects" class="hover:text-orange-500 transition-colors transition-delay-700 duration-700 ease-in-out">PROJECTS</a>
        <a href="#about" class="hover:text-orange-500 transition-colors transition-delay-700 duration-700 ease-in-out">ABOUT</a>
        <a href="#contact" class="hover:text-orange-500 transition-colors transition-delay-700 duration-700 ease-in-out">CONTACT</a>
      </div>

      <button type="button" class="text-orange-500 bg-transparent border border-orange-500 hover:bg-orange-500 hover:text-black focus:ring-4 focus:ring-orange-300 font-medium leading-5 rounded-md text-sm px-8 py-3 focus:outline-none transition-colors">
        Get A Quote
      </button>
    </div>
  </nav>
</template>