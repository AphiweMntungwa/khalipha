import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBurger } from "../../../app/redux/topbar/topbarActions";
import { Link, useLocation } from "react-router-dom";
import RainbowText from "react-rainbow-text";
import Country from "../../TriangleDiv/Country";
import "./topbar.css";

function Topbar({ children }) {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const largeWindow = useSelector((state) => state.screen.largeWindow);
  const country = useSelector((state) => state.country.country);
  const province = useSelector((state) => state.provinces.province);
  const dispatch = useDispatch();

  const handleNavToggle = () => {
    const bar = document.querySelector(".cross-div");
    const nav = document.querySelector("nav");
    const navWrapper = document.querySelector(".nav-wrapper");
    if (toggleState) {
      bar.classList.add("bar");
      nav.classList.add("laynav");
      navWrapper.classList.add("wrapperOn");
    } else {
      bar.classList.remove("bar");
      nav.classList.remove("laynav");
      navWrapper.classList.remove("wrapperOn");
    }
  };
  const navDark = darkMode
    ? { backgroundColor: "black" }
    : { backgroundColor: "rgb(138, 233, 233)" };

  const lightCross = darkMode ? "cross-button-dark" : "";
  const headerLight = darkMode ? 0.7 : 0.3;

  const location = useLocation();
  let linker = "";
  const link = location.pathname !== "/" && !toggleState ? "" : "/";
  linker = largeWindow ? "/" : link;

  const config =
    location.pathname == "/province" && province[0]
      ? {
          name: province[0].name,
          population: province[0].populationInProv,
          entity: "province",
        }
      : {
          name: country.name,
          population: country.population,
          entity: "country",
        };

  return (
    <div className="nav-wrapper" style={navDark}>
      <nav>
        <Link
          to={{ pathname: linker }}
          style={{ textDecoration: "none" }}
          className="homelink"
        >
          <h1>
            <RainbowText lightness={headerLight} saturation={1}>
              khalipha
            </RainbowText>
          </h1>
        </Link>
        {largeWindow && <Country config={config} />}
        <div
          className="cross-div"
          onClick={() => {
            if (!largeWindow) {
              dispatch(toggleBurger());
              handleNavToggle();
            }
          }}
        >
          <div className={`cross-button ${lightCross}`}></div>
          <div className={`cross-button ${lightCross}`}></div>
          <div className={`cross-button ${lightCross}`}></div>
        </div>
        {children}
      </nav>
    </div>
  );
}

export default Topbar;
