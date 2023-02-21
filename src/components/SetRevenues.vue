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
      </div>
      <div class="input-group">
        <label>
          <font-awesome-icon :icon="['fa', 'euro-sign']" class="input-icon" />
        </label>
        <input type="text" placeholder="Montant" v-model="revenue.amount" />
      </div>
      <button class="btn green icon text" type="submit">
        <font-awesome-icon :icon="['fa', 'plus']" />
        Ajouter
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import store, { Revenue } from "@/store/index";
import { Options, Vue } from "vue-class-component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faTag, faEuroSign);

@Options({
  data() {
    return {
      revenue: {
        label: "",
        amount: 0,
      },
    };
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {},
  props: {},
  methods: {
    saveRevenuesToLocalStorage(): Revenue[] {
      const revenues = store.state.revenues;
      localStorage.setItem("revenues", JSON.stringify(revenues));
      return revenues;
    },
    addRevenueSubmit(): void {
      store.commit("addRevenue", this.revenue);
      this.revenue = {
        label: "",
        amount: 0,
      };
      this.saveRevenuesToLocalStorage();
    },
  },
})
export default class SetRevenues extends Vue {
  addRevenueSubmit: ((payload: Event) => void) | undefined;
  revenue!: { label: string; amount: number };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
