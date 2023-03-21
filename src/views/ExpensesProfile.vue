<template>
  <div class="expenses-profile">
    <h1>Mon profil</h1>
    <MonthSelector />
    <SetRevenues />
    <ListRevenues />
  </div>
</template>

<script lang="ts">
import SetRevenues from "@/components/SetRevenues.vue";
import ListRevenues from "@/components/ListRevenues.vue";
import MonthSelector from "@/components/MonthSelector.vue";

export default {
  name: "ExpensesProfile",
  components: {
    SetRevenues,
    ListRevenues,
    MonthSelector,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
