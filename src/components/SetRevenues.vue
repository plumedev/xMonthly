<template>
  <div class="set-revenues">
    <h3>Mes revenus</h3>

    <form id="addRevenue" @submit.prevent="addRevenueSubmit">
      <div class="input-group">
        <label>
          <font-awesome-icon :icon="['fa', 'tag']" class="input-icon" />
        </label>
        <input
          type="text"
          placeholder="Nom de la source de revenu"
          v-model="revenue.label"
        />
        <span v-if="!revenue.label && showError" class="error"
          >Veuillez entrer un nom</span
        >
      </div>
      <div class="input-group">
        <label>
          <font-awesome-icon :icon="['fa', 'calendar']" class="input-icon" />
        </label>
        <input type="date" placeholder="Date" v-model="revenue.date" />
        <span v-if="!revenue.date && showError" class="error"
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
          v-model="revenue.amount"
        />
        <span v-if="!revenue.amount && showError" class="error"
          >Veuillez entrer un montant</span
        >
      </div>
      <button class="btn green inverted icon text" type="submit">
        <font-awesome-icon :icon="['fa', 'plus']" />
        Ajouter
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import store, { Revenue } from "@/store/index";
import { Options, Vue } from "vue-class-component";
import { mapActions } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faTag, faEuroSign, faCalendar);

@Options({
  data() {
    return {
      showError: false,
      revenue: {
        label: "",
        amount: 0,
        id: "",
        date: "",
      },
    };
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {},
  props: {},
  methods: {
    ...mapActions(["generateUniqueId"]),
    saveRevenuesToLocalStorage(): Revenue[] {
      const revenues = store.state.revenues;
      localStorage.setItem("revenues", JSON.stringify(revenues));
      return revenues;
    },
    async addRevenueSubmit(): Promise<void> {
      if (this.revenue.label && this.revenue.amount && this.revenue.date) {
        this.revenue.id = await this.generateUniqueId();
        store.commit("addRevenue", this.revenue);
        this.revenue = {
          label: "",
          amount: 0,
          id: "",
          date: "",
        };
        this.saveRevenuesToLocalStorage();
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
  },
})
export default class SetRevenues extends Vue {
  addRevenueSubmit: ((payload: Event) => void) | undefined;
  revenue!: { date: Date; label: string; amount: number };
  showError!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/scss/SetRevenues.scss";
</style>
