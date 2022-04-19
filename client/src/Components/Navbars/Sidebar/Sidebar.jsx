import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./sidebar.css";
import "boxicons";
import DropList from "./Entities/DropList";
import { toggleDarkMode } from "../../../app/redux/darkmode/modeActions";
import { searchThunk } from "../../../app/redux/search/searchActions";
import { Link } from "react-router-dom";
import { toggleBurger } from "../../../app/redux/topbar/topbarActions";

function Sidebar() {
  const toggleState = useSelector((state) => state.topbar.toggler);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const searchResults = useSelector((state) => state.search.searchResults);
  const dispatch = useDispatch();

  const sideToggle = toggleState ? { display: "none" } : { display: "block" };
  const [chevron, chevronSpin] = useState([]);
  const [search, activateSearch] = useState(false);
  const [searchArr, setSearchArr] = useState([]);
  const searchInput = useRef(null);

  const handleDarkMode = () => {
    const darkState = localStorage.getItem("darkMode");
    if (darkState == true) {
      localStorage.setItem("darkMode", 0);
      dispatch(toggleDarkMode(0));
    } else {
      localStorage.setItem("darkMode", 1);
      dispatch(toggleDarkMode(1));
    }
  };

  useEffect(() => {
    const { countrySearch, provinceSearch } = searchResults;
    function addLink(arr, link) {
      let map = arr.map((el) => ({ name: el, link }));
      return map;
    }
    if (countrySearch) {
      addLink(countrySearch.ownArr, "/");
      addLink(provinceSearch.ownArr, "/province");
      setSearchArr([
        ...addLink(countrySearch.ownArr, "/"),
        ...addLink(provinceSearch.ownArr, "/province"),
      ]);
    }
  }, [searchResults]);

  const handleClass = (e) => {
    if (chevron.includes(e.target.id)) {
      e.target.classList.remove("chevronSwitch");
      const spin = chevron.filter((el) => el != e.target.id);
      chevronSpin(spin);
    } else {
      e.target.classList.add("chevronSwitch");
      chevronSpin([...chevron, ...e.target.id]);
    }
  };

  const dropProps = {
    countries: [{ name: "South Africa", link: "/" }],
    provinces: [
      { name: "KWAZULU-NATAL", link: "/province" },
      { name: "LIMPOPO", link: "/province" },
      { name: "NORTH WEST", link: "/province" },
      { name: "NORTHERN CAPE", link: "/province" },
      { name: "GAUTENG", link: "/province" },
      { name: "EASTERN CAPE", link: "/province" },
      { name: "WESTERN CAPE", link: "/province" },
      { name: "FREE STATE", link: "/province" },
      { name: "MPUMALANGA", link: "/province" },
    ],
    municipalities: ["METROPOLITAN", "DISTRICT", "LOCAL"],
    cities: ["Joburg", "Durban", "Cape Town"],
  };
  const darkOrLight = darkMode ? "Light" : "Dark";
  const iconDark = darkMode ? "dark-icons" : "";
  const activeSearch = search ? "active-search" : "";
  useEffect(() => {
    searchInput.current.focus();
  }, [search, toggleState, darkMode]);

  const spanStyleToggle = search ? {} : { display: "none" };
  const currencyDarkMode = darkMode ? { color: "white" } : { color: "inherit" };

  return (
    <div className={`side-div`} style={sideToggle}>
      <ul>
        <li
          className={`search-list ${iconDark} ${activeSearch} chevronSwitch`}
          onClick={handleClass}
          id="1"
        >
          <div>Search All Fields</div>
          <input
            type="text"
            autoFocus
            ref={searchInput}
            onChange={(e) => {
              dispatch(searchThunk(e.target.value));
            }}
          />
          <box-icon
            name="search-alt-2"
            type="solid"
            onClick={() => activateSearch(!search)}
          ></box-icon>
          <span style={spanStyleToggle}>
            <DropList dropProps={searchArr} />
          </span>
        </li>
        <li className={iconDark} onClick={handleClass} id="2">
          Country <box-icon name="chevron-down"></box-icon>
          <span>
            <DropList dropProps={dropProps.countries} />
          </span>
        </li>
        <li onClick={handleClass} id="3" className={iconDark}>
          Provinces <box-icon name="chevron-down"></box-icon>
          <span>
            <DropList dropProps={dropProps.provinces} />
          </span>
        </li>
        <Link
          to={{ pathname: "/converter" }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <li
            className={iconDark}
            onClick={() => {
              if (window.location.pathname !== "/converter") {
                dispatch(toggleBurger());
              }
            }}
            style={currencyDarkMode}
          >
            Currency Converter <box-icon name="money"></box-icon>
          </li>
        </Link>
        <li onClick={handleDarkMode} className={iconDark}>
          {darkOrLight} Mode <box-icon name="brightness"></box-icon>
        </li>
        {/* <li onClick={handleClass} id="3">
          Cities <box-icon name="chevron-down"></box-icon>
          <span><DropList dropProps={dropProps.cities} /></span>
        </li>
        <li>
          About Page <box-icon name="paper-plane"></box-icon>
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
