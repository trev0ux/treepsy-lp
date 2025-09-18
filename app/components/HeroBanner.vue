<template>
  <section class="container lg:mt-5">
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
      <div class="flex flex-col gap-2 items-start">
        <div>
          <h1 class="font-zodiak text-[24px] lg:text-[32px] font-bold text-primary-black mb-4">
            Sua
            <span class="text-primary-purple">página profissional</span>
            .
            <br />
            Não um perfil em marketplace.
          </h1>
          <p class="font-jakarta text-sm font-light max-w-[420px]">
            Tenha sua página personalizada com agendamento e pagamento integrados, sem depender de
            marketplaces tradicionais
          </p>
        </div>

        <div class="lg:hidden">
          <NuxtImg src="terapy.png" alt="Terapia" class="w-[164px] h-[164px]" />
        </div>

        <button
          class="px-5 py-3 bg-primary-black hover:bg-black linear transition-all duration-200 cursor-pointer rounded-[16px] text-white mt-6 font-jakarta"
          @click="openModal"
        >
          Experimentar gratuitamente
        </button>
        <p class="font-light text-primary-black">Comece gratuitamente por 14 dias</p>
      </div>

      <div class="hidden lg:block flex-shrink-0">
        <NuxtImg src="terapy.png" alt="Terapia" class="w-[320px] h-[320px]" />
      </div>
    </div>

    <!-- Price Validation Modal -->
    <PriceValidationModal :is-open="isModalOpen" @close="closeModal" />
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
