<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"; // @ is an alias to /src

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>
