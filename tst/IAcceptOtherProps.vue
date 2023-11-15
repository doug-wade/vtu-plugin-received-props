<template>
  <div>
    <div>Consumed prop two: {{ two }}</div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps(['two']);
</script>
