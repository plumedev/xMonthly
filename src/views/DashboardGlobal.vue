<template>
  <div id="dashboard-global">
    <MonthSelector />
    <MonthlyOverview />
    <annualOverview />
  </div>
</template>

<script lang="ts">
import MonthSelector from "@/components/MonthSelector/MonthSelector.vue";
import MonthlyOverview from "@/components/MonthlyOverview/MonthlyOverview.vue";
import annualOverview from "@/components/AnnualOverview/AnnualOverview.vue";

export default {
  name: "dashboard-global",
  components: {
    MonthSelector,
    MonthlyOverview,
    annualOverview,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/views/DashboardGlobal.scss";
</style>
