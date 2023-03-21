<template>
  <div id="dashboard-global">
    <MonthSelector />
    <MonthlyOverview />
  </div>
</template>

<script lang="ts">
import MonthSelector from "@/components/MonthSelector.vue";
import MonthlyOverview from "@/components/MonthlyOverview.vue";

export default {
  name: "dashboard-global",
  components: {
    MonthSelector,
    MonthlyOverview,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/views/DashboardGlobal.scss";
</style>
