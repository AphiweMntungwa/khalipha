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
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ config , indexAxs = 'y', cname}) {
  useEffect(() => {
    const bar = document.querySelector(".cross-div");
    const nav = document.querySelector("nav");
    const navWrapper = document.querySelector(".nav-wrapper");
    bar.classList.remove("bar");
    nav.classList.remove("laynav");
    navWrapper.classList.remove("wrapperOn");
  }, []);

  const { labels, chartText, data } = config;
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  const chart = () => {
    setChartData({
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            "rgba(36, 141, 162, 0.52)",
            "rgba(153, 102, 255, 0.6)",
          ],
          borderColor: ["rgb(36, 150, 180)", "rgb(255, 159, 64)"],
          borderWidth: 2,
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: true,
          text: chartText,
          position: "bottom",
        },
      },
      indexAxis : indexAxs
    });
  };

  useEffect(() => {
    chart();
  }, [labels]);
  const toggleState = useSelector((state) => state.topbar.toggler);

  return (
    <div className={`chartDiv BarChart ${cname}`}>
      {toggleState ? <Bar options={chartOptions} data={chartData} /> : null}
    </div>
  );
}

export default BarChart;
