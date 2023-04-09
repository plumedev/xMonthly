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
import MonthlyOverview from "./MonthlyOverview";
export default MonthlyOverview;
</script>
<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "./MonthlyOverview.scss";
</style>
