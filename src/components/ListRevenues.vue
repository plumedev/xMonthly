<template>
  <div class="list-revenues">
    <h2>Dépenses de {{ currentMonth }}</h2>
    <div class="box">
      <div class="table">
        <aside class="table-head">
          <h5>Nom</h5>
          <h5>Montant</h5>
          <h5></h5>
        </aside>
        <ul class="table-content">
          <li v-for="revenue in revenueOfMonth" :key="revenue.label">
            <div class="label">{{ revenue.label }}</div>
            <div class="amount">{{ revenue.amount }}€</div>
            <div class="remove-revenue">
              <button class="remove" @click="deleteRevenue(revenue.id)">
                <font-awesome-icon :icon="['far', 'fa-square-minus']" />
                <font-awesome-icon :icon="['fas', 'square-minus']" />
              </button>
            </div>
          </li>
          <li class="total-revenue">
            <div class="total-revenue__label">Total des revenus mensuels</div>
            <div class="total-revenue__total">{{ monthlyRevenues }}€</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store/index";
import { mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSquareMinus as fasSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus as farSquareMinus } from "@fortawesome/free-regular-svg-icons";
import dayjs from "dayjs";

library.add(fasSquareMinus, farSquareMinus);

export default {
  data() {
    return {
      currentMonth: dayjs().format("MMMM"),
    };
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {
    ...mapGetters([
      "getRevenues",
      "totalRevenues",
      "revenueOfMonth",
      "totalMonthlyRevenues",
    ]),
    monthlyRevenues() {
      return this.totalMonthlyRevenues;
    },
  },
  methods: {
    deleteRevenue(id: string): void {
      store.commit("deleteRevenue", id);
      this.saveRevenuesToLocalStorage();
    },
    saveRevenuesToLocalStorage() {
      const revenues = store.state.revenues;
      localStorage.setItem("revenues", JSON.stringify(revenues));
      return revenues;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/atomic/Atoms.scss";
@import "@/scss/components/ListRevenues.scss";
</style>
