import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../Doughnut/chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ config }) {
  const { labels, chartText, data, oneLabel = "one", manyLabels } = config;
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const dts = manyLabels
    ? manyLabels
    : [
        {
          label: oneLabel,
          data,
          backgroundColor: "rgb(36, 10, 200, .5)",
          borderColor: "rgb(36, 10, 200)",
          borderWidth: 2,
        },
      ];

  const [chartOptions, setChartOptions] = useState({});

  const chart = () => {
    setChartData({
      labels,
      datasets: dts,
    });

    setChartOptions({
      elements: {
        line: { tension: 1 },
      },
      responsive: true,
      title: {
        display: true,
        text: chartText,
        position: "bottom",
      },
    });
  };

  useEffect(() => {
    chart();
  }, [labels]);

  return (
    <div>
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}

export default LineChart;
