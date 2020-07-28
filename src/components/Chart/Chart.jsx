import React, { useState, useEffect } from "react";
import { ChartContainer } from "./Chart.styles";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchFromApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchFromApi();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <ChartContainer>{lineChart}</ChartContainer>;
};

export default Chart;
