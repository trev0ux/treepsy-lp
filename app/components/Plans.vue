<template>
  <!-- Seção de Pricing Research -->
  <section class="pricing-research relative z-1">
    <div class="container mx-auto">
      <div class="text-center mb-8">
        <h2 class="font-zodiak text-[24px] lg:text-[32px] font-bold text-primary-black mb-2">
          🎯 Lançamento em breve
        </h2>
        <p class="font-jakarta text-sm lg:text-base font-light text-gray-600">
          Ajude-nos a definir o preço ideal e garanta desconto especial
        </p>
      </div>

      <div
        class="bg-white/80 backdrop-blur-sm rounded-[32px] p-8 max-w-lg mx-auto text-center shadow-xl border border-white/50"
      >
        <!-- Value proposition -->
        <h3 class="font-zodiak text-xl font-semibold mb-6 text-primary-black">
          Sua página profissional independente
        </h3>

        <div class="space-y-3 mb-8 text-left">
          <div class="flex items-center space-x-3">
            <span class="text-green-500">✅</span>
            <span class="font-jakarta text-sm">Domínio personalizado (seuname.psy.br)</span>
          </div>
          <div class="flex items-center space-x-3">
            <span class="text-green-500">✅</span>
            <span class="font-jakarta text-sm">Agendamento e pagamento integrados</span>
          </div>
          <div class="flex items-center space-x-3">
            <span class="text-green-500">✅</span>
            <span class="font-jakarta text-sm">0% comissão por consulta</span>
          </div>
          <div class="flex items-center space-x-3">
            <span class="text-green-500">✅</span>
            <span class="font-jakarta text-sm">Sua marca, seus pacientes</span>
          </div>
        </div>

        <!-- CTA principal -->
        <button
          class="w-full mb-4 px-5 py-3 bg-primary-black hover:bg-black linear transition-all duration-200 cursor-pointer rounded-[16px] text-white font-jakarta"
          @click="openModal"
        >
          Sugerir Preço + Entrar na Waitlist
        </button>

        <!-- Incentivos -->
        <div class="bg-yellow-50 border border-yellow-200 rounded-[16px] p-4">
          <p class="font-jakarta text-yellow-800 font-medium text-sm">
            🎁 Participantes ganham 50% off + acesso beta
          </p>
        </div>

        <p class="font-jakarta text-sm text-gray-500 mt-4">👥 +89 psicólogos já participaram</p>
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
