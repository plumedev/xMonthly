<template>
  <div class="monthSelector">
    <button class="icon-only decrementMonth" @click="decrementMonth">
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
    </button>
    <h4 class="activeMonth">{{ displayActiveMonth() }}</h4>
    <button class="icon-only incrementMonth" @click="incrementMonth">
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </button>
  </div>
</template>

<script lang="ts">
import MonthSelector from "./MonthSelector";
export default MonthSelector;
</script>

<style lang="scss" scoped>
@import "./MonthSelector.scss";
</style>
