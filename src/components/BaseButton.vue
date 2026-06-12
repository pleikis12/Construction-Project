<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  type: { type: String, default: 'button' },
  customClass: { type: String, default: '' } // Add this
})
</script>

<template>
  <button 
    :type="type"
    class="font-semibold uppercase tracking-wide transition-all duration-300"
    :class="[
      variant === 'primary' 
        ? 'bg-brand hover:bg-brand-hover text-black px-12 py-5' 
        : 'border border-white/20 text-white hover:bg-white hover:text-black px-10 py-5',
      customClass 
    ]"
  >
    <slot />
  </button>
</template>