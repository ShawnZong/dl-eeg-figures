import React from "react";
import { render } from "react-dom";

import { MyResponsiveBar } from "./components/Bar";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: 500,
  height: 300,
};

const App = () => (
  <div style={styles}>
    <MyResponsiveBar />
  </div>
);

render(<App />, document.getElementById("root"));
