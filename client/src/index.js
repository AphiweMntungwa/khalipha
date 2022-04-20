import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Triangle from "./Components/TriangleDiv/Triangle";
import Provinces from "./Components/Provinces/Provinces";
import Countries from "./Components/Countries/Countries";
import Converter from "./Components/Currency/Converter";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <App>
              <Triangle />
              <Countries />
            </App>
          </Provider>
        }
      />
      <Route
        path="/province"
        element={
          <Provider store={store}>
            <App>
              <Triangle provOrContr={true} /> <Provinces />
            </App>
          </Provider>
        }
      />
      <Route
        path="/converter"
        element={
          <Provider store={store}>
            <App>
              <Converter />
            </App>
          </Provider>
        }
      />
    </Routes>
  </Router>,

  document.getElementById("root")
);
