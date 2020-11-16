import React from "react";
import { Polar } from "react-chartjs-2";

const PolarChart = () => (
  <Polar
    data={{
      labels: ["Bâtiment E1", "Bâtiment E2", "Bâtiment E4"],
      datasets: [
        {
          label: "Salle de revision disponible",
          data: ["2", "3", "4"], // "SC 305", "P445", "Salle 22"],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
        },
      ],
    }}
  ></Polar>
);

export default PolarChart;
