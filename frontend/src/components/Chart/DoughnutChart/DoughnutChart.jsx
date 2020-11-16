import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => (
  <Doughnut
    data={{
      labels: [
        "Absence maladie",
        "Absence retard",
        "Absence motif impérieux",
        "Absence justifiée",
        "Absence non justifiée",
      ],
      datasets: [
        {
          label: "Nombre total d'heure sur l'année",
          data: ["12", "5", "20", "18", "2"],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(128, 101, 245, 0.2)",
          ],
        },
      ],
    }}
  ></Doughnut>
);

export default DoughnutChart;
