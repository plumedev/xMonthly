<template>
  <div class="transaction-list">
    <h1>Transaction list</h1>
    {{ count }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";

@Options({
  computed: mapState(["count"]),
  props: {
    msg: String,
  },
})
export default class TransactionsList extends Vue {
  msg!: string;
  computed = mapState(["count"]);
  count!: number;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
