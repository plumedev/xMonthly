<template>
  <div class="expenses-profile">
    <h1>Mon profil</h1>
    <SetRevenues />
  </div>
</template>

<script lang="ts">
import SetRevenues from "@/components/SetRevenues.vue";

export default {
  name: "ExpensesProfile",
  components: {
    SetRevenues,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
