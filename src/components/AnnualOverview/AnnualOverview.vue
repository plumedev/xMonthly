<template>
  <div class="box">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script lang="ts">
import annualOverview from "../AnnualOverview/AnnualOverview";
export default annualOverview;
</script>

<style lang="scss">
@import "./AnnualOverview.scss";
</style>
