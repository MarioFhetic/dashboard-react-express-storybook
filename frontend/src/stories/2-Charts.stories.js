import React from "react";
import RadarChart from "../components/Chart/RadarChart/RadarChart";
import BarChart from "../components/Chart/BarChart/BarChart";
import DoughnutChart from "../components/Chart/DoughnutChart/DoughnutChart";
import LineChart from "../components/Chart/LineChart/LineChart";
import PolarChart from "../components/Chart/PolarChart/PolarChart";

export default {
  title: "Charts",
};

export const radar = () => {
  return <RadarChart />;
};

export const bar = () => {
  return <BarChart />;
};

export const doughnut = () => {
  return <DoughnutChart />;
};

export const line = () => {
  return <LineChart />;
};
export const polar = () => {
  return <PolarChart />;
};
