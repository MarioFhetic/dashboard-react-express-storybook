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

  // const [dataCharts, setdataCharts] = useState([]);
  // useEffect(() => {
  //   const fetchChartsAPI = async () => {
  //     setdataCharts(await fetchCharts());
  //   };

  //   fetchChartsAPI(); // on appel la fonction pour l'activer
  // }, []);

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

  {
    // console.log(dailyData.map(({ confirmed }) => confirmed));
  }

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
