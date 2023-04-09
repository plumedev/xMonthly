<template>
  <div class="set-revenues box">
    <div class="heading">
      <h2>Ajout d'un revenu</h2>
    </div>
    <form
      id="addRevenue"
      class="flex flex-d-c"
      @submit.prevent="addRevenueSubmit"
    >
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
      <button class="btn green inverted icon text full" type="submit">
        <font-awesome-icon :icon="['fa', 'plus']" />
        Ajouter
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import createRevenues from "../CreateRevenues/CreateRevenues";
export default createRevenues;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./CreateRevenues.scss";
</style>
