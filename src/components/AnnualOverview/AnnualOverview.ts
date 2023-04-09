import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";
import { ComponentCustomProperties } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

interface CustomComponent extends ComponentCustomProperties {
  annualExpenses: number[];
  annualRevenues: number[];
  chartOptions: object;
  chartData: object;
}

export default defineComponent<object, object, CustomComponent>({
  name: "annualOverview",
  components: { Bar },
  computed: {
    ...mapGetters(["annualExpenses", "annualRevenues"]),
    chartData() {
      return {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jui",
          "Aou",
          "Sep",
          "Oct",
          "Nov",
          "Déc",
        ],
        datasets: [
          {
            label: "Dépenses",
            data: this.annualExpenses,
            backgroundColor: ["#3B5649"],
            pointStyle: "rectRounded",
            pointRadius: 6,
          },
          {
            label: "Disponible",
            backgroundColor: "#09E77C",
            data: this.annualRevenues,
            staked: true,
            pointStyle: "circle",
            pointRadius: 6,
          },
        ],
      };
    },
    chartOptions() {
      return {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: true,
      };
    },
  },
});
