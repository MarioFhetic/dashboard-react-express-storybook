import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => (
  <Bar
    data={{
      labels: ["Technologie web", "Bootcamp", "UX Design", "Anglais"], //  urbanisation SI // IOT
      datasets: [
        {
          label: "Moyenne par matière ",
          data: ["12", "5", "20", "18", "2"],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
        },
      ],
    }}
  ></Bar>
);

export default BarChart;
