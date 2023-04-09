<template>
  <div id="dashboard-global">
    <MonthSelector />
    <CreateExpenses />
    <ListExpenses />
  </div>
</template>

<script lang="ts">
import MonthSelector from "@/components/MonthSelector/MonthSelector.vue";
import ListExpenses from "@/components/ListExpenses/ListExpenses.vue";
import CreateExpenses from "@/components/CreateExpenses/CreateExpenses.vue";

export default {
  name: "dashboard-global",
  components: {
    MonthSelector,
    ListExpenses,
    CreateExpenses,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/views/DashboardGlobal.scss";
</style>
