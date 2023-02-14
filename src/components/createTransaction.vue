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
import store from "@/store/index";

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
  computed: {},
  methods: {
    handleSubmit(): void {
      if (
        this.transaction.label &&
        this.transaction.date &&
        this.transaction.amount
      ) {
        store.commit("addTransaction", this.transaction);
        this.transaction = {
          label: "",
          date: "",
          amount: 0,
        };
        console.log("dans le if");
        this.showError = false;
      } else {
        this.showError = true;
        console.log("dans le else");
      }
    },
  },
});
</script>
