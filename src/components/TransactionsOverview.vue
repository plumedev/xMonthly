<template>
  <div class="heading">
    <h2>Mon budget</h2>
  </div>
  <div class="box">
    <h4>{{ currentMonth }}</h4>
    <p>Revenus: <b>1850€</b></p>
    <div class="stat-group">
      <div class="stat-bar">
        <div
          class="stat-value"
          :style="{ width: `${monthlyExpenses}px` }"
        ></div>
      </div>
      <div class="stat-details">
        <span class="value">{{ monthlyExpenses }}€ de dépenses fixes</span>
        <span class="percentage">{{ monthlyExpenses }}€</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import "moment/locale/fr";
import { mapGetters } from "vuex";

moment.locale("fr");

export default {
  name: "TransactionsOverview",
  data(): { currentMonth: string } {
    return {
      currentMonth: moment().format("MMMM YYYY"),
    };
  },
  computed: {
    // La méthode mapGetters retourne un objet qui peut être étendu directement dans la section computed du composant en utilisant l'opérateur spread .... Cela signifie que les propriétés de l'objet retourné par mapGetters sont ajoutées directement dans l'objet computed du composant, en leur donnant le même nom que leur nom d'origine dans le store.
    ...mapGetters(["totalExpenses"]),
    // Fonction monthlyExpenses() qui récupère totalExpenses mappé juste avant
    monthlyExpenses() {
      return this.totalExpenses;
    },
  },
};
</script>
<style lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/createTransaction.scss";
@import "@/scss/TransactionList.scss";
@import "@/scss/TransactionsOverview.scss";
</style>
