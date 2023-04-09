<template>
  <div class="box">
    <div class="heading">
      <h2>Ajout d'une dépense</h2>
    </div>
    <form
      id="createTransaction"
      class="flex flex-d-c"
      @submit.prevent="handleSubmit"
    >
      <div class="input-group">
        <label>
          <font-awesome-icon :icon="['fa', 'tag']" class="input-icon" />
        </label>
        <input
          type="text"
          placeholder="Nom de la dépense"
          v-model="transaction.label"
        />
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
      <button class="btn green inverted icon text full" type="submit">
        <font-awesome-icon :icon="['fa', 'plus']" />
        Ajouter
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import createExpenses from "../CreateExpenses/CreateExpenses";
export default createExpenses;
</script>

<style lang="scss">
@import "./CreateExpenses.scss";
</style>
