import React, { useState, useEffect } from "react";
import { fetchDailyData, fetchCharts } from "../../api";

// chart.js
import { Line, Bar, Doughnut, Radar, Polar } from "react-chartjs-2";

//material
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

// import Chart
import BarChart from "./BarChart/BarChart";
import DoughnutChart from "./DoughnutChart/DoughnutChart";
import LineChart from "./LineChart/LineChart";
import PolarChart from "./PolarChart/PolarChart";
import RadarChart from "./RadarChart/RadarChart";

// style
import styles from "./Chart.module.css";
import cx from "classnames";

// useState et useEffect sont des hooks (synonymes de fonctions)

// get data charts
// const [charts, setCharts] = useState([]);

// useEffect(() => {
//   const fetchChartsLocal = async () => {
//     setCharts(await fetchCharts());
//   };
//   fetchChartsLocal();
// }, []);

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  // On peut pas faire des fonctions asynchrones directement avec le hook useEffect donc on va créer une fonction asynchrone à l'intérieur
  // On créer une fonction fetchAPI asynchrone  qui appel notre fonction fetchDailyData qui retourne une promesse
  // car c'est une fonciton asynchrone et le await juste avant permet d'attendre puis on le met dans notre state setDailyData.
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI(); // on appel la fonction pour l'activer
  }, []);

  const [dataCharts, setdataCharts] = useState([]);
  useEffect(() => {
    const fetchChartsAPI = async () => {
      setdataCharts(await fetchCharts());
    };

    fetchChartsAPI(); // on appel la fonction pour l'activer
  }, []);

  // const lineChart = dailyData.length ? (
  //   <Line
  //     data={{
  //       labels: dailyData.map(({ date }) => date),
  //       datasets: [
  //         {
  //           data: dailyData.map(({ confirmed }) => confirmed),
  //           label: "Infected",
  //           borderCorlor: "#3333ff",
  //           fill: true,
  //         },
  //         {
  //           data: dailyData.map(({ deaths }) => deaths),
  //           label: "Deaths",
  //           borderCorlor: "red",
  //           backgroundColor: "yellow",
  //           fill: true,
  //         },
  //       ],
  //     }}
  //   ></Line>
  // ) : null;
  // {
  //   console.log(
  //     dataCharts.map((item, i) => {
  //       return item.labels;
  //     })
  //   );
  // }

  {
    console.log("state", dataCharts);
  }

  // const radarChart = (
  //   <Radar
  //     data={{
  //       labels: [
  //         "Sport",
  //         "Révision",
  //         "Lecture",
  //         "Playstation",
  //         "Exemple",
  //         "Exemple 2",
  //       ],
  //       datasets: [
  //         {
  //           label: "Total heure par matière",
  //           data: ["90", "40", "70", "60", "50", "80"],
  //           backgroundColor: [
  //             "rgba(1, 113, 121, 0.2);",
  //             "rgba(54, 162, 235, 0.2)",
  //             "rgba(255, 206, 86, 0.2)",
  //             "rgba(75, 192, 192, 0.2)",
  //             "rgba(153, 19, 135, 0.2)",
  //             "rgba(150, 148, 35, 0.2)",
  //           ],
  //         },
  //       ],
  //     }}
  //   ></Radar>
  // );

  // const barChart = (
  //   <Bar
  //     data={{
  //       labels: ["Technologie web", "Bootcamp", "UX Design", "Anglais"], //  urbanisation SI // IOT
  //       datasets: [
  //         {
  //           label: "Moyenne par matière ",
  //           data: ["12", "5", "20", "18", "2"],
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.2)",
  //             "rgba(54, 162, 235, 0.2)",
  //             "rgba(255, 206, 86, 0.2)",
  //             "rgba(75, 192, 192, 0.2)",
  //           ],
  //         },
  //       ],
  //     }}
  //   ></Bar>
  // );

  // const doughnutChart = (
  //   <Doughnut
  //     data={{
  //       labels: [
  //         "Absence maladie",
  //         "Absence retard",
  //         "Absence motif impérieux",
  //         "Absence justifiée",
  //         "Absence non justifiée",
  //       ],
  //       datasets: [
  //         {
  //           label: "Nombre total d'heure sur l'année",
  //           data: ["12", "5", "20", "18", "2"],
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.2)",
  //             "rgba(54, 162, 235, 0.2)",
  //             "rgba(255, 206, 86, 0.2)",
  //             "rgba(75, 192, 192, 0.2)",
  //             "rgba(128, 101, 245, 0.2)",
  //           ],
  //         },
  //       ],
  //     }}
  //   ></Doughnut>
  // );

  // const polarChart = (
  //   <Polar
  //     data={{
  //       labels: ["Bâtiment E1", "Bâtiment E2", "Bâtiment E4"],
  //       datasets: [
  //         {
  //           label: "Salle de revision disponible",
  //           data: ["2", "1", "4"], // "SC 305", "P445", "Salle 22"],
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.2)",
  //             "rgba(54, 162, 235, 0.2)",
  //             "rgba(255, 206, 86, 0.2)",
  //           ],
  //         },
  //       ],
  //     }}
  //   ></Polar>
  // );

  // const lineChartSemestre = (
  //   <Line
  //     data={{
  //       labels: [
  //         "Janvier",
  //         "Février",
  //         "Mars",
  //         "Avril",
  //         "Mai",
  //         "Juin",
  //         "Juillet",
  //         "Août",
  //         "Septembre",
  //         "Octobre",
  //         "Novembre",
  //         "Décembre",
  //       ],
  //       datasets: [
  //         {
  //           label: "Moyenne semestre 1",

  //           data: [8, 10, 12, 12, 11, 12, 10, 12, 12, 14, 13, 13],
  //           borderCorlor: "none",
  //           backgroundColor: "rgba(255, 99, 132, 0.2)",

  //           fill: true,
  //         },
  //         {
  //           label: "Moyenne semestre 2",
  //           data: [10, 12, 12, 13, 9, 12, 14, 13, 13, 15, 16, 17],
  //           borderCorlor: "none",
  //           backgroundColor: "rgba(54, 162, 235, 0.2)",

  //           fill: true,
  //         },
  //       ],
  //     }}
  //   ></Line>
  // );

  return (
    <Grid container justify="space-between" className={styles.container}>
      <Grid
        style={{ padding: "1% 0" }}
        component={Card}
        item
        className={cx(styles.card)}
        xs={12}
        md={12}
      >
        <LineChart />
      </Grid>
      <Grid
        style={{ padding: "1% 0" }}
        component={Card}
        item
        className={cx(styles.card)}
        xs={12}
        md={5}
      >
        <BarChart />
      </Grid>
      <Grid
        style={{ padding: "1% 0" }}
        component={Card}
        item
        className={cx(styles.card)}
        xs={12}
        md={5}
      >
        <RadarChart />
      </Grid>

      <Grid
        style={{ padding: "1% 0" }}
        component={Card}
        item
        className={cx(styles.card)}
        xs={12}
        md={5}
      >
        <DoughnutChart />
      </Grid>
      <Grid
        style={{ padding: "1% 0" }}
        component={Card}
        item
        className={cx(styles.card)}
        xs={12}
        md={5}
      >
        <h4>Salles disponibles</h4>
        <PolarChart />
      </Grid>
    </Grid>
  );
};

export default Chart;
