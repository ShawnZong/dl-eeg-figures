import React, { useRef } from "react";
import { render } from "react-dom";

import { MyResponsiveBar } from "./components/Bar";
import { MyResponsivePie } from "./components/PieChart";
import { MyResponsiveSwarmPlot } from "./components/SwarmPlot";
import { MyResponsiveChoropleth } from "./components/Chroropleth";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: 1000,
  height: 500,
};
const ComponentToPrint = React.forwardRef((props, ref) => (
  <React.Fragment ref={ref}>
    <MyResponsiveBar />
  </React.Fragment>
));
const App = () => (
  <div style={styles}>
    <ComponentToPrint />
  </div>
);
// const App = () => (
//   <div style={styles}>
//     <MyResponsiveBar />
//     <MyResponsivePie />
//     <MyResponsiveSwarmPlot />
//     <MyResponsiveChoropleth />
//   </div>
// );

render(<App />, document.getElementById("root"));
