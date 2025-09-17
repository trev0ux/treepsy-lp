<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    :width="width"
    :height="height"
    :class="{ 'rotate-180': direction === 'left' }"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: '24'
    },
    height: {
      type: [String, Number],
      default: '24'
    },
    direction: {
      type: String,
      default: 'right',
      validator: (value) => ['left', 'right'].includes(value)
    }
  }
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>