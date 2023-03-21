<template>
  <div class="heading">
    <h2>Mes dépenses récurrentes</h2>
  </div>
  <div>
    <form id="createTransaction" @submit.prevent="handleSubmit">
      <div class="input-group">
        <label>
          <font-awesome-icon :icon="['fa', 'tag']" class="input-icon" />
        </label>
        <input type="text" placeholder="Label" v-model="transaction.label" />
        <span v-if="!transaction.label && showError" class="error"
          >Veuillez entrer un nom de dépense</span
        >
      </div>
      <div class="input-group">
        <label>
          <font-awesome-icon :icon="['fa', 'calendar']" class="input-icon" />
        </label>
        <input type="date" placeholder="Date" v-model="transaction.date" />
        <span v-if="!transaction.date && showError" class="error"
          >Veuillez entrer une date</span
        >
      </div>
      <div class="input-group">
        <label>
          <font-awesome-icon :icon="['fa', 'euro-sign']" class="input-icon" />
        </label>
        <input
          type="number"
          step="any"
          placeholder="Montant"
          v-model="transaction.amount"
        />
        <span v-if="!transaction.amount && showError" class="error"
          >Veuillez entrer un montant</span
        >
      </div>
      <button class="btn green icon text" type="submit">
        <font-awesome-icon :icon="['fa', 'plus']" />
        Ajouter
      </button>
    </form>
  </div>
</template>

<script lang="ts">
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
  name: "createTransaction",
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
</script>
