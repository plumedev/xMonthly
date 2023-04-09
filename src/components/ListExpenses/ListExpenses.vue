<template>
  <div>
    <div id="transactions-list" class="box">
      <div class="table">
        <aside class="table-head">
          <h5>Label</h5>
          <h5 @click="sortTransactionByDate()">
            Date
            <font-awesome-icon
              v-show="sortBy"
              :icon="['fas', 'arrow-up-wide-short']"
              class="cursor"
            />
            <font-awesome-icon
              v-show="!sortBy"
              :icon="['fas', 'arrow-up-short-wide']"
              class="cursor"
            />
          </h5>
          <h5>Montant</h5>
          <h5></h5>
        </aside>
        <ul class="table-content">
          <li
            v-for="transaction in transactionsOfMonth"
            :key="transaction.label"
          >
            <div class="label">{{ transaction.label }}</div>
            <div class="date">{{ transaction.formattedDate }}</div>
            <div class="amount">{{ transaction.amount }}€</div>
            <div class="remove-transaction">
              <button
                class="remove"
                :class="{ hover: hover }"
                @click="deleteTransaction(transaction.id)"
                @mouseover="hover = true"
                @mouseleave="hover = false"
              >
                <font-awesome-icon :icon="['far', 'fa-square-minus']" />
                <font-awesome-icon :icon="['fas', 'square-minus']" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ListExpenses from "../ListExpenses/ListExpenses";
export default ListExpenses;
</script>
<style lang="scss">
@import "@/scss/Variables.scss";
@import "./ListExpenses.scss";
</style>
