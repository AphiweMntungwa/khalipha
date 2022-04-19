import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBurger } from "../../../app/redux/topbar/topbarActions";
import { Link, useLocation } from "react-router-dom";
import RainbowText from "react-rainbow-text";
import "./topbar.css";

function Topbar({ children }) {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const darkMode = useSelector((state) => state.mode.darkMode);
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

    const lightCross = darkMode ? 'cross-button-dark' : ''
    const headerLight = darkMode ? .6 : 0.2

    const location = useLocation()
    const link = location.pathname !== "/" && !toggleState ? '' : '/'

  return (
    <div className="nav-wrapper" style={navDark}>
      <nav>
        <Link to={{ pathname: link }} style={{ textDecoration: "none" }}>
          <h1>
            <RainbowText lightness={headerLight} saturation={1}>
              inform-sa
            </RainbowText>
          </h1>
        </Link>

        <div
          className="cross-div"
          onClick={() => {
            dispatch(toggleBurger());
            handleNavToggle();
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
