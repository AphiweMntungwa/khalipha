import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChartEthnic from "../Charts/Doughnut/ChartEthnic";
import AccordBstrap from "../Accordion/AccordBstrap";
import LineChart from "../Charts/Line/Line";
import BarChart from "../Charts/Bar chart/Bar";
import BootButtons from "./BootButtons";
import Utils from "../Utils";
import OtherDetails from "../Charts/Doughnut/OtherDetails/OtherDetails";
import "./countries.css";
import axios from "axios";

function Countries() {
  const [selectedGraph, changeGraph] = useState("");
  const [lineCountry, setLineCountry] = useState("");
  const [selectedFirstGraph, changeFirstGraph] = useState("");
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
  const largeWindow = useSelector((state) => state.screen.largeWindow);
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
        oneLabel: "GDP",
        chartText: "GDP",
      }
    : {};

  useEffect(() => {
    axios
      .post("http://localhost:3001/South Africa/province")
      .then((res) => setLineCountry(res.data.country))
      .catch((e) => console.log("oops error", e.message));
  }, []);

  const spitColor = () => {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
  };
  const blackBox = () => {
    let provinces = [];
    lineCountry[0] &&
      lineCountry[0].provinces.forEach((el) => {
        provinces.push({
          label: el.name,
          data: el.higherEducation.growth,
          borderColor: spitColor(),
        });
      });

    lineCountry[0] &&
      provinces.unshift({
        label: lineCountry[0].name,
        data: lineCountry[0].higherEducation.growth,
        borderColor: spitColor(),
      });
    return provinces;
  };
  const educationLineChart = lineConfig
    ? {
        manyLabels: blackBox(),
        labels: lineCountry[0] && lineCountry[0].higherEducation.years,
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

  const barConfig = country.populationByProvince
    ? {
        labels,
        data: country.populationByProvince,
        chartText: "alt",
      }
    : {};

  return (
    <div className="country-div">
      {!largeWindow && (
        <>
          {selectedFirstGraph ? (
            <>
              <BarChart config={barConfig} indexAxs="y" cname="big-mike" />
              <BootButtons
                changeGraph={changeFirstGraph}
                buttonText={{ first: "Doughnout", second: "Alt-bar" }}
                cname="util-button"
              />
              <OtherDetails
                paragraph={config.paragraph}
                linkTo="https://en.wikipedia.org/wiki/South_Africa"
              />
            </>
          ) : (
            <ChartEthnic
              code="cntr"
              config={config}
              linkTo="https://en.wikipedia.org/wiki/South_Africa"
              changeGraph={changeFirstGraph}
            />
          )}
        </>
      )}
      {largeWindow && (
        <Utils
          config={config}
          barConfig={barConfig}
          linkTo="https://en.wikipedia.org/wiki/South_Africa"
        />
      )}
      <AccordBstrap config={{ title: "Economic Growth.", key: 1 }}>
        {selectedGraph ? (
          <ChartEthnic
            config={donoughtConfigGDP}
            linkTo="https://www.statssa.gov.za/?p=12056"
            status={true}
          />
        ) : (
          <LineChart config={lineConfig} />
        )}
        <BootButtons
          changeGraph={changeGraph}
          buttonText={{ first: "Growth", second: "P. share" }}
        />
      </AccordBstrap>
      <AccordBstrap config={{ title: "Religious Breakdown.", key: 2 }}>
        <BarChart config={religionConfig} />
      </AccordBstrap>
      <AccordBstrap config={{ title: "Higher Education.", key: 2 }}>
        <LineChart config={educationLineChart} />
      </AccordBstrap>
    </div>
  );
}

export default Countries;
