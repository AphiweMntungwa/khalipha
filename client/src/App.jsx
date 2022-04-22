import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./Components/Navbars/Topbar/Topbar";
import { store } from "./app/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Sidebar from "./Components/Navbars/Sidebar/Sidebar";
import { toggleDarkMode } from "./app/redux/darkmode/modeActions";
import {
  largeWindowSize,
  smallWindowSize,
} from "./app/redux/screen size/screenActions";

//shortening localStorage methods for easy reuse
const locSt = (get, set) => {
  if (set != undefined) {
    return localStorage.setItem(get, set);
  } else {
    return localStorage.getItem(get);
  }
};

function App({ children }) {
  const [size, resize] = useState();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.mode.darkMode);
  const largeWindow = useSelector((state) => state.screen.largeWindow);

  useEffect(() => {
    const darkState = locSt("darkMode");
    if (darkState === null) {
      locSt("darkMode", 0);
    } else if (darkState == 1) {
      dispatch(toggleDarkMode(1));
    } else if (darkState == 0) {
      dispatch(toggleDarkMode(0));
    }
  }, [darkMode]);
  const themeStyle = darkMode ? "dark-app" : "";

  window.onresize = () => {
    resize(window.innerWidth);
  };

  useEffect(() => {
    window.innerWidth > 620
      ? dispatch(largeWindowSize(true))
      : dispatch(smallWindowSize());
  }, [size]);
  const appId = largeWindow ? "large-app" : "";

  return (
    <Provider store={store}>
      <div className={`App ${themeStyle}`} id={appId}>
        <Topbar>{!largeWindow && <Sidebar />}</Topbar>

        {largeWindow && (
          <div className="large-body-container">
            <Sidebar onSwitch={true} />
            <div className="body-children">{children}</div>
          </div>
        )}
        {!largeWindow && children}
      </div>
    </Provider>
  );
}

export default App;
