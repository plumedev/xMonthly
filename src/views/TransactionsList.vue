<template>
  <h2>Historique de transaction</h2>
  <div id="transactions-list">
    <aside class="column-label">
      <h3>Label</h3>
      <h3>Date</h3>
      <h3>Montant</h3>
    </aside>
    <ul>
      <li v-for="transaction in formattedTransactions" :key="transaction.label">
        <div class="label">{{ transaction.label }}</div>
        <div class="date">{{ transaction.formattedDate }}</div>
        <div class="amount">{{ transaction.amount }}€</div>
      </li>
    </ul>
  </div>
  <createTransaction />
</template>

<script lang="ts">
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import moment from "moment";
import createTransaction from "@/components/createTransaction.vue";
export default {
  components: {
    createTransaction,
  },
  computed: {
    ...mapState(["transactions"]),
    ...mapGetters(["formattedTransactions"]),
  },
};
</script>
<style lang="scss">
@import "@/scss/TransactionItem.scss";
@import "@/scss/TransactionList.scss";
</style>
