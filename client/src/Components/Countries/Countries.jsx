import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChartEthnic from "../Charts/Doughnut/ChartEthnic";
import AccordBstrap from "../Accordion/AccordBstrap";
import LineChart from "../Charts/Line/Line";
import BarChart from "../Charts/Bar chart/Bar";
import BootButtons from "./BootButtons";
import "./countries.css";

function Countries() {
  const [selectedGraph, changeGraph] = useState("");
  const [labels, setLabels] = useState([
    "KZN",
    "EC",
    "WC",
    "Limpompo",
    "MP",
    "Gauteng",
    "FS",
    "NW",
    "NC",
  ]);
  const country = useSelector((state) => state.country.country);
  const config = country.description
    ? {
        labels,
        datasets: {
          label: "Population By Province(%)",
          data: country.populationByProvince,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(100, 50, 27)",
            "rgb(7, 50, 27)",
            "rgb(10, 200, 70)",
            "rgb(240, 100, 27)",
            "rgb(150, 5, 2)",
            "rgb(200, 50, 2)",
          ],
          hoverOffset: 4,
        },
        chartText: "Population by Province(%)",
        paragraph: `${country.description}`,
      }
    : {};

  const religionConfig = country.religions
    ? {
        labels: country.religions.list,
        data: country.religions.listData,
        chartText: "Religion by Population.(%)",
      }
    : {};

  const lineConfig = country.economy
    ? {
        labels: country.economy.gdp.years,
        data: country.economy.gdp.growth,
        chartText: "GDP",
      }
    : {};

  const donoughtConfigGDP = country.economy
    ? {
        labels,
        datasets: {
          label: "Province By Contribution(%)",
          data: country.economy.provinceByContributionGDP,
          backgroundColor: [
            "rgb(55, 99, 192)",
            "rgb(200, 162, 150)",
            "rgb(25, 205, 86)",
            "rgb(180, 50, 27)",
            "rgb(70, 50, 27)",
            "rgb(100, 200, 70)",
            "rgb(240, 180, 27)",
            "rgb(150, 220, 2)",
            "rgb(20, 50, 2)",
          ],
          hoverOffset: 3,
        },
        chartText: "Province By Contribution(%)",
        paragraph: `Gauteng is the economic power house of the country.`,
      }
    : {};

  return (
    <div>
      <ChartEthnic
        code="cntr"
        config={config}
        linkTo="https://en.wikipedia.org/wiki/South_Africa"
      />
      <AccordBstrap config={{ title: "Economic Growth.", key: 1 }}>
        {selectedGraph ? (
          <ChartEthnic
            config={donoughtConfigGDP}
            linkTo="https://www.statssa.gov.za/?p=12056"
          />
        ) : (
          <LineChart config={lineConfig} />
        )}
        <BootButtons changeGraph={changeGraph} />
      </AccordBstrap>
      <AccordBstrap config={{ title: "Religious Breakdown.", key: 2 }}>
        <BarChart config={religionConfig} />
      </AccordBstrap>
    </div>
  );
}

export default Countries;
