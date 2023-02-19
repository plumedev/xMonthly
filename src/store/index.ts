import { createStore } from "vuex";
import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

export interface Transaction {
  label: string;
  date: Date;
  amount: number;
}

const store = createStore({
  state: {
    transactions: [] as Transaction[],
  },
  getters: {
    formattedTransactions(state) {
      return state.transactions.map((transaction) => {
        return {
          ...transaction,
          formattedDate: moment(transaction.date).format("DD MMM"),
        };
      });
    },
  },
  mutations: {
    setTransactions(state, transactions: Transaction[]) {
      state.transactions = transactions;
    },
    addTransaction(state, transaction: Transaction) {
      state.transactions.push(transaction);
    },
    updateTransaction(state, updatedTransaction: Transaction) {
      const index = state.transactions.findIndex(
        (transaction) => transaction.label === updatedTransaction.label
      );
      state.transactions[index] = updatedTransaction;
    },
    deleteTransaction(state, label: string) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.label !== label
      );
    },
  },
  actions: {
    // récupération des transactions dans le local storage via la clé "transactions"
    retrieveTransactionsFromLocalStorage({ commit }) {
      const transactions = JSON.parse(
        // conversion de la valeur en array JS
        localStorage.getItem("transactions") || "[]"
      );
      commit("setTransactions", transactions); // commit des transactions récupérées
    },
  },
  modules: {},
});

// Appelle l'action pour récupérer les transactions stockées dans le local storage
store.dispatch("retrieveTransactionsFromLocalStorage");

export default store;
