<template>
  <div id="dashboard-global">
    <MonthSelector />
    <CreateRevenues />
    <ListRevenues />
  </div>
</template>

<script lang="ts">
import MonthSelector from "@/components/MonthSelector/MonthSelector.vue";
import ListRevenues from "@/components/ListRevenues/ListRevenues.vue";
import CreateRevenues from "@/components/CreateRevenues/CreateRevenues.vue";

export default {
  name: "dashboard-global",
  components: {
    MonthSelector,
    ListRevenues,
    CreateRevenues,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/views/DashboardGlobal.scss";
</style>
