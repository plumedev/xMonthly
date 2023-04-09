import dayjs from "dayjs";
import "dayjs/locale/fr";
import { mapActions, mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus);
dayjs.locale("fr");

export default {
  name: "MonthlyOverview",
  components: {
    FontAwesomeIcon,
  },
  data(): { currentMonth: string } {
    return {
      currentMonth: dayjs().format("MMMM"),
    };
  },
  computed: {
    // La méthode mapGetters retourne un objet qui peut être étendu directement dans la section computed du composant en utilisant l'opérateur spread .... Cela signifie que les propriétés de l'objet retourné par mapGetters sont ajoutées directement dans l'objet computed du composant, en leur donnant le même nom que leur nom d'origine dans le store.
    ...mapGetters([
      "totalExpenses",
      "totalRevenues",
      "expensesPercentage",
      "availablePercentage",
      "availableAmount",
      "totalMonthlyRevenues",
      "totalMonthlyExpenses",
    ]),
    // Fonction monthlyExpenses() qui récupère totalExpenses mappé juste avant
    monthlyExpenses() {
      return this.totalMonthlyExpenses;
    },
    monthlyRevenues() {
      return this.totalMonthlyRevenues;
    },
    monthlyFeesPercentage() {
      return this.expensesPercentage;
    },
    monthlyAvailablePercentage() {
      return this.availablePercentage;
    },
    monthlyAvailableAmount() {
      return this.availableAmount;
    },
  },
  methods: {
    ...mapActions(["saveFakeDataToLocalStorage"]),
    importFakeData() {
      this.saveFakeDataToLocalStorage();
      location.reload();
    },
  },
};
