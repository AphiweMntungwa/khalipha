import React, { useState } from "react";
import { useSelector } from "react-redux";
import OtherDetails from "./Charts/Doughnut/OtherDetails/OtherDetails";
import BarChart from "./Charts/Bar chart/Bar";
import ChartEthnic from "./Charts/Doughnut/ChartEthnic";
import BootButtons from "./Countries/BootButtons";

function Utils({ config, barConfig, linkTo }) {
  const [selectedGraph, changeGraph] = useState(false);

  const largeWindow = useSelector((state) => state.screen.largeWindow);
  return (
    <>
      {largeWindow && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selectedGraph ? (
              <BarChart config={barConfig} indexAxs="y" cname="big-mike" />
            ) : (
              <ChartEthnic code="cntr" config={config} linkTo={linkTo} />
            )}
            <BarChart config={barConfig} indexAxs="y" cname="big-bar" />
          </div>
          <BootButtons
            changeGraph={changeGraph}
            cname="util-button"
            buttonText={{ first: "Doughnout", second: "Alt-bar" }}
          />
          <OtherDetails paragraph={config.paragraph} linkTo={linkTo} />
        </>
      )}
    </>
  );
}

export default Utils;
