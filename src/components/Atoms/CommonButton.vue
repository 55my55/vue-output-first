<script setup lang="ts">
const props = defineProps<{
  label?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}>()

const buttonType = props.type ?? 'button'
const handleClick = props.onClick ?? (() => {})
</script>

<template>
  <button class="button" :type="buttonType" @click="handleClick">
    {{ props.label ?? 'Button' }}
  </button>
</template>

<style scoped>
.button {
  display: block;
  width: 100%;
  background-color: #ff9900;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  appearance: none;
  border-radius: 10px;
  transition: 0.3s;
}

.button:hover {
  background-color: #d87e00;
}
</style>
