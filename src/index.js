import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BarWithDropdown } from "./components/Bar";
import { PieWithDropdown } from "./components/PieChart";
import { SwarmPlotWithDropdown } from "./components/SwarmPlot";
import { ChoroplethWithDropdown } from "./components/Chroropleth";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: 1000,
  height: 500,
};

const App = () => (
  <div style={styles}>
    <BarWithDropdown styles={styles} />
    <ChoroplethWithDropdown styles={styles} />
    <SwarmPlotWithDropdown styles={styles} />
    <PieWithDropdown styles={styles} />
  </div>
);

render(<App />, document.getElementById("root"));
