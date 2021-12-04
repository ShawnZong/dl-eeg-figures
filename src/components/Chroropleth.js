// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveChoropleth } from "@nivo/geo";
import { generateRandomInt } from "../utils";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
import { MyDropDown } from "./Dropdown";
import { ToPrintComponent } from "./ToPrintComponent";
import { useState } from "react";

const world_countries = require("../data/world_countries.json");
const data = world_countries.features.map((country) => {
  return { id: country.id, value: generateRandomInt(30) };
});
const MyResponsiveChoropleth = ({ theme }) => (
  <ResponsiveChoropleth
    data={data}
    features={world_countries.features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors={theme}
    domain={[0, 30]}
    unknownColor="#666666"
    label="properties.name"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    legends={[
      {
        anchor: "bottom-left",
        direction: "column",
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: "left-to-right",
        itemTextColor: "#444444",
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
const colorSchemeIds = [
  "nivo",

  // Diverging
  "BrBG",
  "PRGn",
  "PiYG",
  "PuOr",
  "RdBu",
  "RdGy",
  "RdYlBu",
  "RdYlGn",
  "spectral",

  // Sequential (Single Hue)
  "blues",
  "greens",
  "greys",
  "oranges",
  "purples",
  "reds",

  // Sequential (Multi-Hue)
  "BuGn",
  "BuPu",
  "GnBu",
  "OrRd",
  "PuBuGn",
  "PuBu",
  "PuRd",
  "RdPu",
  "YlGnBu",
  "YlGn",
  "YlOrBr",
  "YlOrRd",
];

const ChoroplethWithDropdown = ({ styles }) => {
  const [theme, setTheme] = useState("nivo");

  return (
    <div>
      <MyDropDown setTheme={setTheme} colorSchemeIds={colorSchemeIds} />
      <ToPrintComponent
        styles={styles}
        tobePrinted={<MyResponsiveChoropleth theme={theme} />}
      />
    </div>
  );
};
export { MyResponsiveChoropleth, ChoroplethWithDropdown };
