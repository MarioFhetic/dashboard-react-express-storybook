import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";

// Fetch data
// import { fetchCharts } from "../../../api/index";

const RadarChart = () => {
  // const [dataCharts, setdataCharts] = useState([]);
  // useEffect(() => {
  //   const fetchChartsAPI = async () => {
  //     setdataCharts(await fetchCharts());
  //   };

  //   fetchChartsAPI(); // on appel la fonction pour l'activer
  // }, []);

  // dataCharts.map(({ data }, i) => {
  //   console.log(data);
  // });

  // console.log("ouhoooooooÒ", dataCharts[0].ba);

  // dataCharts.map((item, i) => {
  //   return console.log(item);
  // });

  // dataCharts.map(({ data }) => console.log( data));

  // dataCharts.map(({ backgroundColor }) => {
  //   let tableauColor = [];
  //   backgroundColor.map((item) => {
  //     tableauColor.push(item);
  //     return tableauColor;
  //   });
  //   console.log(tableauColor);
  // });
  // console.log(dataCharts.map(({ data }) => data));
  // let getDatas = () => {
  //   dataCharts.map((data) => {
  //     let datas = [];
  //     data.data.map((item) => {
  //       datas.push(item);
  //       return datas;
  //     });
  //     {
  //       console.log("datas", datas);
  //     }
  //   });
  // };

  // dataCharts.map((data, i) => {
  //   console.log("data sans curly", data.backgroundColor, i);
  // });

  // return dataCharts.length ? (
  //   <Radar
  //     data={{
  //       labels: dataCharts.map(({ labels }) => labels),
  //       datasets: [
  //         {
  // label: dataCharts.map(({ label }) => label),
  // data: dataCharts.map(({ data }) => data),
  //           backgroundColor: dataCharts.map(
  //             ({ backgroundColor }) => backgroundColor
  //           ),
  //         },
  //       ],
  //     }}
  //   ></Radar>
  // ) : null;

  // // data: [20, 50, 90, 25, 40, 65],

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
            data: [90, 40, 70, 60, 50, 80],
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
