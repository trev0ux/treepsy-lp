<template>
  <div
    class="fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50"
    :class="[isScrolled ? 'px-4' : '']"
  >
    <header
      ref="header"
      :class="[
        'w-full z-100 transition-all duration-300  container mx-auto ease-in-out rounded-full',
        isScrolled ? 'glass-effect py-3 mx-4 mt-2' : 'bg-transparent py-6',
      ]"
    >
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-2">
          <logo-icon />
          <p class="font-zodiak">Treepsy</p>
        </div>

        <!-- <NuxtLink
          to="/login"
          class="border-primary-black border rounded-full py-2 px-4 hover:bg-primary-black hover:text-white transition-all linear duration-200"
        >
          Entrar
        </NuxtLink> -->
      </div>
    </header>
  </div>
</template>

<script>
import LogoIcon from './icons/LogoIcon.vue'
export default {
  components: { LogoIcon },
  data() {
    return {
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
  },
}
</script>

<style>
.glass-effect {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 1);
}
</style>
