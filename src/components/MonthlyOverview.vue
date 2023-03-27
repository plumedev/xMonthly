<template>
  <button class="btn green inverted text" @click="importFakeData()">
    Importer les données de démo
  </button>
  <div id="monthly-overview" class="box">
    <div class="left">
      <h2>Vue mensuelle</h2>
      <div id="monthly-stats">
        <div class="stats-label">
          <div class="stat">
            <div class="label d-green">Dépenses {{ currentMonth }}</div>
            <div class="amount">{{ monthlyExpenses }}€</div>
          </div>
          <!-- <div class="stat">
            <div class="label green">Épargne</div>
            <div class="amount">0€</div>
          </div> -->
          <div class="stat">
            <div class="label l-green">Disponible</div>
            <div class="amount">{{ monthlyAvailableAmount }}€</div>
          </div>
        </div>
        <div class="stats-bar">
          <div
            class="fees progress__bar"
            :style="{ width: `${monthlyFeesPercentage}%` }"
          ></div>
          <div class="savings progress__bar" style="width: 0%"></div>
          <div
            class="available progress__bar"
            :style="{ width: `${monthlyAvailablePercentage}%` }"
          ></div>
        </div>
      </div>
      <div class="flex">
        <button class="btn green inverted icon text" type="submit">
          <font-awesome-icon :icon="['fa', 'plus']" />
          <router-link to="/expenses">une dépense</router-link>
        </button>
        <button class="btn green inverted icon text" type="submit">
          <font-awesome-icon :icon="['fa', 'plus']" />
          <router-link to="/revenues">un revenu</router-link>
        </button>
      </div>
    </div>
    <div class="right">
      <div id="budget-mood"></div>
    </div>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { mapActions, mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus);
dayjs.locale("fr");

export default {
  name: "MonthlyOverview",
  components: {
    FontAwesomeIcon,
  },
  data(): { currentMonth: string } {
    return {
      currentMonth: dayjs().format("MMMM"),
    };
  },
  computed: {
    // La méthode mapGetters retourne un objet qui peut être étendu directement dans la section computed du composant en utilisant l'opérateur spread .... Cela signifie que les propriétés de l'objet retourné par mapGetters sont ajoutées directement dans l'objet computed du composant, en leur donnant le même nom que leur nom d'origine dans le store.
    ...mapGetters([
      "totalExpenses",
      "totalRevenues",
      "expensesPercentage",
      "availablePercentage",
      "availableAmount",
      "totalMonthlyRevenues",
      "totalMonthlyExpenses",
    ]),
    // Fonction monthlyExpenses() qui récupère totalExpenses mappé juste avant
    monthlyExpenses() {
      return this.totalMonthlyExpenses;
    },
    monthlyRevenues() {
      return this.totalMonthlyRevenues;
    },
    monthlyFeesPercentage() {
      return this.expensesPercentage;
    },
    monthlyAvailablePercentage() {
      return this.availablePercentage;
    },
    monthlyAvailableAmount() {
      return this.availableAmount;
    },
  },
  methods: {
    ...mapActions(["saveFakeDataToLocalStorage"]),
    importFakeData() {
      this.saveFakeDataToLocalStorage();
      location.reload();
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/components/MonthlyOverview.scss";
</style>
