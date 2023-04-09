import { defineComponent } from "vue";
import { mapActions } from "vuex";
import store, { Transaction } from "@/store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faTag, faCalendar, faEuroSign);

export default defineComponent({
  name: "CreateExpenses",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      showError: false,
      transaction: {
        label: "",
        date: "",
        amount: 0,
        id: "",
      },
    };
  },
  computed: {
    saveTransactionsToLocalstorage(): Transaction[] {
      const transactions = store.state.transactions;
      localStorage.setItem("transactions", JSON.stringify(transactions));
      return transactions;
    },
  },
  methods: {
    ...mapActions(["generateUniqueId"]),
    async handleSubmit(): Promise<void> {
      if (
        this.transaction.label &&
        this.transaction.date &&
        this.transaction.amount
      ) {
        this.transaction.id = await this.generateUniqueId();
        store.commit("addTransaction", this.transaction);
        this.saveTransactionsToLocalstorage;
        this.transaction = {
          label: "",
          date: "",
          amount: 0,
          id: "",
        };
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
    deletedTransaction(): void {
      store.commit("deleteTransaction", this.transaction);
    },
  },
});
