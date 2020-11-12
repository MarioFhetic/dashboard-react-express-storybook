import React, { useState, useEffect } from "react";
import { fetchDailyData, fetchCharts } from "../../api";

// chart.js
import { Line, Bar, Doughnut, Radar } from "react-chartjs-2";

//material
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

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

  // On peut pas faire des fonctions asynchrones dans notre hook useEffect donc on va créer une fonction asynchrone à l'intérieur
  // Donc on créer une fonction fetchAPI asynchrone  qui appel notre fonction fetchDailyData qui retourne une promesse
  // car c'est une fonciton asynchrone et le await juste avant permet d'attendre puis on le met dans notre state setDailyData.
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI(); // on appel la fonction pour l'activer
  }, []);

  // 2 chart : barChart -> graphique pour chaque pays différents et lineChart -> le global quand on arrive sur le site

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

  const radarChart = (
    <Radar
      data={{
        labels: [
          "Électronique",
          "Développement",
          "Philosophie",
          "Informatique",
          "Mathématique",
          "Algorithme",
        ],
        datasets: [
          {
            label: "Total heure par matière",
            data: ["50", "40", "50", "60", "40", "80"],
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

  const barChart = (
    <Bar
      data={{
        labels: ["React.js", "Économie", "Philosophie", "Électronique"],
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

  const doughnutChart = (
    <Doughnut
      data={{
        labels: [
          "Absence maladie",
          "Absence retard",
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

  const lineChartSemestre = (
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

            data: [3, 2, 10, 16, 12, 2, 4, 10, 12, 4, 17, 11],
            borderCorlor: "rgba(74, 135, 248, 0.432)",
            backgroundColor: "rgba(74, 135, 248, 0.432)",

            fill: true,
          },
          {
            label: "Moyenne semestre 2",
            data: [10, 12, 15, 9, 7, 12, 20, 13, 2, 18, 19, 2],
            borderCorlor: "rgba(12, 236, 236, 0.432)",
            backgroundColor: "rgba(12, 236, 236, 0.432)",

            fill: true,
          },
        ],
      }}
    ></Line>
  );

  return (
    <Grid container justify="space-between" className={styles.container} noWrap>
      <Grid
        style={{ padding: "1% 0", borderRadius: "15px" }}
        component={Card}
        item
        className={cx(styles.card, styles.firstChart)}
        xs={12}
        md={4}
        borderRadius={"150px"}
      >
        {radarChart}
      </Grid>
      <Grid
        style={{ padding: "1% 0", borderRadius: "15px" }}
        component={Card}
        item
        className={cx(styles.card, styles.secondChart)}
        xs={12}
        md={4}
      >
        {barChart}
      </Grid>
      <Grid
        style={{ padding: "1% 0", borderRadius: "15px" }}
        component={Card}
        item
        className={cx(styles.card, styles.thirdChart)}
        xs={12}
        md={4}
      >
        {doughnutChart}
      </Grid>
      <Grid
        style={{ padding: "1% 0", borderRadius: "15px" }}
        component={Card}
        item
        className={cx(styles.card, styles.thirdChart)}
        xs={12}
        md={12}
      >
        {lineChartSemestre}
      </Grid>
    </Grid>
  );
};

export default Chart;
