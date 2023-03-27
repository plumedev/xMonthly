<template>
  <div id="dashboard-global">
    <MonthSelector />
    <MonthlyOverview />
    <AnnuelOverview />
  </div>
</template>

<script lang="ts">
import MonthSelector from "@/components/MonthSelector.vue";
import MonthlyOverview from "@/components/MonthlyOverview.vue";
import AnnuelOverview from "@/components/AnnuelOverview.vue";

export default {
  name: "dashboard-global",
  components: {
    MonthSelector,
    MonthlyOverview,
    AnnuelOverview,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/views/DashboardGlobal.scss";
</style>
