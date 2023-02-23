import { createStore } from "vuex";
import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

export interface Transaction {
  label: string;
  date: Date;
  amount: number;
  id: string;
}

export interface Revenue {
  label: string;
  amount: number;
}

const store = createStore({
  state: {
    transactions: [] as Transaction[],
    revenues: [] as Revenue[],
    monthlyExpenses: 0,
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
    totalExpenses(state) {
      // reduce sur le [] transactions du store
      return state.transactions.reduce(
        // (total (variable déclarée), transacton (key) ==> logique à appliquer)
        (total, transaction) => total + transaction.amount,
        0
      );
    },
    getRevenues(state) {
      return state.revenues.map((revenue) => {
        return {
          ...revenue,
        };
      });
    },
  },
  mutations: {
    // Methods about Transactions
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
    deleteTransaction(state, id: string) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== id
      );
    },
    // Methods about Revenues
    addRevenue(state, revenue: Revenue) {
      state.revenues.push(revenue);
    },
    setRevenues(state, revenue: Revenue[]) {
      state.revenues = revenue;
    },
    deleteRevenue(state, label: string) {
      state.revenues = state.revenues.filter(
        (revenue) => revenue.label !== label
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
    // récupération des transactions dans le local storage via la clé "transactions"
    retrieveRevenuesFromLocalStorage({ commit }) {
      const revenues = JSON.parse(
        // conversion de la valeur en array JS
        localStorage.getItem("revenues") || "[]"
      );
      commit("setRevenues", revenues); // commit des Revenues récupérés
    },
    // Génère un ID
    generateUniqueId(): string {
      const timestamp = Date.now();
      const random = Math.floor(Math.random() * 1000);
      return `${timestamp}-${random}`;
    },
  },
  modules: {},
});

// Appelle l'action pour récupérer les transactions stockées dans le local storage
store.dispatch("retrieveTransactionsFromLocalStorage");
// Appelle l'action pour récupérer les Revenues stockés dans le local storage
store.dispatch("retrieveRevenuesFromLocalStorage");
export default store;
