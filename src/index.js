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
  <div style={styles} ref={ref}>
    <MyResponsiveBar />
  </div>
));
const MyComponent = () => {
  const componentRef = useRef();

  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} />
      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
    </React.Fragment>
  );
};

const App = () => (
  <div style={styles}>
    <MyComponent />
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
