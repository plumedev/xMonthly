<template>
  <div class="box">
    <MonthSelector />
    <p>
      Revenus: <b>{{ monthlyRevenues }}€</b>
    </p>
    <div class="stat-group">
      <div class="stat-bar">
        <div
          class="stat-value"
          :style="{ width: `${monthlyFeesPercentage}%` }"
        ></div>
      </div>
      <div class="stat-details">
        <span class="value"
          >{{ monthlyExpenses }}€ de dépenses fixes ({{
            monthlyFeesPercentage
          }}%)</span
        >
        <span class="percentage">{{ monthlyRevenues }}€</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { mapGetters } from "vuex";
import MonthSelector from "./MonthSelector.vue";

dayjs.locale("fr");

export default {
  name: "TransactionsOverview",
  components: {
    MonthSelector,
  },
  data(): { currentMonth: string } {
    return {
      currentMonth: dayjs().format("MMMM YYYY"),
    };
  },
  computed: {
    // La méthode mapGetters retourne un objet qui peut être étendu directement dans la section computed du composant en utilisant l'opérateur spread .... Cela signifie que les propriétés de l'objet retourné par mapGetters sont ajoutées directement dans l'objet computed du composant, en leur donnant le même nom que leur nom d'origine dans le store.
    ...mapGetters(["totalExpenses", "totalRevenues", "expensesPercentage"]),
    // Fonction monthlyExpenses() qui récupère totalExpenses mappé juste avant
    monthlyExpenses() {
      return this.totalExpenses;
    },
    monthlyRevenues() {
      return this.totalRevenues;
    },
    monthlyFeesPercentage() {
      return this.expensesPercentage;
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/createTransaction.scss";
@import "@/scss/TransactionList.scss";
@import "@/scss/TransactionsOverview.scss";
</style>
