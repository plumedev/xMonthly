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
