import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = () => {
  return (
    <Radar
      data={{
        labels: [
          "Technologie web",
          "Bootcamp",
          "UX Design",
          "Anglais",
          "Urbanisation SI",
          "IOT",
        ],
        datasets: [
          {
            label: "Total heure par matière",
            data: ["90", "40", "70", "60", "50", "80"],
            backgroundColor: [
              "rgba(1, 113, 121, 0.2);",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 19, 135, 0.2)",
              "rgba(150, 148, 35, 0.2)",
            ],
          },
        ],
      }}
    ></Radar>
  );
};

export default RadarChart;
