import { createStore } from "vuex";
import dayjs from "dayjs";
import "dayjs/locale/fr";

dayjs.locale("fr");

export interface Transaction {
  label: string;
  date: Date;
  amount: number;
  id: string;
}

export interface Revenue {
  label: string;
  amount: number;
  id: string;
  date: Date;
}

const store = createStore({
  state: {
    transactions: [] as Transaction[],
    revenues: [] as Revenue[],
    monthlyExpenses: 0,
    activeMonth: dayjs(),
  },
  getters: {
    formattedTransactions(state) {
      return state.transactions.map((transaction) => {
        return {
          ...transaction,
          formattedDate: dayjs(transaction.date).format("DD MMM"),
        };
      });
    },
    transactionsOfMonth: (state) => {
      const currentMonth = state.activeMonth.month();
      const currentYear = state.activeMonth.year();

      return state.transactions
        .filter(
          (transaction) =>
            dayjs(transaction.date).month() === currentMonth &&
            dayjs(transaction.date).year() === currentYear
        )
        .map((transaction) => {
          return {
            ...transaction,
            formattedDate: dayjs(transaction.date).format("DD MMM"),
          };
        });
    },
    revenueOfMonth: (state) => {
      const currentMonth = state.activeMonth.month();
      const currentYear = state.activeMonth.year();
      return state.revenues
        .filter(
          (revenue) =>
            dayjs(revenue.date).month() === currentMonth &&
            dayjs(revenue.date).year() === currentYear
        )
        .map((revenue) => {
          return {
            ...revenue,
          };
        });
    },
    totalExpenses(state) {
      const currentMonth = dayjs().month();
      const currentYear = dayjs().year();

      // reduce sur le [] transactions du store où l'on filtre pour le mois en cours
      const monthlyExpenses = state.transactions.filter(
        (transaction) =>
          dayjs(transaction.date).month() === currentMonth &&
          dayjs(transaction.date).year() === currentYear
      );

      return Math.round(
        monthlyExpenses.reduce(
          // (total (variable déclarée), transacton (key) ==> logique à appliquer)
          (total, transaction) => total + transaction.amount,
          0
        )
      );
    },
    totalRevenues(state) {
      // reduce sur le [] revenues du store
      return Math.round(
        state.revenues.reduce(
          // (total (variable déclarée), transacton (key) ==> logique à appliquer)
          (total, revenue) => total + revenue.amount,
          0
        )
      );
    },
    getRevenues(state) {
      return state.revenues.map((revenue) => {
        return {
          ...revenue,
        };
      });
    },
    expensesPercentage(state, getters): number {
      const totalRevenues = getters.totalMonthlyRevenues;
      const totalExpenses = getters.totalMonthlyExpenses;
      return Math.round((totalExpenses * 100) / totalRevenues);
    },
    availablePercentage(state, getters) {
      const totalRevenues = getters.totalMonthlyRevenues;
      const totalExpenses = getters.totalMonthlyExpenses;
      const availablePercentage =
        ((totalRevenues - totalExpenses) * 100) / totalRevenues;
      return availablePercentage;
    },
    availableAmount(state, getters) {
      const totalRevenues = getters.totalMonthlyRevenues;
      const totalExpenses = getters.totalMonthlyExpenses;
      const availableAmount = totalRevenues - totalExpenses;
      return availableAmount;
    },
    getActiveMonth(state) {
      return state.activeMonth;
    },
    totalMonthlyRevenues(state, getters) {
      const totalMonthlyRevenues = getters.revenueOfMonth;

      return totalMonthlyRevenues.reduce(
        // (total (variable déclarée), transacton (key) ==> logique à appliquer)
        (total: number, revenue: { amount: number }) => total + revenue.amount,
        0
      );
    },
    totalMonthlyExpenses(state, getters) {
      const totalMonthlyExpenses = getters.transactionsOfMonth;

      return totalMonthlyExpenses.reduce(
        // (total (variable déclarée), transacton (key) ==> logique à appliquer)
        (total: number, revenue: { amount: number }) => total + revenue.amount,
        0
      );
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
    deleteRevenue(state, id: string) {
      state.revenues = state.revenues.filter((revenue) => revenue.id !== id);
    },
    setActiveMonth(state, newMonth) {
      state.activeMonth = newMonth;
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
