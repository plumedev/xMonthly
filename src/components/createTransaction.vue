<template>
  <div>
    <h2>Nouvelle transaction</h2>
    <form id="createTransaction" @submit.prevent="handleSubmit">
      <div>
        <label>
          Nom:
          <input type="text" v-model="transaction.label" />
          <span v-if="!transaction.label && showError" class="error"
            >Veuillez entrer un nom de transaction</span
          >
        </label>
        <label>
          Date:
          <input type="date" v-model="transaction.date" />
          <span v-if="!transaction.date && showError" class="error"
            >Veuillez entrer une date</span
          >
        </label>
        <label>
          Montant:
          <input type="number" v-model="transaction.amount" />
          <span v-if="!transaction.amount && showError" class="error"
            >Veuillez entrer un montant</span
          >
        </label>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store, { Transaction } from "@/store/index";
import { useStore } from "vuex";

export default defineComponent({
  name: "createTransaction",
  data() {
    return {
      showError: false,
      transaction: {
        label: "",
        date: "",
        amount: 0,
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
    handleSubmit(): void {
      if (
        this.transaction.label &&
        this.transaction.date &&
        this.transaction.amount
      ) {
        store.commit("addTransaction", this.transaction);
        this.saveTransactionsToLocalstorage;
        this.transaction = {
          label: "",
          date: "",
          amount: 0,
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
</script>
