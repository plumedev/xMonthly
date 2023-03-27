<template>
  <div>
    <div id="transactions-list" class="box">
      <div class="table">
        <aside class="table-head">
          <h5>Label</h5>
          <h5 @click="sortTransactionByDate()">
            Date
            <font-awesome-icon
              v-show="sortBy"
              :icon="['fas', 'arrow-up-wide-short']"
              class="cursor"
            />
            <font-awesome-icon
              v-show="!sortBy"
              :icon="['fas', 'arrow-up-short-wide']"
              class="cursor"
            />
          </h5>
          <h5>Montant</h5>
          <h5></h5>
        </aside>
        <ul class="table-content">
          <li
            v-for="transaction in transactionsOfMonth"
            :key="transaction.label"
          >
            <div class="label">{{ transaction.label }}</div>
            <div class="date">{{ transaction.formattedDate }}</div>
            <div class="amount">{{ transaction.amount }}€</div>
            <div class="remove-transaction">
              <button
                class="remove"
                :class="{ hover: hover }"
                @click="deleteTransaction(transaction.id)"
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
  </div>
</template>

<script lang="ts">
import store, { Transaction } from "@/store/index";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUpWideShort } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpShortWide } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus as fasSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus as farSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { defineComponent } from "vue";

library.add(
  faPlus,
  faArrowUpWideShort,
  faArrowUpShortWide,
  fasSquareMinus,
  farSquareMinus
);

export default defineComponent({
  data() {
    return {
      hover: false,
      sortBy: false,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {
    ...mapState(["transactions"]),
    ...mapGetters([
      "formattedTransactions",
      "transactionsOfMonth",
      "getActiveMonth",
    ]),
  },
  methods: {
    deleteTransaction(id: string): void {
      store.commit("deleteTransaction", id);
      this.saveTransactionsToLocalstorage();
    },
    saveTransactionsToLocalstorage() {
      const transactions = store.state.transactions;
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    },
    sortTransactionByDate() {
      this.sortBy = !this.sortBy;
      const transactions = store.state.transactions;
      transactions.sort((a: Transaction, b: Transaction) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        if (this.sortBy) {
          return dateB - dateA;
        } else {
          return dateA - dateB;
        }
      });
    },
    displayActiveMonth() {
      const activeMonth = store.state.activeMonth;
      return activeMonth;
    },
  },
});
</script>
<style lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/components/ListExpenses.scss";
</style>
