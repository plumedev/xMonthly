import { createStore } from "vuex";
import moment from "moment";

export interface Transaction {
  label: string;
  date: Date;
  amount: number;
}

const transactions = [
  // eslint-disable-next-line
  { label: "Billets d'avion Vienne", date: new Date(), amount: 100 },
  { label: "Bague chat", date: new Date(), amount: 200 },
  { label: "Transaction 3", date: new Date(), amount: 300 },
];

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
  actions: {},
  modules: {},
});

transactions.forEach((transaction) => {
  store.commit("addTransaction", transaction);
});

export default store;
