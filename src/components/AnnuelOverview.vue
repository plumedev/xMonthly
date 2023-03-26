<template>
  <div class="box">
    <h6>Les données sont statique pour le moment</h6>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script lang="ts">
import { Bar } from "vue-chartjs";
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

export default {
  name: "AnnualOverview",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre",
        ],
        datasets: [
          {
            label: "Dépenses",
            backgroundColor: "#3B5649",
            data: [
              1212.38, 1212.38, 1212.38, 1212.38, 1212.38, 1212.38, 7, 8, 3, 1,
              15, 9,
            ],
          },
          {
            label: "Disponible",
            backgroundColor: "#09E77C",
            data: [
              528.96, 711.24, 287.62, 662.62, 577.07, 662.62, 1754.0, 1754.0,
              1754.0, 1754.0, 1754.0, 1754.0,
            ],
            staked: true,
          },
        ],
      },
      chartOptions: void {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
        minHeight: 215,
      },
    };
  },
};
</script>
