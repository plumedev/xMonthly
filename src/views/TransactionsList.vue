<template>
  <TransactionsOverview />
  <createTransaction />
  <div id="transactions-list" class="box">
    <div class="table">
      <aside class="table-head">
        <h5>Label</h5>
        <h5>Date</h5>
        <h5>Montant</h5>
        <h5></h5>
      </aside>
      <ul class="table-content">
        <li
          v-for="transaction in formattedTransactions"
          :key="transaction.label"
        >
          <div class="label">{{ transaction.label }}</div>
          <div class="date">{{ transaction.formattedDate }}</div>
          <div class="amount">{{ transaction.amount }}€</div>
          <div class="remove-transaction">
            <button
              class="remove"
              :class="{ hover: hover }"
              @click="deleteTransaction(transaction.label)"
              @mouseover="hover = true"
              @mouseleave="hover = false"
            >
              <font-awesome-icon :icon="['far', 'fa-square-minus']" />
              <font-awesome-icon :icon="['fas', 'square-minus']" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store/index";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSquareMinus as fasSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus as farSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import createTransaction from "@/components/createTransaction.vue";
import TransactionsOverview from "@/components/TransactionsOverview.vue";

library.add(fasSquareMinus, farSquareMinus, faPlus);

export default {
  data() {
    return {
      hover: false,
    };
  },
  components: {
    createTransaction,
    FontAwesomeIcon,
    TransactionsOverview,
  },
  computed: {
    ...mapState(["transactions"]),
    ...mapGetters(["formattedTransactions"]),
  },
  methods: {
    deleteTransaction(label: string): void {
      store.commit("deleteTransaction", label);
      this.saveTransactionsToLocalstorage();
    },
    saveTransactionsToLocalstorage() {
      const transactions = store.state.transactions;
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    },
  },
};
</script>
<style lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/createTransaction.scss";
@import "@/scss/TransactionList.scss";
</style>
