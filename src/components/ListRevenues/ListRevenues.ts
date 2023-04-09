import store from "@/store/index";
import { mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSquareMinus as fasSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus as farSquareMinus } from "@fortawesome/free-regular-svg-icons";
import dayjs from "dayjs";

library.add(fasSquareMinus, farSquareMinus);

export default {
  data() {
    return {
      currentMonth: dayjs().format("MMMM"),
    };
  },
  components: {
    FontAwesomeIcon,
  },
  computed: {
    ...mapGetters([
      "getRevenues",
      "totalRevenues",
      "revenueOfMonth",
      "totalMonthlyRevenues",
    ]),
    monthlyRevenues() {
      return this.totalMonthlyRevenues;
    },
  },
  methods: {
    deleteRevenue(id: string): void {
      store.commit("deleteRevenue", id);
      this.saveRevenuesToLocalStorage();
    },
    saveRevenuesToLocalStorage() {
      const revenues = store.state.revenues;
      localStorage.setItem("revenues", JSON.stringify(revenues));
      return revenues;
    },
  },
};
