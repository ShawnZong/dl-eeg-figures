import React from "react";
import { render } from "react-dom";

import { MyResponsiveBar } from "./components/Bar";
import { MyResponsivePie } from "./components/PieChart";
import { MyResponsiveSwarmPlot } from "./components/SwarmPlot";
import { MyResponsiveChoropleth } from "./components/Chroropleth";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: 1000,
  height: 500,
};

const App = () => (
  <div style={styles}>
    <MyResponsiveBar />
    <MyResponsivePie />
    <MyResponsiveSwarmPlot />
    <MyResponsiveChoropleth />
  </div>
);

render(<App />, document.getElementById("root"));
