<template>
  <div>
    <h2>Nouvelle transaction</h2>
    <form id="createTransaction" @submit.prevent="handleSubmit">
      <div>
        <label>
          Nom:
          <input type="text" v-model="transaction.label" />
          <span v-if="!transaction.label && showError"
            >Veuillez entrer un nom</span
          >
        </label>
        <label>
          Date:
          <input type="text" v-model="transaction.date" />
          <span v-if="!transaction.label && showError"
            >Veuillez entrer une date</span
          >
        </label>
        <label>
          Montant:
          <input type="number" v-model="transaction.amount" />
          <span v-if="!transaction.label && showError"
            >Veuillez entrer un montant</span
          >
        </label>
      </div>
      <button
        type="submit"
        :disabled="
          !transaction.label || !transaction.date || !transaction.amount
        "
      >
        Ajouter
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";

export default {
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
  methods: {
    ...mapMutations(["addTransaction"]),
    handleSubmit() {
      if (
        !this.transaction.label ||
        !this.transaction.date ||
        !this.transaction.amount
      ) {
        this.showError = true;
        return;
      } else {
        this.addTransaction(this.transaction);
        this.transaction = { label: "", date: "", amount: 0 };
        this.showError = false;
      }
    },
  },
};
</script>
<style lang="scss"></style>
