import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleBurger } from "../../../../app/redux/topbar/topbarActions";
import { provinceThunk } from "../../../../app/redux/provinces/provinceActions";

function DropList({ dropProps }) {
  const dispatch = useDispatch();
  return (
    <ul>
      {dropProps.map((el) => (
        <Link
          to={{ pathname: el.link }}
          key={el.name}
          style={{ textDecoration: "none" }}
        >
          <li
            onClick={() => {
              localStorage.setItem('provinceName', el.name.toUpperCase())
              dispatch(toggleBurger());
              const bar = document.querySelector(".cross-div");
              const nav = document.querySelector("nav");
              const navWrapper = document.querySelector(".nav-wrapper");
              bar.classList.remove("bar");
              nav.classList.remove("laynav");
              navWrapper.classList.remove("wrapperOn");
              console.log(localStorage.getItem('provinceName'))
              el.link !== '/' && dispatch(provinceThunk(localStorage.getItem("provinceName")))        
            }}
          >
            {el.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default DropList;
