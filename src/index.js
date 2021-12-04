import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyResponsiveBar, BarWithDropdown } from "./components/Bar";
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
const test = { display: "inline-block", width: "10px", height: "10px" };
const blockBackground = {
  background: "rgb(178, 24, 43)",
};
const App = () => (
  <div style={styles}>
    color <div style={{ background: "rgb(178, 24, 43)", ...test }} />
    <BarWithDropdown styles={styles} />
    {/* <ToPrintComponent styles={styles} tobePrinted={<MyResponsiveBar />} /> */}
    {/* <ToPrintComponent styles={styles} tobePrinted={<MyResponsivePie />} />
    <ToPrintComponent styles={styles} tobePrinted={<MyResponsiveSwarmPlot />} />
    <ToPrintComponent
      styles={styles}
      tobePrinted={<MyResponsiveChoropleth />}
    />  */}
  </div>
);

render(<App />, document.getElementById("root"));
