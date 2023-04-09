<template>
  <div class="box">
    <h2>Vue annuelle</h2>
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
