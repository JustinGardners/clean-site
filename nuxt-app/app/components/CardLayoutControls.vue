<script setup lang="ts">
import { ref } from 'vue'

const topRow = ref(50)
const leftCol = ref(50)
</script>

<template>
  <div
    class="card-layout-controls"
    :style="{
      '--card-controls-top-row': `${topRow}%`,
      '--card-controls-left-col': `${leftCol}%`
    }"
  >
    <div class="card-layout-controls__inputs">
      <label class="card-layout-controls__input card-layout-controls__input--row">
        <span>Top row: {{ topRow }}%</span>
        <input v-model.number="topRow" type="range" min="20" max="80" step="10" :aria-valuetext="`${topRow}%`" />
      </label>
      <label class="card-layout-controls__input card-layout-controls__input--col">
        <span>Left column: {{ leftCol }}%</span>
        <input v-model.number="leftCol" type="range" min="20" max="80" step="10" :aria-valuetext="`${leftCol}%`" />
      </label>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.card-layout-controls {
  container: card-layout-controls / inline-size;
  min-inline-size: 0;
}

/* Apply directly to the card so its own defaults cannot mask inherited values. */
.card-layout-controls :deep(.card) {
  --card-top-row: var(--card-controls-top-row);
  --card-left-col: var(--card-controls-left-col);
}

.card-layout-controls__input {
  display: none;
  gap: 0.5rem;
  margin-block-end: 1rem;
}

.card-layout-controls__input input {
  inline-size: 100%;
}

@container card-layout-controls (inline-size < 80ch) {
  .card-layout-controls__input--row {
    display: grid;
  }
}

@container card-layout-controls (inline-size > 80ch) {
  .card-layout-controls__input--col {
    display: grid;
  }
}
</style>
