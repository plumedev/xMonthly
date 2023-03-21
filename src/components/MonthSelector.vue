<template>
  <div class="monthSelector">
    <button class="icon-only" @click="decrementMonth">
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
    </button>
    <h4 class="activeMonth">{{ displayActiveMonth() }}</h4>
    <button class="icon-only" @click="incrementMonth">
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dayjs from "dayjs";
import { mapGetters } from "vuex";
import store from "@/store/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft, faArrowRight);

export default defineComponent({
  data() {
    return {};
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {
    ...mapGetters(["getActiveMonth"]),
    activeMonth(): string {
      return this.getActiveMonth;
    },
  },
  methods: {
    displayActiveMonth() {
      const formatActiveMonth = this.getActiveMonth.format("MMMM YYYY");
      return formatActiveMonth;
    },
    incrementMonth(): void {
      const newDate = dayjs(this.activeMonth).add(1, "month");
      // Met à jour activeMonth dans le store Vuex
      store.commit("setActiveMonth", newDate);
    },
    decrementMonth(): void {
      const newDate = dayjs(this.activeMonth).subtract(1, "month");
      // Met à jour activeMonth dans le store Vuex
      store.commit("setActiveMonth", newDate);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/scss/components/MonthSelector.scss";
</style>
