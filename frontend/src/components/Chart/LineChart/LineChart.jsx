import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => (
  <Line
    data={{
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
          label: "Moyenne semestre 1",

          data: [8, 10, 12, 12, 11, 12, 10, 12, 12, 14, 13, 13],
          borderCorlor: "none",
          backgroundColor: "rgba(255, 99, 132, 0.2)",

          fill: true,
        },
        {
          label: "Moyenne semestre 2",
          data: [10, 12, 12, 13, 9, 12, 14, 13, 13, 15, 16, 17],
          borderCorlor: "none",
          backgroundColor: "rgba(54, 162, 235, 0.2)",

          fill: true,
        },
      ],
    }}
  ></Line>
);

export default LineChart;
