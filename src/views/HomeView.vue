<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <TransactionsList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import Home from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Home from "@/components/Home.vue";
import TransactionsList from "@/components/TransactionsList.vue";
import createTransaction from "@/components/createTransaction.vue";

@Options({
  components: {
    Home,
    TransactionsList,
    createTransaction,
  },
})
export default class HomeView extends Vue {}
</script>
