import React from "react";
import { render } from "react-dom";

import { MyResponsiveBar } from "./components/Bar";
import { MyResponsivePie } from "./components/PieChart";
import { MyResponsiveSwarmPlot } from "./components/SwarmPlot";
import { MyResponsiveChoropleth } from "./components/Chroropleth";
import { ToPrintComponent } from "./components/ToPrintComponent";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: 1000,
  height: 500,
};


const App = () => (
  <div style={styles}>
    <ToPrintComponent styles={styles} tobePrinted={<MyResponsiveBar />} />
    <ToPrintComponent styles={styles} tobePrinted={<MyResponsivePie />} />
    <ToPrintComponent styles={styles} tobePrinted={<MyResponsiveSwarmPlot />} />
    <ToPrintComponent
      styles={styles}
      tobePrinted={<MyResponsiveChoropleth />}
    />
  </div>
);

render(<App />, document.getElementById("root"));
