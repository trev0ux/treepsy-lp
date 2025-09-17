<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[9999] flex items-center justify-center"
      @click="closeModal"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <!-- Modal -->
      <div
        class="relative bg-gradient-to-br from-[#F9EAE9] via-[#FEFAF1] to-[#FFFDF2] w-full max-w-2xl max-h-[100vh] overflow-y-auto border border-white/50 shadow-2xl"
        @click.stop
      >
        <!-- Close Button -->
        <button
          class="absolute top-6 right-6 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 z-10"
          @click="closeModal"
        >
          <IconsCloseIcon />
        </button>

        <div class="px-2 lg:p-8 pt-16">
          <!-- Header -->
          <div class="text-center mb-8">
            <h1 class="font-zodiak text-2xl lg:text-3xl font-bold text-primary-black mb-4">
              🎯 Ajude-nos a definir o preço ideal
            </h1>
            <p class="font-jakarta text-base lg:text-lg text-gray-600">
              Sua opinião é fundamental para criarmos uma solução acessível para todos
            </p>
          </div>

          <!-- Form -->
          <div
            class="bg-white/80 backdrop-blur-sm rounded-[24px] p-6 lg:p-8 shadow-xl border border-white/50"
          >
            <form class="space-y-6" @submit.prevent="submitForm">
              <!-- Basic Info -->
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block font-jakarta text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full p-3 border border-gray-200 rounded-[16px] focus:ring-2 focus:ring-primary-purple focus:border-transparent font-jakarta"
                  />
                </div>
                <div>
                  <label class="block font-jakarta text-sm font-medium text-gray-700 mb-2">
                    E-mail profissional
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full p-3 border border-gray-200 rounded-[16px] focus:ring-2 focus:ring-primary-purple focus:border-transparent font-jakarta"
                  />
                </div>
              </div>

              <!-- Specialty -->
              <div>
                <label class="block font-jakarta text-sm font-medium text-gray-700 mb-2">
                  Sua especialidade principal
                </label>
                <select
                  v-model="form.specialty"
                  required
                  class="w-full p-3 border border-gray-200 rounded-[16px] focus:ring-2 focus:ring-primary-purple focus:border-transparent font-jakarta"
                >
                  <option value="">Selecione sua especialidade</option>
                  <option value="clinica">Psicologia Clínica</option>
                  <option value="casal">Terapia de Casal</option>
                  <option value="ansiedade">Ansiedade e Transtornos</option>
                  <option value="infantil">Psicologia Infantil</option>
                  <option value="organizacional">Psicologia Organizacional</option>
                  <option value="neuropsicologia">Neuropsicologia</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <!-- Current Context -->
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block font-jakarta text-sm font-medium text-gray-700 mb-2">
                    Consultas por mês
                  </label>
                  <select
                    v-model="form.sessionsMonth"
                    required
                    class="w-full p-3 border border-gray-200 rounded-[16px] focus:ring-2 focus:ring-primary-purple focus:border-transparent font-jakarta"
                  >
                    <option value="">Selecione</option>
                    <option value="0-10">0-10 consultas</option>
                    <option value="10-20">10-20 consultas</option>
                    <option value="20-40">20-40 consultas</option>
                    <option value="40+">Mais de 40</option>
                  </select>
                </div>
                <div>
                  <label class="block font-jakarta text-sm font-medium text-gray-700 mb-2">
                    Valor médio por consulta
                  </label>
                  <select
                    v-model="form.sessionValue"
                    required
                    class="w-full p-3 border border-gray-200 rounded-[16px] focus:ring-2 focus:ring-primary-purple focus:border-transparent font-jakarta"
                  >
                    <option value="">Selecione</option>
                    <option value="60-80">R$ 60-80</option>
                    <option value="80-120">R$ 80-120</option>
                    <option value="120-200">R$ 120-200</option>
                    <option value="200+">R$ 200+</option>
                  </select>
                </div>
              </div>

              <!-- Current Platform -->
              <div>
                <label class="block font-jakarta text-sm font-medium text-gray-700 mb-2">
                  Como você atende hoje?
                </label>
                <div class="space-y-2">
                  <label class="flex items-center font-jakarta">
                    <input
                      v-model="form.currentPlatform"
                      type="radio"
                      value="zenklub"
                      class="mr-3 text-primary-purple"
                    />
                    <span>Zenklub (pago comissões)</span>
                  </label>
                  <label class="flex items-center font-jakarta">
                    <input
                      v-model="form.currentPlatform"
                      type="radio"
                      value="vittude"
                      class="mr-3 text-primary-purple"
                    />
                    <span>Vittude (pago mensalidade + comissões)</span>
                  </label>
                  <label class="flex items-center font-jakarta">
                    <input
                      v-model="form.currentPlatform"
                      type="radio"
                      value="consultorio"
                      class="mr-3 text-primary-purple"
                    />
                    <span>Consultório próprio apenas</span>
                  </label>
                  <label class="flex items-center font-jakarta">
                    <input
                      v-model="form.currentPlatform"
                      type="radio"
                      value="nenhuma"
                      class="mr-3 text-primary-purple"
                    />
                    <span>Não atendo online ainda</span>
                  </label>
                </div>
              </div>

              <!-- Price Validation Section -->
              <div
                class="bg-gradient-to-r from-primary-purple/10 to-pink-50 p-6 rounded-[20px] border-2 border-primary-purple/20"
              >
                <h3 class="font-zodiak text-xl font-semibold text-gray-800 mb-4 text-center">
                  💡 Quanto você pagaria por mês?
                </h3>

                <p class="font-jakarta text-gray-600 mb-6 text-center">
                  Para ter sua própria página (seunome.psy.br) com agendamento integrado,
                  <strong>sem pagar comissões</strong>
                  por consulta:
                </p>

                <!-- Price Slider -->
                <div class="mb-6">
                  <div class="text-center mb-4">
                    <span class="font-zodiak text-3xl font-bold text-primary-purple">
                      R$ {{ form.suggestedPrice }}
                    </span>
                    <span class="font-jakarta text-gray-500">/mês</span>
                  </div>

                  <input
                    v-model="form.suggestedPrice"
                    type="range"
                    min="20"
                    max="200"
                    step="10"
                    class="price-slider w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-lg appearance-none cursor-pointer"
                  />

                  <div class="flex justify-between font-jakarta text-sm text-gray-500 mt-2">
                    <span>R$ 20</span>
                    <span>R$ 200</span>
                  </div>
                </div>

                <!-- Price Options -->
                <div class="grid md:grid-cols-4 gap-3 mb-4">
                  <button
                    type="button"
                    :class="[
                      'bg-white border-2 p-3 rounded-[16px] text-center hover:border-primary-purple hover:bg-primary-purple/5 transition-all duration-200',
                      form.suggestedPrice == 39
                        ? 'border-primary-purple bg-primary-purple/10'
                        : 'border-gray-200',
                    ]"
                    @click="selectPriceOption(39)"
                  >
                    <div class="font-zodiak font-semibold">R$ 39</div>
                    <div class="font-jakarta text-xs text-gray-500">Básico</div>
                  </button>
                  <button
                    type="button"
                    :class="[
                      'bg-white border-2 p-3 rounded-[16px] text-center hover:border-primary-purple hover:bg-primary-purple/5 transition-all duration-200',
                      form.suggestedPrice == 79
                        ? 'border-primary-purple bg-primary-purple/10'
                        : 'border-gray-200',
                    ]"
                    @click="selectPriceOption(79)"
                  >
                    <div class="font-zodiak font-semibold">R$ 79</div>
                    <div class="font-jakarta text-xs text-gray-500">Médio</div>
                  </button>
                  <button
                    type="button"
                    :class="[
                      'bg-white border-2 p-3 rounded-[16px] text-center hover:border-primary-purple hover:bg-primary-purple/5 transition-all duration-200',
                      form.suggestedPrice == 129
                        ? 'border-primary-purple bg-primary-purple/10'
                        : 'border-gray-200',
                    ]"
                    @click="selectPriceOption(129)"
                  >
                    <div class="font-zodiak font-semibold">R$ 129</div>
                    <div class="font-jakarta text-xs text-gray-500">Premium</div>
                  </button>
                  <button
                    type="button"
                    :class="[
                      'bg-white border-2 p-3 rounded-[16px] text-center hover:border-primary-purple hover:bg-primary-purple/5 transition-all duration-200',
                      showCustomPrice
                        ? 'border-primary-purple bg-primary-purple/10'
                        : 'border-gray-200',
                    ]"
                    @click="showCustomPrice = !showCustomPrice"
                  >
                    <div class="font-zodiak font-semibold">Outro</div>
                    <div class="font-jakarta text-xs text-gray-500">Valor</div>
                  </button>
                </div>

                <!-- Custom Price Field -->
                <div v-if="showCustomPrice" class="mb-4">
                  <input
                    v-model="form.customPrice"
                    type="number"
                    placeholder="Quanto você pagaria?"
                    class="w-full p-3 border border-gray-200 rounded-[16px] focus:ring-2 focus:ring-primary-purple font-jakarta"
                  />
                </div>
              </div>

              <!-- Price Reasoning -->
              <div>
                <label class="block font-jakarta text-sm font-medium text-gray-700 mb-2">
                  Por que escolheu esse valor? (opcional)
                </label>
                <textarea
                  v-model="form.priceReasoning"
                  rows="3"
                  placeholder="Ex: 'Esse valor compensaria parar de pagar 20% de comissão...'"
                  class="w-full p-3 border border-gray-200 rounded-[16px] focus:ring-2 focus:ring-primary-purple focus:border-transparent font-jakarta"
                />
              </div>

              <!-- Important Features -->
              <div>
                <label class="block font-jakarta text-sm font-medium text-gray-700 mb-3">
                  Quais funcionalidades são mais importantes? (marque até 3)
                </label>
                <div class="grid md:grid-cols-2 gap-2">
                  <label class="flex items-center font-jakarta">
                    <input
                      v-model="form.importantFeatures"
                      type="checkbox"
                      value="custom_domain"
                      class="mr-2 text-primary-purple"
                    />
                    <span class="text-sm">Domínio personalizado (.psy.br)</span>
                  </label>
                  <label class="flex items-center font-jakarta">
                    <input
                      v-model="form.importantFeatures"
                      type="checkbox"
                      value="scheduling"
                      class="mr-2 text-primary-purple"
                    />
                    <span class="text-sm">Agendamento automático</span>
                  </label>
                  <label class="flex items-center font-jakarta">
                    <input
                      v-model="form.importantFeatures"
                      type="checkbox"
                      value="payments"
                      class="mr-2 text-primary-purple"
                    />
                    <span class="text-sm">Pagamentos integrados</span>
                  </label>
                  <label class="flex items-center font-jakarta">
                    <input
                      v-model="form.importantFeatures"
                      type="checkbox"
                      value="branding"
                      class="mr-2 text-primary-purple"
                    />
                    <span class="text-sm">Personalização visual</span>
                  </label>
                  <label class="flex items-center font-jakarta">
                    <input
                      v-model="form.importantFeatures"
                      type="checkbox"
                      value="analytics"
                      class="mr-2 text-primary-purple"
                    />
                    <span class="text-sm">Relatórios e métricas</span>
                  </label>
                </div>
              </div>

              <!-- Beta Interest -->
              <div class="bg-blue-50 p-4 rounded-[16px] border border-blue-100">
                <label class="flex items-center font-jakarta">
                  <input
                    v-model="form.betaInterest"
                    type="checkbox"
                    class="mr-3 text-primary-purple"
                  />
                  <span class="font-medium text-blue-800">
                    Quero participar do teste beta gratuito (30 dias)
                  </span>
                </label>
              </div>

              <!-- Submit Button -->
              <div class="text-center pt-4">
                <button
                  type="submit"
                  class="bg-gradient-to-r from-primary-purple to-pink-600 text-white px-8 py-4 rounded-[16px] font-zodiak font-semibold text-lg hover:from-primary-purple/90 hover:to-pink-600/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  🚀 Enviar Sugestão + Entrar na Waitlist
                </button>

                <p class="font-jakarta text-sm text-gray-500 mt-3">
                  Seus dados serão usados apenas para desenvolvimento do produto e contato sobre o
                  lançamento
                </p>
              </div>
            </form>
          </div>

          <!-- Incentives -->
          <div class="text-center mt-8 space-y-4">
            <div class="bg-white/60 backdrop-blur-sm rounded-[20px] p-6 border border-white/50">
              <h3 class="font-zodiak font-semibold text-gray-800 mb-2">
                🎁 Por participar, você ganha:
              </h3>
              <div class="grid md:grid-cols-3 gap-4 font-jakarta text-sm">
                <div>✅ 50% desconto nos primeiros 6 meses</div>
                <div>✅ Setup personalizado gratuito</div>
                <div>✅ Subdomínio premium garantido</div>
              </div>
            </div>

            <p class="font-jakarta text-gray-600">
              👥
              <strong>127 psicólogos</strong>
              já participaram da pesquisa
            </p>
          </div>

          <!-- Success State -->
          <div v-if="showSuccess" class="text-center py-12">
            <div class="text-6xl mb-4">🎉</div>
            <h2 class="font-zodiak text-2xl font-bold text-gray-800 mb-4">
              Obrigado pela sua participação!
            </h2>
            <p class="font-jakarta text-gray-600 mb-6">
              Sua opinião é fundamental para criarmos a solução ideal.
            </p>
            <div class="bg-green-50 border border-green-200 rounded-[16px] p-4">
              <p class="font-jakarta text-green-800 font-medium">
                ✅ Você foi adicionado à nossa waitlist
              </p>
              <p class="font-jakarta text-green-700 text-sm mt-1">
                Entraremos em contato em breve com novidades exclusivas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const showCustomPrice = ref(false)
const showSuccess = ref(false)

const form = reactive({
  name: '',
  email: '',
  specialty: '',
  sessionsMonth: '',
  sessionValue: '',
  currentPlatform: '',
  suggestedPrice: 50,
  customPrice: '',
  priceReasoning: '',
  importantFeatures: [],
  betaInterest: false,
})

const closeModal = () => {
  emit('close')
}

const selectPriceOption = price => {
  form.suggestedPrice = price
  showCustomPrice.value = false
}

const submitForm = async () => {
  try {
    console.log('Form submitted:', form)

    // Send email using nuxt-mail
    const { $mail } = useNuxtApp()

    const emailSubject = `Nova Sugestão de Preço - ${form.name}`
    const emailBody = `
      <h2>Nova sugestão de preço recebida</h2>

      <h3>Dados Pessoais</h3>
      <p><strong>Nome:</strong> ${form.name}</p>
      <p><strong>Email:</strong> ${form.email}</p>
      <p><strong>Especialidade:</strong> ${form.specialty}</p>

      <h3>Contexto Atual</h3>
      <p><strong>Consultas por mês:</strong> ${form.sessionsMonth}</p>
      <p><strong>Valor médio por consulta:</strong> ${form.sessionValue}</p>
      <p><strong>Como atende hoje:</strong> ${form.currentPlatform}</p>

      <h3>Sugestão de Preço</h3>
      <p><strong>Valor sugerido:</strong> R$ ${form.customPrice || form.suggestedPrice}/mês</p>
      ${form.priceReasoning ? `<p><strong>Justificativa:</strong> ${form.priceReasoning}</p>` : ''}

      <h3>Funcionalidades Importantes</h3>
      <ul>
        ${form.importantFeatures.map(feature => `<li>${feature}</li>`).join('')}
      </ul>

      <h3>Interesse em Beta</h3>
      <p>${form.betaInterest ? 'SIM - Quer participar do beta' : 'NÃO - Não tem interesse no beta'}</p>

      <hr>
      <p><small>Enviado em: ${new Date().toLocaleString('pt-BR')}</small></p>
    `

    await $mail.send({
      from: `"Treepsy - Nova Sugestão" <${form.email}>`,
      to: 'miraisoft.co@gmail.com',
      subject: emailSubject,
      html: emailBody,
    })

    showSuccess.value = true
    console.log('Email sent successfully')

    setTimeout(() => {
      closeModal()
      showSuccess.value = false
      // Reset form
      Object.keys(form).forEach(key => {
        if (Array.isArray(form[key])) {
          form[key] = []
        } else if (typeof form[key] === 'boolean') {
          form[key] = false
        } else if (typeof form[key] === 'number') {
          form[key] = key === 'suggestedPrice' ? 50 : 0
        } else {
          form[key] = ''
        }
      })
    }, 3000)

  } catch (error) {
    console.error('Error sending email:', error)
    // Still show success to user, but log the error
    showSuccess.value = true

    setTimeout(() => {
      closeModal()
      showSuccess.value = false
      // Reset form
      Object.keys(form).forEach(key => {
        if (Array.isArray(form[key])) {
          form[key] = []
        } else if (typeof form[key] === 'boolean') {
          form[key] = false
        } else if (typeof form[key] === 'number') {
          form[key] = key === 'suggestedPrice' ? 50 : 0
        } else {
          form[key] = ''
        }
      })
    }, 3000)
  }
}
</script>

<style scoped>
.price-slider {
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  border-radius: 4px;
  outline: none;
}

.price-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #6366f1;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.price-slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #6366f1;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
</style>
