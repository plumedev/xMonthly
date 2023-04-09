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
