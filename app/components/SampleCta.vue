<template>
  <section class="container mx-auto my-8 flex flex-col gap-[16px] items-start">
    <h2 class="font-zodiak text-[24px] lg:text-[32px] font-medium text-primary-black mb-2">
      Quer uma página só sua para atender seus clientes?
    </h2>
    <p class="font-jakarta text-sm lg:text-base font-light mb-4">
      Faça seu cadastro gratuitamente e experimente!
    </p>
    <button
      @click="openModal"
      class="px-5 py-3 bg-primary-black hover:bg-black linear transition-all duration-200 cursor-pointer rounded-[16px] text-white font-jakarta"
    >
      Experimentar gratuitamente
    </button>

    <!-- Price Validation Modal -->
    <PriceValidationModal
      :is-open="isModalOpen"
      @close="closeModal"
    />
  </section>
</template>

<script>
import PriceValidationModal from '~/components/PriceValidationModal.vue'

export default {
  components: {
    PriceValidationModal,
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
  },
}
</script>

<style></style>
