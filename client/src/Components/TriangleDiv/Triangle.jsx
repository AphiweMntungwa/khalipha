import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Country from "./Country";
import { countryThunk } from "../../app/redux/countries/countryActions";
import "./triangle.css";

function Triangle({ provOrContr }) {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const province = useSelector((state) => state.provinces.province);
  const dispatch = useDispatch()
  const country = useSelector((state) => state.country.country);
  
  const triangleDark = darkMode ? "triangle_dark" : "";
  useEffect(() => {
    dispatch(countryThunk('South Africa'))
  }, []);

  const config = provOrContr && province.length
    ? { name: province[0].name, population: province[0].populationInProv }
    : {name:country.name, population:country.population};

  return (
    <>
      {toggleState && (
        <>
          <div className={`triangle-carrier ${triangleDark}`}></div>
          <Country config={config} />
        </>
      )}
    </>
  );
}

export default Triangle;
