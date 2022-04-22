import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Country from "./Country";
import { countryThunk } from "../../app/redux/countries/countryActions";
import "./triangle.css";

function Triangle({ provOrContr }) {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const province = useSelector((state) => state.provinces.province);
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country.country);
  const largeWindow = useSelector((state) => state.screen.largeWindow);

  const triangleId = largeWindow ? "triangle_none" : "";
  const triangleDark = darkMode ? "triangle_dark" : "";
  useEffect(() => {
    dispatch(countryThunk("South Africa"));
  }, []);

  const config =
    provOrContr && province.length
      ? {
          name: province[0].name,
          population: province[0].populationInProv,
          entity: "Province",
        }
      : {
          name: country.name,
          population: country.population,
          entity: "Country",
        };

  return (
    <>
      {toggleState && (
        <>
          <div
            className={`triangle-carrier ${triangleDark}`}
            id={triangleId}
          ></div>
          <Country config={config} id={triangleId} />
        </>
      )}
    </>
  );
}

export default Triangle;
