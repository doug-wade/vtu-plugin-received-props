<template>
  <i-accept-other-props>
    <p>Consumed prop one: {{ one }}</p>
  </i-accept-other-props>
</template>

<script setup>
import IAcceptOtherProps from './IAcceptOtherProps.vue';

defineProps(['one']);
</script>
