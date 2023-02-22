<template>
  <div class="list-revenues">
    <h2>Mes revenus</h2>
    <div class="box">
      <div class="table">
        <aside class="table-head">
          <h5>Nom</h5>
          <h5>Montant</h5>
          <h5></h5>
        </aside>
        <ul class="table-content">
          <li v-for="revenue in getRevenues" :key="revenue.label">
            <div class="label">{{ revenue.label }}</div>
            <div class="amount">{{ revenue.amount }}€</div>
            <div class="remove-revenue">
              <button class="remove" @click="deleteRevenue(revenue.label)">
                <font-awesome-icon :icon="['far', 'fa-square-minus']" />
                <font-awesome-icon :icon="['fas', 'square-minus']" />
              </button>
            </div>
          </li>
          <li class="total-revenue">
            <div>Total des revenus mensuels</div>
            <div></div>
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

library.add(fasSquareMinus, farSquareMinus);

export default {
  data() {
    return {};
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {
    ...mapGetters(["getRevenues"]),
  },
  methods: {
    deleteRevenue(label: string): void {
      store.commit("deleteRevenue", label);
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

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Atoms.scss";
@import "@/scss/ListRevenues.scss";
</style>
